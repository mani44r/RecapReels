'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function About() {
  const values = [
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in every project, ensuring quality that reflects your brand.',
    },
    {
      title: 'Innovation',
      description: 'We stay ahead of trends and leverage the latest techniques to create cutting-edge content.',
    },
    {
      title: 'Partnership',
      description: 'We work as an extension of your team, understanding your goals and delivering results.',
    },
    {
      title: 'Results',
      description: 'Every video is created with a clear purpose: to drive measurable business growth.',
    },
  ];

  return (
    <div className="pt-20 bg-[#030303] text-white min-h-screen">
      {/* Hero */}
      <section className="py-32 sm:py-56 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 sm:mb-12 tracking-tight">
              About Recap<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">Reels</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 leading-relaxed font-light px-2">
              We're building a company that helps businesses communicate better 
              through the power of short-form video content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 sm:py-40 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-12 tracking-tight leading-tight">
                  Our Story
                </h2>
                <div className="space-y-6 text-base sm:text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl">
                <p>
                  RecapReels was founded on a simple belief: businesses need better ways to communicate 
                  in an increasingly digital world. Short-form video has become the most powerful medium 
                  for engagement, but many businesses struggle to create content that truly drives results.
                </p>
                <p>
                  We recognized that the market was filled with consumer-focused creators, but there was 
                  a gap for businesses that needed professional, strategic video content aligned with their 
                  growth objectives. That's where we come in.
                </p>
                <p>
                  Today, we work with brands, startups, agencies, event organizers, and businesses of all 
                  sizes to create short-form video content that doesn't just look good—it drives measurable 
                  business results.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel relative rounded-[2rem] p-12 sm:p-16 text-white min-h-[400px] flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.15)] group overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-purple-800/30 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center relative z-10">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">🎬</div>
                <p className="text-lg sm:text-xl text-neutral-300 font-light">
                  Professional video content for professional businesses
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 sm:py-40 relative border-t border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-10 sm:p-12 rounded-3xl border border-white/10 shadow-lg"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-12 leading-tight">
                Our Mission
              </h3>
              <p className="text-sm sm:text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
                To empower businesses to communicate effectively and grow through professional 
                short-form video content. We believe every business deserves access to high-quality 
                video content that drives real results.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel p-10 sm:p-12 rounded-3xl border border-white/10 shadow-lg"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-12 leading-tight">
                Our Vision
              </h3>
              <p className="text-sm sm:text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
                To become the leading B2B short-form video content partner, recognized for our 
                commitment to quality, speed, and business results. We envision a future where 
                every business can leverage video content to achieve their growth objectives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-40 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-32"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-10">
              Our Values
            </h2>
            <p className="text-base sm:text-xl text-neutral-400 font-light">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel py-10 sm:py-14 px-6 sm:px-8 rounded-[2rem] border border-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all group"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-10 leading-tight group-hover:text-violet-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-neutral-400 font-light leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-48 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] to-[#0a0212]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-12 tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-base sm:text-xl text-neutral-400 font-light mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
              Ready to see how RecapReels can help your business grow? 
              Let's start a conversation.
            </p>
            <Button href="/contact" className="inline-block bg-white text-black px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

