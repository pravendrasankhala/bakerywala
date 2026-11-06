'use client';
// src/components/sections/Testimonials.tsx

import { useState, useEffect, useCallback } from 'react';
import { testimonials } from '@/data/testimonials';
import StarRating from '@/components/ui/StarRating';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((a) => (a + 1) % testimonials.length), []);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[active];

  return (
    <section className="py-20 bg-gradient-to-br from-[#FDFAF5] via-[#FDF5E6] to-[#FDFAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.3em] font-sans mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3B1F0F] mb-4">
            Customer <span className="italic text-[#7C4A2D]">Love</span>
          </h2>
          <p className="text-[#C8B8A2] text-xs font-sans italic mt-2">
            * All reviews are demo data for illustration purposes only
          </p>
        </div>

        {/* Main testimonial card */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#F5E6D3] relative text-center">
            {/* Quote mark */}
            <div className="text-[#F5E6D3] font-serif text-8xl leading-none absolute top-4 left-6">
              &ldquo;
            </div>

            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-[#D4A853]/30 shadow-md"
                />
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#D4A853] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">★</span>
                </div>
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-5">
              <StarRating rating={t.rating} showCount={false} size="lg" />
            </div>

            {/* Text */}
            <p className="text-[#3B1F0F] font-sans text-base sm:text-lg leading-relaxed italic mb-6 max-w-xl mx-auto">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author */}
            <div>
              <p className="font-serif text-[#3B1F0F] text-lg">{t.name}</p>
              <p className="text-[#C8B8A2] text-sm font-sans">{t.location} · {t.date}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              id="testimonial-prev"
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-[#F5E6D3] flex items-center justify-center hover:bg-[#F5E6D3] hover:border-[#D4A853] text-[#7C4A2D] transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active
                      ? 'w-6 h-2.5 bg-[#7C4A2D]'
                      : 'w-2.5 h-2.5 bg-[#E8D5B7] hover:bg-[#D4A853]'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              id="testimonial-next"
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-[#F5E6D3] flex items-center justify-center hover:bg-[#F5E6D3] hover:border-[#D4A853] text-[#7C4A2D] transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* Mini testimonial strip */}
        <div
          className={`mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.id}
              onClick={() => setActive(i)}
              className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all duration-200 ${
                i === active
                  ? 'border-[#D4A853] bg-[#FEF3C7]/50'
                  : 'border-[#F5E6D3] bg-white hover:border-[#D4A853]/50'
              }`}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="text-xs font-semibold text-[#3B1F0F] font-sans text-center leading-tight">
                {testimonial.name}
              </p>
              <div className="flex">
                {Array.from({ length: testimonial.rating }, (_, j) => (
                  <span key={j} className="text-[#D4A853] text-xs">★</span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
