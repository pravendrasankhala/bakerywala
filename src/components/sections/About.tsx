'use client';
// src/components/sections/About.tsx

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { value: '14+', label: 'Years of Artisan Craft' },
  { value: '50+', label: 'Fresh Products Daily' },
  { value: '10K+', label: 'Happy Customers' },
  { value: '100%', label: 'Natural Ingredients' },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="about" className="py-20 bg-[#FDFAF5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            ref={ref}
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=700&q=85"
                  alt="Our bakers at work in The Oven House kitchen"
                  className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[500px]"
                />
              </div>

              {/* Floating accent image */}
              <div className="absolute -bottom-4 right-2 h-28 w-28 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:-bottom-8 sm:-right-8 sm:h-40 sm:w-40 lg:h-44 lg:w-44">
                <img
                  src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=300&q=80"
                  alt="Artisan bread and pastries"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative element */}
              <div className="absolute -left-2 top-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#D4A853]/50 bg-[#FDFAF5]/90 sm:-left-6 sm:-top-6 sm:h-24 sm:w-24">
                <span className="font-serif text-xl text-[#7C4A2D] sm:text-3xl" aria-hidden="true">OH</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <p className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.3em] font-sans mb-4">Our Story</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3B1F0F] leading-tight mb-6">
              Where Every Recipe <br/>
              <span className="italic text-[#7C4A2D]">Tells a Story</span>
            </h2>

            <div className="space-y-4 text-[#6B4C3B] font-sans text-base leading-relaxed mb-8">
              <p>
                The Oven House was born from a simple belief: that good food, made with honest ingredients and genuine care, has the power to bring people together.
              </p>
              <p>
                Founded in 2010 by pastry chef Meera Sharma, our bakery started as a small family kitchen in New Delhi. Today, we craft over 50 unique products every morning — from our famous 24-hour sourdough loaves to intricate celebration cakes designed like works of art.
              </p>
              <p>
                Every recipe in our collection has been tested hundreds of times. We source the finest Belgian chocolate, French butter, and organic local flour to ensure that every bite you take is nothing short of exceptional.
              </p>
            </div>

            {/* Signature */}
            <div className="flex items-center gap-4 mb-10 pb-10 border-b border-[#F5E6D3]">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4A853]">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-[#3B1F0F] text-lg italic">Meera Sharma</p>
                <p className="text-[#C8B8A2] text-xs font-sans uppercase tracking-wide">Founder & Head Pastry Chef</p>
              </div>
              <div className="ml-auto">
                <span className="font-serif text-3xl italic text-[#D4A853] opacity-50">&quot;</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`bg-[#F5E6D3]/50 rounded-2xl p-4 border border-[#F5E6D3] transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${i * 100 + 400}ms` }}
                >
                  <div className="font-serif text-2xl sm:text-3xl text-[#7C4A2D] font-bold">{value}</div>
                  <div className="text-[#6B4C3B] text-xs font-sans mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
