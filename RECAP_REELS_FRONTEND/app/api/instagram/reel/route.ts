import { NextRequest, NextResponse } from 'next/server';
import { normalizeInstagramPermalink } from '@/lib/instagram';

export const dynamic = 'force-dynamic';

function decodeHtmlEntities(input: string): string {
  return input
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex: string) => String.fromCharCode(Number.parseInt(hex, 16)))
    .replace(/&#([0-9]+);/g, (_, dec: string) => String.fromCharCode(Number.parseInt(dec, 10)));
}

function extractMetaContent(html: string, key: string): string | null {
  const metaTagRegex = /<meta\b[^>]*>/gi;
  const attrRegex = /([^\s=]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;
  const target = key.toLowerCase();

  let match: RegExpExecArray | null;
  while ((match = metaTagRegex.exec(html))) {
    const tag = match[0];
    const attrs: Record<string, string> = {};

    let attrMatch: RegExpExecArray | null;
    while ((attrMatch = attrRegex.exec(tag))) {
      const attrName = attrMatch[1]?.toLowerCase();
      const attrValue = attrMatch[2] ?? attrMatch[3] ?? attrMatch[4] ?? '';
      if (attrName) attrs[attrName] = attrValue;
    }

    const propOrName = (attrs.property ?? attrs.name ?? '').toLowerCase();
    if (propOrName !== target) continue;

    const content = attrs.content;
    if (!content) continue;

    return decodeHtmlEntities(content);
  }

  return null;
}

function extractBestVideoUrl(html: string): string | null {
  return (
    extractMetaContent(html, 'og:video:secure_url') ??
    extractMetaContent(html, 'og:video') ??
    extractMetaContent(html, 'twitter:player:stream') ??
    extractMetaContent(html, 'twitter:player') ??
    null
  );
}

function unescapeEmbeddedJsonString(input: string): string {
  return input
    .replace(/\\u0026/g, '&')
    .replace(/\\\\\//g, '/')
    .replace(/\\\//g, '/')
    .replace(/\\\\/g, '\\');
}

function extractVideoUrlFromEmbedHtml(html: string): string | null {
  const match = html.match(/\\\"video_url\\\":\\\"(.*?\\.mp4.*?)\\\"/i);
  const raw = match?.[1];
  if (!raw) return null;
  const unescaped = unescapeEmbeddedJsonString(raw);
  return unescaped.startsWith('http') ? unescaped : null;
}

export async function GET(request: NextRequest) {
  const rawUrl = request.nextUrl.searchParams.get('url') ?? '';
  const permalink = normalizeInstagramPermalink(rawUrl);

  if (!permalink) {
    return NextResponse.json({ error: 'Invalid Instagram URL' }, { status: 400 });
  }

  try {
    const response = await fetch(permalink, {
      redirect: 'follow',
      cache: 'no-store',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch Instagram page (${response.status})` },
        { status: 502 }
      );
    }

    const html = await response.text();
    const thumbnailUrl = extractMetaContent(html, 'og:image');

    let videoUrl = extractBestVideoUrl(html);

    if (!videoUrl) {
      const embedResponse = await fetch(`${permalink}embed/`, {
        redirect: 'follow',
        cache: 'no-store',
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
        },
      });

      if (embedResponse.ok) {
        const embedHtml = await embedResponse.text();
        videoUrl = extractVideoUrlFromEmbedHtml(embedHtml);
      }
    }

    if (!videoUrl) {
      return NextResponse.json(
        {
          error: 'Could not resolve a playable video URL (the reel may be private, blocked, or Instagram changed their HTML).',
          permalink,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        permalink,
        videoUrl,
        thumbnailUrl,
      },
      {
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
