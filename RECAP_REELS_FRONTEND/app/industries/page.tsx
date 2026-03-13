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
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed">
              We work with businesses across industries, creating video content 
              tailored to your unique needs and objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-56 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-40">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
              >
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-20 w-full min-h-[400px] flex flex-col items-center justify-center shadow-2xl">
                    <div className="text-8xl mb-16">{industry.icon}</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center leading-tight">
                      {industry.title}
                    </h2>
                  </div>
                </div>
                <div className="flex-1 max-w-2xl">
                  <p className="text-lg md:text-xl text-neutral-600 mb-16 leading-relaxed">
                    {industry.description}
                  </p>
                  <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-12">
                    Common Use Cases:
                  </h3>
                  <ul className="space-y-4">
                    {industry.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-indigo-600 mr-4 flex-shrink-0 mt-1"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-neutral-700 text-lg leading-relaxed">{useCase}</span>
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
      <section className="py-56 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-10">
              Not Listed? We Still Want to Help
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Our expertise extends beyond these industries. If you're a business looking 
              to leverage short-form video content, we'd love to discuss how we can help.
            </p>
          </motion.div>
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
              Ready to Create Impactful Content?
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Let's discuss how RecapReels can serve your industry-specific needs.
            </p>
            <Button href="/contact" variant="secondary" className="text-lg px-8 py-4 bg-white text-indigo-600 hover:bg-neutral-100">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

