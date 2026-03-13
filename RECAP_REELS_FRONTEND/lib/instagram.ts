export function normalizeInstagramPermalink(rawUrl: string): string | null {
  const trimmed = rawUrl.trim();
  if (!trimmed) return null;

  let url: URL;
  try {
    url = new URL(trimmed.startsWith('http://') || trimmed.startsWith('https://') ? trimmed : `https://${trimmed}`);
  } catch {
    return null;
  }

  const hostname = url.hostname.toLowerCase();
  if (!(hostname === 'instagram.com' || hostname.endsWith('.instagram.com'))) return null;

  const segments = url.pathname.split('/').filter(Boolean);
  const type = segments[0];
  const shortcode = segments[1];

  if (!type || !shortcode) return null;
  if (!['reel', 'p', 'tv'].includes(type)) return null;

  return `https://www.instagram.com/${type}/${shortcode}/`;
}

