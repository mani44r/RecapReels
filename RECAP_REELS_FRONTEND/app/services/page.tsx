'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useRef, useState, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

const PricingCard = memo(({ planKey, config }: { planKey: string, config: any }) => {
  const [selectedDuration, setSelectedDuration] = useState(
    planKey === 'premium' ? '1week' : '2weeks'
  );

  const handleDurationChange = useCallback((duration: string) => {
    setSelectedDuration(duration);
  }, []);

  const currentContent = config.content[selectedDuration];
  const hasBadge = Boolean(config.badge);
  const hasTopLabel = Boolean(config.topLabel);
  const hasIcon = Boolean(config.icon);
  const hasCommon = Boolean(config.common);
  const hasComplimentary = Boolean(config.complimentary?.length);

  return (
    <div
      className="pricing-card relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 flex flex-col h-full group"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-violet-600/5 rounded-3xl pointer-events-none group-hover:from-purple-600/10 group-hover:to-violet-600/10 transition-colors duration-500"></div>

      {/* Plan Header */}
      <div className="text-center mb-8 relative z-10">
        {/* Top Label */}
        <div className="mb-4 min-h-[20px] flex items-center justify-center">
          {hasTopLabel ? (
            <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-purple-400 animate-pulse"></span>
              {config.topLabel}
            </span>
          ) : (
            <span className="invisible text-xs uppercase tracking-widest">.</span>
          )}
        </div>
        
        {/* Icon */}
        <div className="text-4xl mb-4 min-h-[48px] flex items-center justify-center text-violet-400">
          {hasIcon ? (
            <span>{config.icon}</span>
          ) : (
            <span className="invisible">★</span>
          )}
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-tight px-2">
          {config.title}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 mb-4 font-light px-2">
          {config.subtitle}
        </p>
        
        {/* Trust Badge */}
        <div className="mb-8 min-h-[44px] flex items-center justify-center">
          {hasBadge ? (
            <div className="inline-flex items-center border border-violet-500/30 bg-violet-500/10 rounded-full px-4 py-2 backdrop-blur-md">
              <span className="text-violet-400 text-sm mr-2">🔥</span>
              <span className="text-violet-200 font-medium text-xs tracking-wide">
                {config.badge}
              </span>
            </div>
          ) : (
            <span className="invisible text-sm">.</span>
          )}
        </div>
      </div>

      {/* Duration Tabs */}
      <div className="mb-10 relative z-10">
        <div className="flex bg-white/5 backdrop-blur-md rounded-2xl p-1.5 border border-white/5">
          {config.tabs.map((tab: string) => (
            <button
              key={tab}
              onClick={() => handleDurationChange(tab)}
              className={`flex-1 py-2.5 px-3 rounded-xl font-semibold text-xs tracking-wide transition-all duration-300 ${
                selectedDuration === tab
                  ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg'
                  : 'text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {config.tabLabels[tab]}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Price */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedDuration}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-10 relative z-10"
        >
          <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-2 tracking-tighter">
            {currentContent.price}
          </div>
          <div className="text-neutral-500 text-xs font-medium uppercase tracking-widest">
            + GST Applicable
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dynamic Features */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedDuration}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-8 relative z-10 flex-grow"
        >
          <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-300 mb-6 border-b border-white/10 pb-2">
            What's Included
          </h4>
          <ul className="space-y-4 mb-8">
            {currentContent.features.map((feature: string, idx: number) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start"
              >
                <svg
                  className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-neutral-200 text-sm font-light leading-relaxed">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>

      {/* Common Section */}
      {hasCommon && (
        <div className="mb-6 relative z-10">
          <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
            <p className="text-purple-300 text-xs font-semibold text-center tracking-wide">
              {config.common}
            </p>
          </div>
        </div>
      )}

      {/* Complimentary Section */}
      {hasComplimentary && (
        <div className="border-t border-white/10 pt-6 mb-10 relative z-10">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
            Complimentary Bonus
          </h4>
          <ul className="space-y-3">
            {config.complimentary.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start">
                <svg
                  className="w-4 h-4 text-violet-400 mr-3 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-400 text-xs font-light leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Button */}
      <div className="text-center mt-auto relative z-10 pt-6 border-t border-white/5">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 px-8 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:bg-neutral-200 transition-all duration-300"
        >
          {config.cta}
        </motion.button>
      </div>
    </div>
  );
});

PricingCard.displayName = 'PricingCard';

export default function Services() {
  const bookReelRef = useRef<HTMLDivElement>(null);
  const oneDayPlanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const targets = [bookReelRef.current, oneDayPlanRef.current];

      targets.forEach((target) => {
        if (!target) return;

        gsap.fromTo(
          target,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: target,
              start: 'top 85%',
              end: 'bottom 60%',
              scrub: false,
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.pricing-card').forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 60%',
              scrub: false,
              once: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const planConfigs = {
    gold: {
      title: 'GOLD PLAN',
      subtitle: 'Best for consistent social media growth',
      badge: 'Most Chosen',
      tabs: ['1week', '2weeks', '4weeks'],
      tabLabels: { '1week': '1 Week', '2weeks': '2 Weeks', '4weeks': '4 Weeks' },
      content: {
        '1week': { price: '₹7,999', features: ['4 Reels', '1 Poster + 1 Story Poster', 'Full Page Handling', 'Content Support'] },
        '2weeks': { price: '₹15,999', features: ['8 Reels', '3 Posters + 2 Story Posters', 'Full Page Handling', 'Content Support'] },
        '4weeks': { price: '₹29,999', features: ['15 Reels', '6 Posters + 4 Story Posters', 'Full Page Handling', 'Content Support', 'Posting Assistance'] }
      },
      common: 'Drone, Insta360 & AI Editing Included',
      complimentary: ['Complete Page Handling', '25 Edited Pictures', 'No Extra Charges', '24/7 Service Support'],
      cta: 'Book Gold Plan',
      icon: null,
      topLabel: 'Popular Choice'
    },
    elite: {
      title: 'ELITE PLAN',
      subtitle: 'Premium growth & speed for brands',
      badge: null,
      tabs: ['1week', '2weeks', '4weeks'],
      tabLabels: { '1week': '1 Week', '2weeks': '2 Weeks', '4weeks': '4 Weeks' },
      content: {
        '1week': { price: '₹17,999', features: ['5 Premium Reels', 'Creative Posters & Story Designs', 'Priority Editing & Fast Delivery'] },
        '2weeks': { price: '₹34,999', features: ['12 Premium Reels', 'Advanced Poster Designs', 'Enhanced Editing', 'Content Planning Support'] },
        '4weeks': { price: '₹49,999', features: ['18 Premium Reels', 'High-End Creatives', 'Complete Page Handling', 'Posting Strategy Support'] }
      },
      common: 'Drone, Insta360 & AI Included',
      complimentary: ['Complete Page Handling', '50 Edited Pictures', 'No Extra Charges', 'Priority Delivery', '24/7 Support'],
      cta: 'Book Elite Plan',
      icon: '⚡'
    },
    premium: {
      title: 'PREMIUM PLAN',
      subtitle: 'High-end scale & event dominance',
      badge: null,
      tabs: ['1week', '2weeks'],
      tabLabels: { '1week': '1 Week', '2weeks': '2 Weeks' },
      content: {
        '1week': { price: '₹29,000', features: ['15 Reels', 'Complete Handling', '5 Drone Videos', '4 Live Streams', '6 Edited Pro Videos', '4 Story Posters'] },
        '2weeks': { price: '₹59,000', features: ['30 Reels', 'Complete Handling', '10 Drone Videos', '8 Live Streams', '12 Edited Pro Videos', '8 Story Posters'] }
      },
      common: null,
      complimentary: [],
      cta: 'Book Premium Plan',
      icon: '💎'
    }
  };

  return (
    <div className="bg-[#030303] min-h-screen text-white pt-20">
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
             <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 sm:mb-8">
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-neutral-300 uppercase">Pricing & Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              Invest in your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">Visual Identity</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto px-2">
              Transparent, premium plans designed for modern startups, agencies, and elite brands. No hidden fees. Just results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Menu + One Day Plan */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4">
              Service À La Carte
            </h2>
            <p className="text-sm sm:text-lg text-neutral-500 font-light px-2">
              Don't need a full package? Choose precisely what you require.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Book a Reel + Add-ons */}
            <div
              ref={bookReelRef}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl overflow-hidden group hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none"></div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white tracking-tight">Single Deliverables</h3>

              <ul className="space-y-4 mb-10 border-b border-white/10 pb-10">
                {[
                  { label: '1 Reel Shot on iPhone', price: '₹1,899' },
                  { label: 'iPhone + Insta360 X5 Reel', price: '₹2,099' },
                  { label: 'Drone + Insta360 X5 + iPhone Reel', price: '₹2,999' },
                  { label: 'Live Streaming – Per Event', price: '₹1,999' },
                ].map((item) => (
                  <li key={item.label} className="flex items-center justify-between gap-4">
                    <span className="text-neutral-300 font-light text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm bg-white/10 px-3 py-1 rounded border border-white/10">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>

              <div>
                <h4 className="text-sm font-semibold mb-6 uppercase tracking-widest text-neutral-400">Add-ons</h4>
                <ul className="space-y-4">
                  {[
                    { label: 'Customize Edit Changes', price: '₹299' },
                    { label: 'Creative Hand Light', price: '₹399' },
                    { label: 'Pro Collar Microphone', price: '₹399' },
                    { label: 'Photo Session Package', price: '₹499' },
                    { label: 'Extra Coverage Hour', price: '₹799' },
                    { label: 'Extra Edited Reel', price: '₹1,499' },
                    { label: 'Extra Content Creator', price: '₹1,699' },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center justify-between gap-4">
                      <span className="text-neutral-400 font-light text-sm">{item.label}</span>
                      <span className="text-neutral-300 font-medium text-xs">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* One Day Plan */}
            <div
              ref={oneDayPlanRef}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl overflow-hidden group hover:border-white/20 transition-all duration-500 flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 to-transparent pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Event Coverage</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-purple-400 font-semibold bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">Specialized</span>
              </div>

              <div className="space-y-10 flex-grow">
                {[
                  {
                    title: 'Basic Package',
                    price: '₹5,500',
                    bullets: ['1 AI Highlight Video', '2 Pro Edited Reels (3 Total)', 'Up to 3 hours coverage'],
                  },
                  {
                    title: 'Half-Day Production',
                    price: '₹9,500',
                    bullets: ['1 Drone Reel', '2 AI or Pro Reels', 'Up to 5 hours coverage', '2 Custom Edits (5 Reels Total)'],
                  },
                  {
                    title: 'Full-Day Epic',
                    price: '₹13,999',
                    bullets: ['2 AI Videos & 1 Bonus Reel', '3 Insta360/Drone Videos', '3 Pro Edited Videos', 'Up to 9 hours coverage (9 Reels Total)'],
                  },
                ].map((plan) => (
                  <div key={plan.title} className="bg-black/30 p-6 rounded-2xl border border-white/5">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h4 className="text-lg font-bold text-white">{plan.title}</h4>
                      <span className="text-fuchsia-300 font-bold bg-fuchsia-500/10 border border-fuchsia-500/20 px-3 py-1 rounded text-sm">
                        {plan.price}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {plan.bullets.map((bullet) => (
                        <li key={bullet} className="text-neutral-400 text-sm font-light flex items-start">
                          <span className="text-purple-400 mr-2 mt-0.5">•</span> {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Subscription Plans */}
      <section className="py-16 sm:py-24 relative border-t border-white/5">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4">
              Subscription Packages
            </h2>
            <p className="text-sm sm:text-lg text-neutral-500 font-light max-w-2xl mx-auto px-2">
              Save by securing a long-term content partnership with RecapReels.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <PricingCard planKey="gold" config={planConfigs.gold} />
            <PricingCard planKey="elite" config={planConfigs.elite} />
            <PricingCard planKey="premium" config={planConfigs.premium} />
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] to-[#0a0212]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-2">
              A bespoke package in mind?
            </h2>
            <p className="text-base sm:text-xl text-neutral-400 font-light mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-2">
              We understand every business is unique. We can tailor a package strictly aligned with your specific KPIs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block bg-white text-black px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                Consult With Us
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
