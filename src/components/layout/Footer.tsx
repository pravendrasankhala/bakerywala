'use client';
// src/components/layout/Footer.tsx

import { useState } from 'react';

const quickLinks = ['Home', 'Categories', 'Bestsellers', 'About Us', 'Contact'];
const categories = [
  { name: 'Cakes', id: 'cakes' },
  { name: 'Pastries', id: 'pastries' },
  { name: 'Breads', id: 'breads' },
  { name: 'Cookies', id: 'cookies' },
  { name: 'Brownies', id: 'brownies' },
  { name: 'Desserts', id: 'desserts' },
  { name: 'Gift Hampers', id: 'gift-hampers' },
];
const socialLinks = [
  { label: 'Facebook', icon: 'f' },
  { label: 'Instagram', icon: '◎' },
  { label: 'Twitter', icon: '𝕏' },
  { label: 'Pinterest', icon: 'p' },
];

interface FooterProps {
  onSelectCategory: (categoryId: string) => void;
}

export default function Footer({ onSelectCategory }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollTo = (section: string) => {
    const id = section.toLowerCase().replace(/\s+/g, '').replace('aboutus', 'about');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3B1F0F] text-white/80 font-sans">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-5 flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4A853]/70 bg-[#513320]">
              <span className="font-serif text-sm font-semibold tracking-wide text-[#f1d58f]">OH</span>
            </div>
            <div>
              <span className="block font-serif text-lg font-semibold leading-none text-white">The Oven House</span>
              <span className="mt-1 block font-sans text-[9px] uppercase tracking-[0.2em] text-[#D4A853]">Artisan Bakery</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/60 mb-6">
            Crafting moments of joy, one bite at a time. Premium handcrafted baked goods made with the finest ingredients.
          </p>
          {/* Social icons */}
          <div className="flex gap-3">
            {socialLinks.map(({ label, icon }) => (
              <button
                key={label}
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 font-sans text-sm font-semibold text-white/80 transition-all duration-200 hover:bg-[#D4A853] hover:text-[#3B1F0F]"
                aria-label={`${label} (demo link)`}
              >
                <span aria-hidden="true">{icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-white text-lg mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="text-sm text-white/60 hover:text-[#D4A853] transition-colors hover:translate-x-1 inline-block transition-transform"
                >
                  → {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-serif text-white text-lg mb-5">Categories</h4>
          <ul className="space-y-2.5">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory(category.id);
                    document.getElementById('bestsellers')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-white/60 transition-colors hover:text-[#D4A853]"
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h4 className="font-serif text-white text-lg mb-5">Get In Touch</h4>
          <ul className="space-y-3 text-sm text-white/60 mb-6">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">📍</span>
              <span>42, Bakery Lane, Connaught Place, New Delhi — 110001 (Demo)</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <span>+91 98765 43210 (Demo)</span>
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <span>hello@theovenhouse.demo</span>
            </li>
            <li className="flex items-start gap-2">
              <span>🕐</span>
              <span>Mon–Sat: 7am – 9pm<br />Sun: 8am – 7pm</span>
            </li>
          </ul>

          {/* Newsletter */}
          <h5 className="font-serif text-white mb-3">Newsletter</h5>
          {subscribed ? (
            <p className="text-[#D4A853] text-sm font-medium">✓ Thank you for subscribing! (Demo)</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition-colors placeholder:text-white/40 focus:border-[#D4A853] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[#D4A853] px-4 py-2 text-sm font-semibold text-[#3B1F0F] transition-colors hover:bg-[#E8C97A]"
              >
                →
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
        <p>© 2026 The Oven House. All rights reserved. | Demo website — not a real business.</p>
        <div className="flex gap-4">
          <span className="hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white/60 cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-white/60 cursor-pointer transition-colors">Sitemap</span>
        </div>
      </div>
    </footer>
  );
}
