'use client';
// src/components/ui/ProductCard.tsx

import Image from 'next/image';
import { useState } from 'react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddedToCart?: () => void;
}

export default function ProductCard({ product, onQuickView, onAddedToCart }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    onAddedToCart?.();
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <article className="product-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e9dfd3] bg-white shadow-[0_3px_14px_rgba(54,37,23,.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(54,37,23,.12)]">
      <div className="relative h-36 overflow-hidden bg-[#eee5d9] sm:h-52 lg:h-56">
        <Image
          src={imgError ? 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80' : product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          onError={() => setImgError(true)}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Badges */}
        <div className="absolute left-2 top-2 flex flex-col items-start gap-1 sm:left-3 sm:top-3 sm:gap-1.5">
          {product.badge && (
            <span className="rounded-full bg-[#fffaf2]/95 px-2 py-1 font-sans text-[8px] font-semibold uppercase tracking-wide text-[#69452f] shadow-sm sm:px-2.5 sm:text-[10px]">
              {product.badge}
            </span>
          )}
          {discount && (
            <span className="rounded-full bg-[#e6c77e] px-2 py-1 font-sans text-[8px] font-semibold text-[#3b2a1c] sm:px-2.5 sm:text-[10px]">
              {discount}% OFF
            </span>
          )}
        </div>

        <div className="absolute right-2 top-2 rounded-full bg-white/90 p-1.5 sm:right-3 sm:top-3">
          <div
            className={`flex h-3 w-3 items-center justify-center rounded-full border ${
              product.isVeg ? 'border-emerald-700' : 'border-rose-700'
            }`}
            aria-label={product.isVeg ? 'Vegetarian' : 'Non-vegetarian'}
          >
            <div className={`h-1.5 w-1.5 rounded-full ${product.isVeg ? 'bg-emerald-700' : 'bg-rose-700'}`} />
          </div>
        </div>

        <div className="product-actions absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/50 to-transparent p-2 opacity-100 transition-opacity sm:inset-0 sm:items-center sm:bg-black/25 sm:opacity-0 sm:group-hover:opacity-100">
          <button
            id={`quick-view-${product.id}`}
            type="button"
            onClick={() => onQuickView(product)}
            className="rounded-full border border-white/80 bg-white/95 px-3 py-1.5 font-sans text-[10px] font-semibold text-[#68432d] shadow-sm transition hover:bg-[#754a30] hover:text-white sm:px-4 sm:py-2 sm:text-sm"
          >
            Quick look
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="mb-1 font-sans text-[8px] font-semibold uppercase tracking-[0.12em] text-[#9a744e] sm:text-[10px] sm:tracking-wide">
          {product.category.replace('-', ' ')}
        </p>
        <h3 className="mb-2 line-clamp-2 min-h-9 font-serif text-[13px] font-semibold leading-snug text-[#34251a] transition-colors group-hover:text-[#754a30] sm:min-h-12 sm:text-base">
          {product.name}
        </h3>

        <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" />

        <div className="mt-auto flex flex-wrap items-baseline gap-x-1.5 pt-3 sm:gap-x-2">
            <span className="font-sans text-base font-bold text-[#34251a] sm:text-lg">₹{product.price}</span>
            {product.originalPrice && (
              <span className="font-sans text-[10px] text-[#a59788] line-through sm:text-sm">₹{product.originalPrice}</span>
            )}
        </div>

        <button
          id={`add-to-cart-${product.id}`}
          type="button"
          onClick={handleAddToCart}
          className={`mt-2.5 min-h-10 w-full rounded-xl px-2 font-sans text-[10px] font-semibold transition-all duration-300 sm:mt-3 sm:min-h-11 sm:text-sm ${
            added
              ? 'scale-[.98] bg-emerald-700 text-white'
              : 'bg-[#754a30] text-white hover:bg-[#513320] hover:shadow-md active:scale-[.98]'
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          {added ? '✓ Added' : 'Add to bag'}
        </button>
      </div>
    </article>
  );
}
