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
    <div className="pt-20">
      {/* Hero */}
      <section className="py-56 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-10 tracking-tight">
              How It Works
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed">
              A streamlined process designed for efficiency and results. 
              From initial consultation to final delivery, we make it simple.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-56 bg-white">
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
                <div className="flex-1">
                  <div className="relative">
                    <div className="text-9xl font-bold text-indigo-50 absolute -top-10 -left-4">
                      {step.number}
                    </div>
                    <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-16 w-full h-80 flex items-center justify-center shadow-2xl">
                      <div className="text-8xl">{step.icon}</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-12 tracking-tight">
                    {step.title}
                  </h2>
                  <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Visual */}
      <section className="py-56 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-32"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-12 tracking-tight">
              Simple, Transparent Process
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
              Clear communication and regular updates throughout the entire journey
            </p>
          </motion.div>

          <div className="hidden lg:flex items-center justify-between max-w-5xl mx-auto relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-12 shadow-lg">
                  {index + 1}
                </div>
                <div className="text-sm font-medium text-neutral-700 text-center max-w-[120px]">
                  {step.title}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 -z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-56 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-24 leading-relaxed">
              Let's begin with a discovery call to understand your needs and goals.
            </p>
            <Button href="/contact" variant="secondary" className="text-lg px-10 py-5 bg-white text-indigo-600 hover:bg-neutral-100 font-semibold">
              Schedule a Call
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

