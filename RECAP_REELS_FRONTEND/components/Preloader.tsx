'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [show, setShow] = useState(false);
  const [isRendered, setIsRendered] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if the preloader has already been shown in this session
    const hasShown = sessionStorage.getItem('preloaderShown');
    
    if (!hasShown) {
      setShow(true);
      sessionStorage.setItem('preloaderShown', 'true');
      sessionStorage.setItem('preloaderTimestamp', Date.now().toString());
    } else {
      setIsRendered(false);
    }
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch
  if (!isRendered) return null;

  // Custom easing for the premium feel
  const easePremium = [0.22, 1, 0.36, 1] as const;

  const text = "RecapReels".split("");
  
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={show ? { opacity: 1, pointerEvents: 'none' } : { opacity: 0, pointerEvents: 'none' }}
      transition={{ delay: 2.5, duration: 0.1 }}
      onAnimationComplete={() => setIsRendered(false)}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* Top Shutter */}
      <motion.div
        initial={{ y: "0%" }}
        animate={show ? { y: "-100%" } : { y: "-100%" }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.76, 0, 0.24, 1] }} 
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#030303] flex items-end justify-center overflow-hidden pointer-events-auto"
      >
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </motion.div>

      {/* Bottom Shutter */}
      <motion.div
        initial={{ y: "0%" }}
        animate={show ? { y: "100%" } : { y: "100%" }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.76, 0, 0.24, 1] }} 
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#030303] flex items-start justify-center overflow-hidden pointer-events-auto"
      >
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </motion.div>

      {/* The Purple Laser Slicing Across */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={show ? { scaleX: [0, 1, 1], opacity: [0, 1, 0] } : {}}
        transition={{ 
          scaleX: { delay: 1.0, duration: 0.2, ease: "easeOut" },
          opacity: { delay: 1.0, duration: 0.3, times: [0, 0.5, 1], ease: "easeInOut" }
        }}
        className="absolute top-1/2 left-0 right-0 h-[2px] bg-violet-500 z-20 shadow-[0_0_20px_5px_rgba(139,92,246,0.8)] origin-center -translate-y-1/2 pointer-events-none"
      />

      {/* The Glitching Logo */}
      <motion.div
        initial={{ opacity: 1, scale: 0.95, textShadow: "0px 0px 0px rgba(255,0,0,0), 0px 0px 0px rgba(0,255,255,0)" }}
        animate={show ? { 
          opacity: [1, 1, 1, 0, 0], 
          scale: [0.95, 1, 1, 1, 1],
          textShadow: [
            "0px 0px 0px rgba(255,0,0,0), 0px 0px 0px rgba(0,255,255,0)", 
            "0px 0px 0px rgba(255,0,0,0), 0px 0px 0px rgba(0,255,255,0)", 
            "5px 0px 0px rgba(255,0,0,0.8), -5px 0px 0px rgba(0,255,255,0.8)", 
            "-3px 2px 0px rgba(255,0,0,0.8), 3px -2px 0px rgba(0,255,255,0.8)", 
            "0px 0px 0px rgba(255,0,0,0), 0px 0px 0px rgba(0,255,255,0)" 
          ],
          x: [0, 0, 5, -5, 0] 
        } : {}}
        transition={{ 
          duration: 1.2, 
          opacity: { times: [0, 0.5, 0.99, 1, 1] }, 
          scale: { times: [0, 0.5, 0.99, 1, 1], ease: "easeOut" },
          textShadow: { times: [0, 0.83, 0.85, 0.88, 1] }, 
          x: { times: [0, 0.83, 0.85, 0.88, 1] }
        }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight absolute z-10 origin-center select-none flex pointer-events-none"
      >
        <span className="text-white drop-shadow-2xl">Recap</span>
        <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
          Reels
        </span>
      </motion.div>
    </motion.div>
  );
}
