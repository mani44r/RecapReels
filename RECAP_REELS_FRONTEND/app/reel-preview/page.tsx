import InstagramReelLoader from '@/components/InstagramReelLoader';

export default function ReelPreviewPage({
  searchParams,
}: {
  searchParams?: { url?: string | string[] };
}) {
  const urlParam = searchParams?.url;
  const initialUrl = typeof urlParam === 'string' ? urlParam : '';

  return (
    <div className="pt-28 pb-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
          Instagram Reel Preview
        </h1>
        <p className="mt-4 text-neutral-700 text-lg leading-relaxed">
          Paste an Instagram Reel link and the embed will load here.
          https://www.instagram.com/p/DTaRV-sgSTt/
        </p>

        <div className="mt-10">
          <InstagramReelLoader initialUrl={initialUrl} />
        </div>

        <p className="mt-8 text-sm text-neutral-600 leading-relaxed">
          Note: Instagram embeds may not autoplay (browser policy) and private reels cannot be embedded.
        </p>
      </div>
    </div>
  );
}

