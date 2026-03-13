'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import InstagramReelEmbed from '@/components/InstagramReelEmbed';
import { normalizeInstagramPermalink } from '@/lib/instagram';

type InstagramReelLoaderProps = {
  initialUrl?: string;
};

export default function InstagramReelLoader({ initialUrl = '' }: InstagramReelLoaderProps) {
  const [inputUrl, setInputUrl] = useState(initialUrl);
  const [activeUrl, setActiveUrl] = useState(initialUrl);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    if (!initialUrl) return;
    setInputUrl(initialUrl);
    setActiveUrl(initialUrl);
  }, [initialUrl]);

  const canLoad = useMemo(() => Boolean(normalizeInstagramPermalink(inputUrl)), [inputUrl]);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const normalized = normalizeInstagramPermalink(inputUrl);
      if (!normalized) {
        setValidationError('Invalid Instagram URL. Use a /reel/ link.');
        return;
      }
      setValidationError(null);
      setActiveUrl(normalized);
    },
    [inputUrl]
  );

  const handleClear = useCallback(() => {
    setInputUrl('');
    setActiveUrl('');
    setValidationError(null);
  }, []);

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-[0_30px_80px_-60px_rgba(79,70,229,0.35)] backdrop-blur">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="flex-1">
          <span className="block text-sm font-medium text-neutral-800">Instagram Reel link</span>
          <input
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="https://www.instagram.com/reel/XXXXXXXXXXX/"
            className="mt-2 w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            inputMode="url"
            autoComplete="off"
          />
        </label>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={!canLoad}
            className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-indigo-700 hover:to-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Load
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50"
          >
            Clear
          </button>
        </div>
      </form>

      {validationError ? <p className="mt-3 text-sm text-red-600">{validationError}</p> : null}

      <div className="mt-6">
        <InstagramReelEmbed url={activeUrl} />
      </div>
    </div>
  );
}
