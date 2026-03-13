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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-12 tracking-tight">
              About RecapReels
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed">
              We're building a company that helps businesses communicate better 
              through the power of short-form video content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-56 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-12 tracking-tight leading-tight">
                Our Story
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl">
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
              className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-16 text-white min-h-[450px] flex items-center justify-center shadow-2xl"
            >
              <div className="text-center">
                <div className="text-6xl mb-10">🎬</div>
                <p className="text-xl text-blue-100">
                  Professional video content for professional businesses
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-56 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-12 rounded-3xl shadow-xl"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 leading-tight">
                Our Mission
              </h3>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                To empower businesses to communicate effectively and grow through professional 
                short-form video content. We believe every business deserves access to high-quality 
                video content that drives real results.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-12 rounded-3xl shadow-xl"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 leading-tight">
                Our Vision
              </h3>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                To become the leading B2B short-form video content partner, recognized for our 
                commitment to quality, speed, and business results. We envision a future where 
                every business can leverage video content to achieve their growth objectives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-56 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-10">
              Our Values
            </h2>
            <p className="text-xl text-neutral-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="py-14 px-4 bg-gradient-to-br from-white to-indigo-50/30 rounded-2xl border border-neutral-200/50 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-10 leading-tight">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-56 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Let's Work Together
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Ready to see how RecapReels can help your business grow? 
              Let's start a conversation.
            </p>
            <Button href="/contact" variant="secondary" className="text-lg px-8 py-4 bg-white text-indigo-600 hover:bg-neutral-100">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

