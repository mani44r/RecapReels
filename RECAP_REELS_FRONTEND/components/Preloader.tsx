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
    } else {
      setIsRendered(false);
    }
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch
  if (!isRendered) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={show ? { y: '-100%' } : { y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: 1.3, // 1.3s overlay slides up
        ease: [0.22, 1, 0.36, 1] 
      }}
      onAnimationComplete={() => setIsRendered(false)}
      className="fixed inset-0 z-[100] bg-[#030303] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
        animate={show ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
        transition={{ 
          duration: 0.8, 
          delay: 0.3, // 0.3s logo fade + scale start
          ease: [0.22, 1, 0.36, 1] 
        }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
      >
        <span className="text-white">Recap</span>
        <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">Reels</span>
      </motion.div>
    </motion.div>
  );
}
