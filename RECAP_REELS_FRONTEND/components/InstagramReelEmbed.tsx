'use client';

import { useEffect, useMemo, useState } from 'react';
import { normalizeInstagramPermalink } from '@/lib/instagram';

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process?: () => void;
      };
    };
  }
}

const INSTAGRAM_EMBED_SCRIPT_SRC = 'https://www.instagram.com/embed.js';

let instagramEmbedScriptPromise: Promise<void> | null = null;

function loadInstagramEmbedScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.instgrm?.Embeds?.process) return Promise.resolve();
  if (instagramEmbedScriptPromise) return instagramEmbedScriptPromise;

  const promise = new Promise<void>((resolve, reject) => {
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${INSTAGRAM_EMBED_SCRIPT_SRC}"]`
    );

    if (!script) {
      script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = INSTAGRAM_EMBED_SCRIPT_SRC;
      document.body.appendChild(script);
    }

    const handleScriptError = () => reject(new Error('Failed to load Instagram embed script'));
    script.addEventListener('error', handleScriptError, { once: true });

    const start = Date.now();
    const timeoutMs = 8000;

    const tick = () => {
      if (window.instgrm?.Embeds?.process) {
        resolve();
        return;
      }

      if (Date.now() - start >= timeoutMs) {
        reject(new Error('Instagram embed script did not initialize'));
        return;
      }

      window.setTimeout(tick, 50);
    };

    tick();
  });

  instagramEmbedScriptPromise = promise.catch((error) => {
    instagramEmbedScriptPromise = null;
    throw error;
  });

  return instagramEmbedScriptPromise;
}

type InstagramReelEmbedProps = {
  url: string;
  captioned?: boolean;
  className?: string;
};

export default function InstagramReelEmbed({ url, captioned = false, className }: InstagramReelEmbedProps) {
  const [scriptError, setScriptError] = useState<string | null>(null);
  const permalink = useMemo(() => normalizeInstagramPermalink(url), [url]);

  useEffect(() => {
    if (!permalink) return;

    let cancelled = false;
    setScriptError(null);

    loadInstagramEmbedScript()
      .then(() => {
        if (cancelled) return;
        window.instgrm?.Embeds?.process?.();
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        setScriptError(error instanceof Error ? error.message : 'Failed to load Instagram embed');
      });

    return () => {
      cancelled = true;
    };
  }, [permalink]);

  if (!permalink) {
    return (
      <div className={className}>
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
          Paste a valid Instagram Reel URL (example: <span className="font-mono">https://www.instagram.com/reel/...</span>)
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <blockquote
        key={permalink}
        className="instagram-media w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white"
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        data-instgrm-captioned={captioned ? 'true' : undefined}
      >
        <a href={permalink} target="_blank" rel="noreferrer" className="block px-4 py-3 text-sm text-neutral-700">
          View this reel on Instagram
        </a>
      </blockquote>

      {scriptError ? (
        <p className="mt-3 text-sm text-red-600">
          {scriptError}.{' '}
          <a className="underline" href={permalink} target="_blank" rel="noreferrer">
            Open on Instagram
          </a>
          .
        </p>
      ) : null}
    </div>
  );
}
