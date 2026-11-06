'use client';
// src/components/sections/Newsletter.tsx

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Newsletter() {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 bg-[#F5EDD8]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`bg-gradient-to-br from-[#7C4A2D] to-[#3B1F0F] rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#D4A853]/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#D4A853]/5 blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="text-4xl mb-5">📬</div>
            <p className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.3em] font-sans mb-3">
              Stay in the Loop
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
              Fresh Recipes & <span className="italic text-[#D4A853]">Exclusive Offers</span>
            </h2>
            <p className="text-white/60 font-sans text-base mb-8 max-w-lg mx-auto">
              Subscribe to our newsletter and be the first to know about new products, seasonal specials, and baking tips from our head pastry chef.
            </p>

            {submitted ? (
              <div className="bg-white/10 border border-[#D4A853]/30 rounded-2xl px-8 py-6 inline-block">
                <div className="text-3xl mb-2">🎉</div>
                <p className="text-[#D4A853] font-serif text-xl mb-1">You&apos;re on the list!</p>
                <p className="text-white/60 text-sm font-sans">
                  Thank you for subscribing. (This is a demo — no emails will be sent.)
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-[#D4A853] transition-colors font-sans text-sm"
                />
                <button
                  id="newsletter-subscribe-btn"
                  type="submit"
                  disabled={loading}
                  className="bg-[#D4A853] text-[#3B1F0F] px-7 py-3.5 rounded-full font-semibold font-sans text-sm hover:bg-[#E8C97A] transition-all duration-200 disabled:opacity-70 hover:shadow-lg flex items-center gap-2 justify-center"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#3B1F0F]/30 border-t-[#3B1F0F] rounded-full inline-block" style={{ animation: 'spin 0.6s linear infinite' }} />
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe →'
                  )}
                </button>
              </form>
            )}

            <p className="text-white/30 text-xs font-sans mt-4">
              No spam, ever. Unsubscribe anytime. * Demo only
            </p>

            {/* Benefit pills */}
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              {['🎁 Exclusive deals', '🍰 New product alerts', '👩‍🍳 Baking tips', '🌟 Member perks'].map((item) => (
                <span key={item} className="bg-white/10 border border-white/15 text-white/60 text-xs font-sans px-3 py-1.5 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
