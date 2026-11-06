'use client';
// src/components/sections/Gallery.tsx

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const galleryImages = [
  { id: 'g1', src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80', alt: 'Chocolate Layer Cake', category: 'Cakes' },
  { id: 'g2', src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80', alt: 'Fresh Croissants', category: 'Pastries' },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80', alt: 'Fudgy Brownies', category: 'Brownies' },
  { id: 'g4', src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80', alt: 'Strawberry Cake', category: 'Cakes' },
  { id: 'g5', src: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&q=80', alt: 'French Macarons', category: 'Pastries' },
  { id: 'g6', src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80', alt: 'Artisan Sourdough', category: 'Breads' },
  { id: 'g7', src: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80', alt: 'Mango Entremet', category: 'Desserts' },
  { id: 'g8', src: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80', alt: 'Chocolate Chip Cookies', category: 'Cookies' },
  { id: 'g9', src: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&q=80', alt: 'Red Velvet Cake', category: 'Cakes' },
];

export default function Gallery() {
  const { ref, isVisible } = useScrollAnimation();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#FDFAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.3em] font-sans mb-3">
            📸 From Our Kitchen
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3B1F0F] mb-4">
            Our <span className="italic text-[#7C4A2D]">Gallery</span>
          </h2>
          <p className="text-[#6B4C3B] font-sans">
            A peek inside The Oven House — click any image to expand
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ aspectRatio: i % 3 === 1 ? '3/4' : '4/3' }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-white font-serif text-sm">{img.alt}</span>
                <span className="text-[#D4A853] text-xs font-sans">{img.category}</span>
              </div>
              {/* Expand icon */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm">⤢</span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#6B4C3B] font-sans text-sm mb-4">
            Follow us on Instagram for daily fresh bakes ·{' '}
            <span className="text-[#7C4A2D] font-semibold">@theovenhouse (Demo)</span>
          </p>
          <button
            id="instagram-cta"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F77737] via-[#E1306C] to-[#833AB4] text-white px-6 py-3 rounded-full font-semibold font-sans text-sm hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            📸 Follow on Instagram (Demo)
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[1100] bg-black/90 flex items-center justify-center p-4 cursor-pointer animate-fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt="Expanded gallery image"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
