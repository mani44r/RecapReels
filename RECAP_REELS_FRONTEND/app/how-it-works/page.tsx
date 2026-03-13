'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Onboarding',
      description: 'We start by understanding your business, goals, target audience, and brand identity. This initial consultation helps us create a tailored content strategy that aligns with your objectives.',
      icon: '🔍',
    },
    {
      number: '02',
      title: 'Content Planning',
      description: 'Our team develops a comprehensive content plan, including concepts, scripts, storyboards, and a production timeline. We ensure every piece of content serves a clear business purpose.',
      icon: '📋',
    },
    {
      number: '03',
      title: 'Production & Shooting',
      description: 'Whether on-location or in-studio, we handle all aspects of production with professional equipment and expertise. We capture high-quality footage that tells your story effectively.',
      icon: '🎥',
    },
    {
      number: '04',
      title: 'Editing & Post-Production',
      description: 'Our editors transform raw footage into polished, engaging content. We apply professional color grading, motion graphics, sound design, and platform-specific optimizations.',
      icon: '✂️',
    },
    {
      number: '05',
      title: 'Review & Revisions',
      description: 'You review the content and provide feedback. We make revisions to ensure the final product perfectly matches your vision and business requirements.',
      icon: '👁️',
    },
    {
      number: '06',
      title: 'Delivery & Launch',
      description: 'We deliver your final content in all required formats and resolutions. Our team can also assist with scheduling, publishing, and performance tracking.',
      icon: '🚀',
    },
  ];

  return (
    <div className="pt-20 bg-[#030303] text-white min-h-screen">
      {/* Hero */}
      <section className="py-24 sm:py-40 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-10 tracking-tight">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">Works</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto px-2">
              A streamlined process designed for efficiency and results. 
              From initial consultation to final delivery, we make it simple.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 sm:py-40 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-48">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col lg:flex-row gap-10 items-center"
              >
                <div className="flex-1 w-full max-w-[400px] lg:max-w-none mx-auto">
                  <div className="relative">
                    <div className="text-7xl sm:text-9xl font-bold text-white/5 absolute -top-8 sm:-top-10 -left-2 sm:-left-4 z-0">
                      {step.number}
                    </div>
                    <div className="relative glass-panel rounded-[2.5rem] p-10 sm:p-16 w-full h-64 sm:h-80 flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.15)] overflow-hidden border border-white/10 group">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="text-6xl sm:text-8xl relative z-10 group-hover:scale-110 transition-transform duration-500">{step.icon}</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-10 tracking-tight">
                    {step.title}
                  </h2>
                  <p className="text-sm sm:text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Visual */}
      <section className="py-24 sm:py-40 relative bg-black/50 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-10 tracking-tight">
              Simple, Transparent Process
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-neutral-400 font-light leading-relaxed max-w-3xl mx-auto px-2">
              Clear communication and regular updates throughout the entire journey
            </p>
          </motion.div>

          <div className="hidden lg:flex items-center justify-between max-w-5xl mx-auto relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1 relative z-10 group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 glass-panel rounded-full flex items-center justify-center text-white font-bold text-xl mb-8 shadow-lg border border-white/20 group-hover:border-violet-500 group-hover:bg-violet-600/20 transition-all duration-300">
                  {index + 1}
                </div>
                <div className="text-sm font-medium text-neutral-400 text-center max-w-[120px] group-hover:text-white transition-colors duration-300">
                  {step.title}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-8 sm:top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-violet-500/50 to-purple-500/50 -z-0"></div>
                )}
              </div>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-12 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-neutral-400 font-light mb-12 sm:mb-24 max-w-2xl mx-auto px-2 leading-relaxed">
              Let's begin with a discovery call to understand your needs and goals.
            </p>
            <Button href="/contact" className="inline-block bg-white text-black px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
              Schedule a Call
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

