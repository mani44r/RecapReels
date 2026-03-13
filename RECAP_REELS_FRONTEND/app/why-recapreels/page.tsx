'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function WhyRecapReels() {
  const benefits = [
    {
      title: 'Speed & Efficiency',
      description: 'Fast turnaround times without compromising quality. We understand that in business, timing is everything. Get your content delivered when you need it most.',
      icon: '⚡',
    },
    {
      title: 'Consistent Quality',
      description: 'Every project meets our high standards. We maintain consistency across all content, ensuring your brand always looks professional and polished.',
      icon: '✨',
    },
    {
      title: 'Professional Quality',
      description: 'Expert production, editing, and post-production. We use professional equipment, industry-standard software, and proven creative techniques.',
      icon: '🎬',
    },
    {
      title: 'Business Growth Focus',
      description: 'Every video is designed with your business objectives in mind. We create content that drives measurable results: leads, conversions, and brand awareness.',
      icon: '📈',
    },
  ];

  const b2bBenefits = [
    {
      title: 'Lead Generation',
      description: 'Video content that captures attention and converts viewers into qualified leads. Our content is optimized for engagement and conversion.',
    },
    {
      title: 'Brand Visibility',
      description: 'Increase your brand presence across platforms. Short-form video is the most effective way to reach and engage your target audience today.',
    },
    {
      title: 'Higher Conversions',
      description: 'Video drives action. Our content is strategically designed to guide viewers through your sales funnel and convert them into customers.',
    },
    {
      title: 'Competitive Advantage',
      description: 'Stand out from competitors with professional, engaging video content. Show your audience why they should choose your business.',
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
              Why RecapReels?
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed">
              We're not just a video production company. We're your strategic partner 
              in growing your business through powerful short-form video content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Benefits */}
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
              What Sets Us Apart
            </h2>
            <p className="text-xl text-neutral-600">
              Four pillars that define our approach to every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-14 bg-gradient-to-br from-white to-indigo-50/30 rounded-3xl border border-neutral-200/50 hover:shadow-2xl transition-all"
              >
                <div className="text-6xl mb-16">{benefit.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-12 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-base">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Benefits */}
      <section className="py-56 bg-gradient-to-br from-neutral-900 via-indigo-950 to-purple-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Built for Business Success
            </h2>
            <p className="text-xl text-neutral-300">
              Every video we create is designed to drive measurable business results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {b2bBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-10 bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-700/50 hover:bg-neutral-800 transition-all"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-10 text-indigo-400 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed text-base">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-56 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-16 tracking-tight leading-tight">
                Your Strategic Content Partner
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 mb-12 leading-relaxed">
                At RecapReels, we understand that video content isn't just about creativity—it's about 
                driving business growth. We work closely with brands, startups, agencies, and businesses 
                to create content that delivers real results.
              </p>
              <p className="text-lg md:text-xl text-neutral-600 mb-16 leading-relaxed">
                Our team combines creative excellence with business acumen. We know what works in the 
                market, what drives engagement, and what converts viewers into customers. Every project 
                is an opportunity to help your business grow.
              </p>
              <ul className="space-y-5 mb-16">
                {[
                  'Data-driven content strategy',
                  'Platform-specific optimization',
                  'Performance tracking & analytics',
                  'Scalable content production',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-16 text-white shadow-2xl"
            >
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">Business-Focused</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">Fast</div>
                  <div className="text-blue-100">Turnaround Times</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">Professional</div>
                  <div className="text-blue-100">Quality Standards</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">Results</div>
                  <div className="text-blue-100">Driven Approach</div>
                </div>
              </div>
            </motion.div>
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
              Experience the RecapReels Difference
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Let's discuss how we can help your business grow through powerful video content.
            </p>
            <Button href="/contact" variant="secondary" className="text-lg px-8 py-4 bg-white text-indigo-600 hover:bg-neutral-100">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

