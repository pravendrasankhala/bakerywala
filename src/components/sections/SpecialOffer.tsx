'use client';
// src/components/sections/SpecialOffer.tsx

import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function getTargetTime() {
  const t = new Date();
  t.setHours(t.getHours() + 6);
  return t;
}

export default function SpecialOffer() {
  const { ref, isVisible } = useScrollAnimation();
  const [timeLeft, setTimeLeft] = useState({ h: 6, m: 0, s: 0 });

  useEffect(() => {
    const target = getTargetTime().getTime();
    const id = setInterval(() => {
      const diff = Math.max(0, target - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ h, m, s });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="py-20 bg-gradient-to-br from-[#3B1F0F] via-[#5A3520] to-[#7C4A2D] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4A853]/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#D4A853]/5 blur-2xl translate-y-1/2 -translate-x-1/2" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #D4A853 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 relative z-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-shrink-0 relative">
            <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-[#D4A853]/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&q=80"
                alt="Special offer — Red Velvet Cake"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Offer badge */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#D4A853] rounded-full flex flex-col items-center justify-center shadow-xl animate-bounce-soft">
              <span className="text-[#3B1F0F] font-bold text-xl font-sans leading-none">25%</span>
              <span className="text-[#3B1F0F] text-[10px] font-semibold font-sans">OFF</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-[#D4A853]/20 border border-[#D4A853]/40 text-[#D4A853] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5 font-sans">
              🎉 Today&apos;s Special Offer
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
              Get 25% Off on <br/>
              <span className="text-[#D4A853] italic">All Celebration Cakes</span>
            </h2>
            <p className="text-white/60 font-sans text-base mb-8 max-w-lg">
              Order any celebration cake today and enjoy a special 25% discount. Perfect for birthdays, anniversaries, and every sweet milestone! Use code{' '}
              <span className="bg-[#D4A853]/20 border border-[#D4A853]/40 text-[#D4A853] font-mono font-bold px-2 py-0.5 rounded">
                CELEBRATE25
              </span>{' '}
              at checkout.
            </p>

            {/* Countdown */}
            <div className="mb-8">
              <p className="text-white/40 text-xs font-sans uppercase tracking-widest mb-3">Offer ends in:</p>
              <div className="flex gap-3 justify-center lg:justify-start">
                {[
                  { label: 'Hours', value: timeLeft.h },
                  { label: 'Minutes', value: timeLeft.m },
                  { label: 'Seconds', value: timeLeft.s },
                ].map(({ label, value }, i) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 min-w-[70px] text-center">
                      <div className="text-3xl font-bold text-white font-sans tabular-nums">{pad(value)}</div>
                      <div className="text-white/40 text-[10px] font-sans uppercase tracking-wide mt-1">{label}</div>
                    </div>
                    {i < 2 && <span className="text-[#D4A853] text-2xl font-bold animate-pulse">:</span>}
                  </div>
                ))}
              </div>
            </div>

            <button
              id="offer-shop-now"
              onClick={() => document.getElementById('bestsellers')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#D4A853] text-[#3B1F0F] px-8 py-4 rounded-full font-semibold font-sans text-base hover:bg-[#E8C97A] transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Shop Now & Save →
            </button>
            <p className="text-white/30 text-xs font-sans mt-3">* Demo promotion — no real discount applied</p>
          </div>
        </div>
      </div>
    </section>
  );
}
