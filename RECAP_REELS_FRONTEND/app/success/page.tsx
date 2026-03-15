'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Success() {
  // Clear any temporary preloader state or simply show celebratory UI
  useEffect(() => {
    // Scroll to top on success
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#030303] min-h-screen text-white flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 sm:p-16 text-center relative z-10 shadow-[0_0_100px_rgba(139,92,246,0.2)]"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-gradient-to-tr from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(139,92,246,0.5)]"
        >
          <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter mb-6">
          Booking <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Confirmed!</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-neutral-400 mb-12 font-light leading-relaxed">
          Your production slot is secured. Our creative team will reach out to you within 24 hours to begin the storyboard process.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="px-8 py-4 bg-white text-black rounded-full font-extrabold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-all">
            Return Home
          </Link>
          <Link href="/services" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
            Support Center
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
