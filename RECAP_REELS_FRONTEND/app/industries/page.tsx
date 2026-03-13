'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function Industries() {
  const industries = [
    {
      title: 'Startups',
      description: 'Launch your brand with compelling video content that captures attention and drives early growth. Perfect for product launches, pitch decks, and investor presentations.',
      useCases: [
        'Product launch videos',
        'Founder stories',
        'Pitch deck content',
        'Early marketing campaigns',
      ],
      icon: '🚀',
    },
    {
      title: 'Corporate Companies',
      description: 'Enterprise-grade video content for large organizations. From internal communications to external marketing, we scale to meet your needs.',
      useCases: [
        'Corporate communications',
        'Brand campaigns',
        'Training videos',
        'Annual reports',
      ],
      icon: '🏢',
    },
    {
      title: 'Events & Conferences',
      description: 'Capture the energy and impact of your events with professional recap videos. Perfect for conferences, trade shows, product launches, and corporate gatherings.',
      useCases: [
        'Conference highlights',
        'Event recaps',
        'Speaker spotlights',
        'Trade show content',
      ],
      icon: '🎪',
    },
    {
      title: 'Agencies',
      description: 'White-label video production services for marketing agencies. We help you deliver exceptional video content to your clients without the overhead.',
      useCases: [
        'Client deliverables',
        'Campaign content',
        'Social media assets',
        'Brand videos',
      ],
      icon: '🎯',
    },
    {
      title: 'Educational Institutions',
      description: 'Engaging video content for schools, universities, and educational organizations. From promotional content to course materials and event coverage.',
      useCases: [
        'Campus tours',
        'Event coverage',
        'Promotional content',
        'Alumni stories',
      ],
      icon: '🎓',
    },
  ];

  return (
    <div className="pt-20 bg-[#030303] text-white min-h-screen">
      {/* Hero */}
      <section className="py-24 sm:py-40 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 sm:mb-12 tracking-tight">
              Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">We Serve</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-neutral-400 font-light leading-relaxed px-2">
              We work with businesses across industries, creating video content 
              tailored to your unique needs and objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 sm:py-40 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-40">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 sm:gap-20 items-center`}
              >
                <div className="flex-1 w-full relative">
                  <div className="glass-panel relative rounded-[2.5rem] p-12 sm:p-20 w-full min-h-[350px] sm:min-h-[400px] flex flex-col items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.1)] border border-white/10 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="text-6xl sm:text-8xl mb-12 sm:mb-16 relative z-10 group-hover:scale-110 transition-transform duration-500">{industry.icon}</div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center leading-tight relative z-10">
                      {industry.title}
                    </h2>
                  </div>
                </div>
                <div className="flex-1 max-w-2xl text-center lg:text-left">
                  <p className="text-sm sm:text-lg md:text-xl text-neutral-400 font-light mb-12 sm:mb-16 leading-relaxed">
                    {industry.description}
                  </p>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-8 sm:mb-12 border-l-4 border-violet-500 pl-4 w-fit mx-auto lg:mx-0">
                    Common Use Cases:
                  </h3>
                  <ul className="space-y-4 text-left inline-block lg:block">
                    {industry.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400 mr-3 sm:mr-4 flex-shrink-0 mt-0.5 sm:mt-1"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-neutral-400 font-light text-sm sm:text-lg leading-relaxed">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Industries */}
      <section className="py-24 sm:py-40 relative bg-black/50 backdrop-blur-xl border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-24 px-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-10 tracking-tight">
              Not Listed? We Still Want to Help
            </h2>
            <p className="text-base sm:text-xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
              Our expertise extends beyond these industries. If you're a business looking 
              to leverage short-form video content, we'd love to discuss how we can help.
            </p>
          </motion.div>
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
              Ready to Create Impactful Content?
            </h2>
            <p className="text-base sm:text-xl text-neutral-400 font-light mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
              Let's discuss how RecapReels can serve your industry-specific needs.
            </p>
            <Button href="/contact" className="inline-block bg-white text-black px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

