'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BecomeACreator() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    iphoneModel: '',
    experience: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`https://recap-reels-backend-1.onrender.com/api/creator/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (err) {
      alert('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#030303] min-h-screen text-white pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
            <span className="text-sm font-medium text-neutral-300">Join Our Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Become a Creator
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Got an iPhone and a passion for content? Join the RecapReels creator network and start earning.
          </p>
        </motion.div>

        {/* Form / Success */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white/5 border border-white/10 rounded-3xl p-12"
          >
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-3">Application Received!</h2>
            <p className="text-neutral-400">We'll review your details and get back to you soon.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-violet-500 transition-colors text-sm"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Age</label>
              <input
                type="number"
                name="age"
                required
                min="16"
                max="60"
                value={formData.age}
                onChange={handleChange}
                placeholder="Your age"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-violet-500 transition-colors text-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-violet-500 transition-colors text-sm"
              />
            </div>

            {/* iPhone Model */}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">iPhone Model</label>
              <input
                type="text"
                name="iphoneModel"
                required
                value={formData.iphoneModel}
                onChange={handleChange}
                placeholder="e.g. iPhone 15 Pro Max"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-violet-500 transition-colors text-sm"
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Experience</label>
              <textarea
                name="experience"
                required
                value={formData.experience}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your content creation experience, any previous work, platforms you've posted on, etc."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-violet-500 transition-colors text-sm resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                loading
                  ? 'bg-violet-700 opacity-70 cursor-not-allowed'
                  : 'bg-violet-600 hover:bg-violet-500 shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)] hover:shadow-[0_0_50px_-5px_rgba(139,92,246,0.7)]'
              }`}
            >
              {loading ? 'Submitting...' : 'Apply Now'}
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
