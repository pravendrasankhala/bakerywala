'use client';
// src/components/sections/WhyChooseUs.tsx

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: '🌾',
    title: 'Finest Ingredients',
    description: 'We source premium Belgian chocolate, French AOP butter, organic flour, and farm-fresh eggs. Zero compromises on quality.',
    color: '#FEF3C7',
    accent: '#D4A853',
  },
  {
    icon: '👐',
    title: 'Handcrafted Daily',
    description: 'Every loaf, cake, and pastry is made by hand in our kitchen every single morning. No mass production, no shortcuts.',
    color: '#FDE8D0',
    accent: '#7C4A2D',
  },
  {
    icon: '✅',
    title: 'Quality Assured',
    description: 'Our bakery follows strict hygiene standards and each product is inspected before it leaves the kitchen. Freshness guaranteed.',
    color: '#DCFCE7',
    accent: '#16A34A',
  },
  {
    icon: '❤️',
    title: 'Customer First',
    description: 'Your satisfaction is our greatest reward. From custom orders to dietary requirements — we go the extra mile for every customer.',
    color: '#FDE8D0',
    accent: '#E84A5F',
  },
  {
    icon: '🌿',
    title: 'No Preservatives',
    description: 'All our products are made without artificial preservatives or flavourings. Pure, honest, clean-label baking.',
    color: '#F0FDF4',
    accent: '#22C55E',
  },
  {
    icon: '🎁',
    title: 'Beautiful Packaging',
    description: 'Every order is packed in premium, eco-conscious packaging — perfect for gifting or treating yourself in style.',
    color: '#F3E8FF',
    accent: '#9333EA',
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-[#F5EDD8]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.3em] font-sans mb-3">
            The Oven House Difference
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3B1F0F] mb-4">
            Why Choose <span className="italic text-[#7C4A2D]">Us</span>
          </h2>
          <p className="text-[#6B4C3B] font-sans max-w-xl mx-auto text-base">
            We aren&apos;t just a bakery — we are craftspeople who happen to bake. Here&apos;s what sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group bg-white rounded-2xl p-6 border border-[#F5E6D3] hover:shadow-xl hover:-translate-y-1 transition-all duration-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100 + 100}ms` }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              <h3
                className="font-serif text-lg text-[#3B1F0F] mb-2 group-hover:text-[#7C4A2D] transition-colors"
              >
                {feature.title}
              </h3>
              <p className="text-[#6B4C3B] text-sm font-sans leading-relaxed">{feature.description}</p>

              {/* Accent line */}
              <div
                className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ backgroundColor: feature.accent }}
              />
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <blockquote className="font-serif text-2xl sm:text-3xl text-[#7C4A2D] italic max-w-2xl mx-auto">
            &ldquo;The secret ingredient in everything we bake is the love we put into it.&rdquo;
          </blockquote>
          <cite className="text-[#C8B8A2] text-sm font-sans not-italic mt-3 block">— Meera Sharma, Founder</cite>
        </div>
      </div>
    </section>
  );
}
