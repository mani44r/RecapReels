'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const apiBase = process.env.NEXT_PUBLIC_API_URL || '';
    const payload = {
      fullName: formData.name,
      businessEmail: formData.email,
      companyName: formData.company,
      phoneNumber: formData.phone,
      projectDetails: formData.message,
    };

    try {
      const res = await fetch(`${apiBase}/api/lead/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitStatus('success');
        setErrorMessage('');
        setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
      } else {
        // Parse backend error response
        try {
          const errorData = await res.json();
          setErrorMessage(errorData.message || 'Submission failed. Please try again.');
        } catch {
          setErrorMessage(`Submission failed with status ${res.status}. Please try again.`);
        }
        setSubmitStatus('error');
      }
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Network error. Please check your connection and try again.'
      );
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 bg-[#030303] min-h-screen text-white">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-10 tracking-tight">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">Touch</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto px-2 border-transparent">
              Ready to elevate your brand with professional short-form video content? 
              Let's discuss your project and how we can help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 sm:py-40 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 border-l-4 border-violet-500 pl-4">
                Book a Demo or Get a Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6 glass-panel p-6 sm:p-10 rounded-3xl border border-white/10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all text-white placeholder-neutral-600"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all text-white placeholder-neutral-600"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-400 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all text-white placeholder-neutral-600"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all text-white placeholder-neutral-600"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-400 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all text-white appearance-none"
                  >
                    <option value="" className="bg-[#0a0a0a]">Select a service</option>
                    <option value="short-form-videos" className="bg-[#0a0a0a]">Short-Form Video Creation</option>
                    <option value="event-recap" className="bg-[#0a0a0a]">Event Recap Videos</option>
                    <option value="social-media" className="bg-[#0a0a0a]">Social Media Reels & Ads</option>
                    <option value="content-strategy" className="bg-[#0a0a0a]">Content Strategy</option>
                    <option value="editing" className="bg-[#0a0a0a]">Editing & Post-Production</option>
                    <option value="other" className="bg-[#0a0a0a]">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all resize-none text-white placeholder-neutral-600"
                    placeholder="Tell us about your project, timeline, and goals..."
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-950/50 border border-red-500/50 rounded-lg text-red-300 flex items-start gap-3">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div className="flex-1">
                      <p className="font-semibold">Submission failed</p>
                      <p className="text-sm mt-1">{errorMessage}</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-950/50 border border-green-500/50 rounded-lg text-green-300">
                    Thank you! We've received your message and will get back to you within 24 hours.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-violet-600 text-white rounded-lg font-bold hover:bg-violet-500 transition-colors text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 lg:mt-6"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 border-l-4 border-violet-500 pl-4">
                  Contact Information
                </h2>
                <p className="text-sm sm:text-lg text-neutral-400 mb-8 sm:mb-12 font-light leading-relaxed">
                  Prefer to reach out directly? Use the contact information below, 
                  or fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Email</h3>
                    <a
                      href="mailto:recapreelsbusiness@gmail.com"
                      className="text-neutral-400 font-light text-sm sm:text-base hover:text-violet-400 transition-colors break-all"
                    >
                      recapreelsbusiness@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Phone</h3>
                    <a
                      href="tel:+916304583037"
                      className="text-neutral-400 font-light text-sm sm:text-base hover:text-violet-400 transition-colors break-all"
                    >
                      +91 630-458-3037
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Location</h3>
                    <a
                      href="https://maps.app.goo.gl/dovKBQok45w6mrJu9"
                      className="text-neutral-400 font-light text-sm sm:text-base hover:text-violet-400 transition-colors block"
                    >
                      Sri Sri Gurudatta Apartments, Plot Nos. 679 & 682,
                      Gokul Plots, KPHB, Hyderabad, Telangana, India - 500072
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 mt-8">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  Business Hours
                </h3>
                <p className="text-neutral-400 font-light text-sm sm:text-base mb-1">
                  Monday - Friday: 9:00 AM - 6:00 PM EST
                </p>
                <p className="text-neutral-400 font-light text-sm sm:text-base">
                  We respond to all inquiries within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

