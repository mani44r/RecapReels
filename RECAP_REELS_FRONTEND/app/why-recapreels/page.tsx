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
    <div className="pt-20 bg-[#030303] text-white min-h-screen">
      {/* Hero */}
      <section className="py-24 sm:py-40 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 sm:mb-12 tracking-tight">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">RecapReels?</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-neutral-400 font-light leading-relaxed px-2">
              We're not just a video production company. We're your strategic partner 
              in growing your business through powerful short-form video content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-24 sm:py-40 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-10 tracking-tight">
              What Sets Us Apart
            </h2>
            <p className="text-base sm:text-xl text-neutral-400 font-light">
              Four pillars that define our approach to every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel p-10 sm:p-14 rounded-3xl border border-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-5xl sm:text-6xl mb-12 sm:mb-16 relative z-10 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 leading-tight relative z-10 group-hover:text-violet-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-neutral-400 font-light leading-relaxed text-sm sm:text-base md:text-lg relative z-10">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Benefits */}
      <section className="py-24 sm:py-40 relative border-t border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-10 tracking-tight">
              Built for Business Success
            </h2>
            <p className="text-base sm:text-xl text-neutral-400 font-light">
              Every video we create is designed to drive measurable business results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {b2bBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 sm:p-10 glass-panel border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all group rounded-2xl"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 sm:mb-8 leading-tight group-hover:text-violet-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-neutral-400 font-light leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 sm:py-40 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-12 tracking-tight leading-tight">
                Your Strategic Content Partner
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-light mb-8 sm:mb-10 leading-relaxed">
                At RecapReels, we understand that video content isn't just about creativity—it's about 
                driving business growth. We work closely with brands, startups, agencies, and businesses 
                to create content that delivers real results.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-light mb-10 sm:mb-12 leading-relaxed">
                Our team combines creative excellence with business acumen. We know what works in the 
                market, what drives engagement, and what converts viewers into customers. Every project 
                is an opportunity to help your business grow.
              </p>
              <ul className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
                {[
                  'Data-driven content strategy',
                  'Platform-specific optimization',
                  'Performance tracking & analytics',
                  'Scalable content production',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-violet-500 mr-3 sm:mr-4 flex-shrink-0 mt-0.5 sm:mt-1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-300 font-light text-sm sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-[2rem] p-10 sm:p-16 text-white shadow-[0_0_50px_rgba(139,92,246,0.1)] border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="space-y-8 sm:space-y-12 relative z-10">
                <div>
                  <div className="text-4xl sm:text-5xl font-bold mb-2">100%</div>
                  <div className="text-violet-400 font-light text-lg sm:text-xl">Business-Focused</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold mb-2">Fast</div>
                  <div className="text-violet-400 font-light text-lg sm:text-xl">Turnaround Times</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold mb-2">Professional</div>
                  <div className="text-violet-400 font-light text-lg sm:text-xl">Quality Standards</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold mb-2">Results</div>
                  <div className="text-violet-400 font-light text-lg sm:text-xl">Driven Approach</div>
                </div>
              </div>
            </motion.div>
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
              Experience the RecapReels Difference
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-neutral-400 font-light mb-12 sm:mb-24 max-w-2xl mx-auto px-2 leading-relaxed">
              Let's discuss how we can help your business grow through powerful video content.
            </p>
            <Button href="/contact" className="inline-block bg-white text-black px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

