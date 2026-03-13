import InstagramReelLoader from '@/components/InstagramReelLoader';

export default function ReelPreviewPage({
  searchParams,
}: {
  searchParams?: { url?: string | string[] };
}) {
  const urlParam = searchParams?.url;
  const initialUrl = typeof urlParam === 'string' ? urlParam : '';

  return (
    <div className="pt-28 pb-24 bg-[#030303] text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
          Instagram <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">Reel Preview</span>
        </h1>
        <p className="mt-4 text-neutral-400 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-2">
          Paste an Instagram Reel link and the embed will load here.<br/>
          <span className="text-violet-400 opacity-80 mt-2 block break-all text-sm sm:text-base">Example: https://www.instagram.com/p/DTaRV-sgSTt/</span>
        </p>

        <div className="mt-12 sm:mt-16 glass-panel rounded-3xl p-4 sm:p-8 border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.1)]">
          <InstagramReelLoader initialUrl={initialUrl} />
        </div>

        <p className="mt-8 text-sm sm:text-base text-neutral-500 font-light leading-relaxed">
          Note: Instagram embeds may not autoplay (browser policy) and private reels cannot be embedded.
        </p>
      </div>
    </div>
  );
}

