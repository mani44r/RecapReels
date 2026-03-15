'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [animConfig, setAnimConfig] = useState({
    heroDelay: 1.6, 
    contentDelay: 1.7,
    scrollDelay: 2.2,
    isReturning: false
  });

  useEffect(() => {
    // If the preloader has already been executed in this session, skip the initial zero-opacity state.
    // This allows instant visibility when navigating back to Home via soft-routing.
    if (sessionStorage.getItem('preloaderShown')) {
      const timestamp = sessionStorage.getItem('preloaderTimestamp');
      const timeSince = timestamp ? Date.now() - parseInt(timestamp) : 5000;
      
      // Give the actual preloader exactly 2 seconds to finish if they click home super rapidly
      if (timeSince > 2000) {
        setAnimConfig({
          heroDelay: 0,
          contentDelay: 0,
          scrollDelay: 0,
          isReturning: true
        });
      }
    }
  }, []);
  const reels = [
    { title: 'Brand Story', src: '/reels/v1.mp4' },
    { title: 'Event Highlights', src: '/reels/v1 copy.mp4' },
    { title: 'Promo Launch', src: '/reels/v1 copy 2.mp4' },
    { title: 'Testimonial', src: '/reels/v1 copy 3.mp4' },
    { title: 'Product Teaser', src: '/reels/v1 copy 4.mp4' },
  ];

  return (
    <div className="bg-[#030303] text-white min-h-screen selection:bg-violet-500/30 overflow-hidden">
      
      {/* 
        ========================================
        HERO SECTION
        ======================================== 
      */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10 pb-20">
          <motion.div
            key={`hero-${animConfig.isReturning}`}
            initial={animConfig.isReturning ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: animConfig.heroDelay, ease: [0.76, 0, 0.24, 1] }} 
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
              <span className="text-sm font-medium text-neutral-300">The New Standard for B2B Content</span>
            </div>

            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-6 sm:mb-8 leading-[1.1]">
              Grow your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500">business</span> <br className="hidden sm:block" />
              with short form <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">video content.</span>
            </h1>

            <p className="text-base sm:text-xl lg:text-2xl text-neutral-400 mb-8 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-4 sm:px-0">
              We produce high-end, short-form video content engineered to elevate your brand, capture leads, and dominate your industry.
            </p>

            <motion.div
              key={`content-${animConfig.isReturning}`}
              initial={animConfig.isReturning ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: animConfig.contentDelay, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-white transition-all duration-300 ease-in-out bg-violet-600 rounded-full hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600 shadow-[0_0_40px_-5px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_-10px_rgba(139,92,246,0.6)] w-full sm:w-auto text-base sm:text-lg"
              >
                <span>Book Your Demo</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-white transition-all duration-300 ease-in-out bg-transparent border border-white/20 rounded-full hover:bg-white/10 w-full sm:w-auto text-base sm:text-lg backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          key={`scroll-${animConfig.isReturning}`}
          initial={animConfig.isReturning ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: animConfig.scrollDelay, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-neutral-500 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* 
        ========================================
        REELS SHOWCASE
        ======================================== 
      */}
      <section className="py-16 sm:py-32 relative border-t border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-24">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              Our Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">Masterpieces</span>
            </h2>
            <p className="text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto font-light px-2 sm:px-0">
              Scroll through our recent productions. We don't just record; we craft stories that resonate.
            </p>
          </div>

          <div className="relative w-full max-w-[100vw] overflow-hidden">
            {/* Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none"></div>

            <div className="reel-marquee">
              <div className="reel-track">
                {[...reels, ...reels].map((reel, index) => (
                  <div key={`${reel.src}-${index}`} className="reel-card group">
                    <div className="reel-media transition-transform duration-500 group-hover:scale-[1.02]">
                      <video
                        src={reel.src}
                        className="reel-img opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                      <div className="reel-overlay opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex justify-between items-start">
                           <div className="reel-badge bg-black/40 px-2 py-1 rounded backdrop-blur-md">RecapReels</div>
                           <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                             <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                           </div>
                        </div>
                        <div className="reel-title text-lg tracking-wide">{reel.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        VALUE PROP SECTION
        ======================================== 
      */}
      <section className="py-16 sm:py-40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 sm:mb-20 text-center sm:text-left">
            <h2 className="text-3xl sm:text-6xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
              Why Brands Choose <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">RecapReels</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: '10x',
                label: 'Engagement Surge',
                description: 'Our cinematic approach stops the scroll and dramatically increases audience retention.',
                color: 'from-violet-400 to-fuchsia-400'
              },
              {
                stat: '48h',
                label: 'Rapid Delivery',
                description: 'We move at the speed of social, delivering polished content within 48 hours without compromising quality.',
                color: 'from-purple-400 to-indigo-400'
              },
              {
                stat: '100%',
                label: 'ROI Focused',
                description: 'Every cut, transition, and script is optimized to convert your viewers into actual customers.',
                color: 'from-cyan-400 to-emerald-400'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className={`text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br ${item.color} mb-4 sm:mb-6`}>
                  {item.stat}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{item.label}</h3>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================
        MASSIVE CTA SECTION
        ======================================== 
      */}
      <section className="py-20 sm:py-48 relative overflow-hidden">
        {/* Deep glowing background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] to-[#0f0518]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] bg-violet-600/20 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] sm:w-[30vw] sm:h-[30vw] bg-purple-600/30 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 sm:p-20 rounded-[2.5rem] sm:rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(139,92,246,0.15)] mx-2 sm:mx-0"
          >
            <h2 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 tracking-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Dominate</span> <br className="hidden sm:block"/> Your Niche?
            </h2>
            <p className="text-base sm:text-2xl mb-10 sm:mb-12 text-neutral-300 font-light max-w-2xl mx-auto">
              Partner with RecapReels and turn your content into your most powerful marketing asset.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 font-bold text-black transition-all duration-300 bg-white rounded-full hover:bg-neutral-200 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] text-base sm:text-xl w-full sm:w-auto"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
