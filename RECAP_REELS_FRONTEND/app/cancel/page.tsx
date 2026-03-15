'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Cancel() {
  return (
    <div className="bg-[#030303] min-h-screen text-white flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 sm:p-16 text-center relative z-10 shadow-[0_0_100px_rgba(239,68,68,0.1)]"
      >
        <div className="w-24 h-24 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-10">
          <svg className="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter mb-6">
          Checkout <span className="text-red-500">Cancelled</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-neutral-400 mb-12 font-light leading-relaxed">
          It looks like you didn't complete your booking. No charges were made. If you had trouble with the payment, please try again or contact our support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="px-8 py-4 bg-white text-black rounded-full font-extrabold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-all">
            Back to Plans
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
            Get Help
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
