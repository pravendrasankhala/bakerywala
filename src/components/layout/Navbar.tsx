'use client';
// src/components/layout/Navbar.tsx

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Categories', href: '#categories' },
  { label: 'Bestsellers', href: '#bestsellers' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { totalItems, toggleCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[700] transition-all duration-300 ${
          isScrolled ? 'nav-scrolled py-2.5' : 'bg-gradient-to-b from-black/25 to-transparent py-3 sm:py-4'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-10">
          <button
            type="button"
            onClick={() => scrollTo('#home')}
            className="group flex items-center gap-2.5"
            aria-label="The Oven House - Home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5bd68]/70 bg-[#3b2418] shadow-md transition group-hover:bg-[#563722]">
              <span className="font-serif text-sm font-semibold tracking-wide text-[#f1d58f]">OH</span>
            </div>
            <div className="text-left">
              <span className={`block font-serif text-base font-semibold leading-none transition-colors sm:text-lg ${isScrolled ? 'text-[#3B1F0F]' : 'text-white drop-shadow-md'}`}>
                The Oven House
              </span>
              <span className={`mt-1 block font-sans text-[8px] uppercase tracking-[0.2em] transition-colors sm:text-[9px] ${isScrolled ? 'text-[#7C4A2D]' : 'text-white/80'}`}>
                Artisan Bakery
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollTo(link.href)}
                className={`group relative font-sans text-sm font-medium transition-colors duration-200 hover:text-[#D4A853] ${
                  isScrolled ? 'text-[#2C1810]' : 'text-white drop-shadow'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#D4A853] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              id="cart-toggle"
              type="button"
              onClick={toggleCart}
              className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:scale-105 ${
                isScrolled
                  ? 'bg-[#F5E6D3] hover:bg-[#E8D5B7] text-[#7C4A2D]'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
              aria-label={`Cart with ${totalItems} items`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D4A853] text-[#3B1F0F] text-[10px] font-bold rounded-full flex items-center justify-center font-sans animate-pulse-gold">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              type="button"
              className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full transition-all md:hidden ${
                isScrolled ? 'bg-[#F5E6D3]' : 'bg-white/20'
              }`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-navigation"
            >
              <span className={`block w-5 h-0.5 transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''} ${isScrolled ? 'bg-[#7C4A2D]' : 'bg-white'}`} />
              <span className={`block w-5 h-0.5 transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''} ${isScrolled ? 'bg-[#7C4A2D]' : 'bg-white'}`} />
              <span className={`block w-5 h-0.5 transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''} ${isScrolled ? 'bg-[#7C4A2D]' : 'bg-white'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-[#FDFAF5]/95 backdrop-blur-md mt-2 mx-4 rounded-2xl shadow-xl border border-[#F5E6D3] py-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollTo(link.href)}
                className="w-full px-6 py-3 text-left font-sans text-sm text-[#2C1810] transition-colors hover:bg-[#F5E6D3] hover:text-[#7C4A2D]"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
