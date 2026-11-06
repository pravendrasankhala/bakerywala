'use client';
// src/components/ui/ProductModal.tsx

import Image from 'next/image';
import { useState } from 'react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
      openCart();
    }, 1200);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-[#FDFAF5] rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-fade-up">
        {/* Close */}
        <button
          id="close-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#F5E6D3] flex items-center justify-center hover:bg-[#E8D5B7] text-[#7C4A2D] font-bold transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-72 md:h-auto rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden bg-[#FDF8F3]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#7C4A2D] text-white text-xs font-semibold px-3 py-1 rounded-full font-sans">
                {product.badge}
              </span>
            )}
            {discount && (
              <span className="absolute top-4 right-10 bg-[#D4A853] text-[#3B1F0F] text-xs font-semibold px-3 py-1 rounded-full font-sans">
                {discount}% OFF
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs text-[#7C4A2D] font-semibold uppercase tracking-widest font-sans mb-1 capitalize">
                {product.category.replace('-', ' ')}
              </p>
              <h2 className="font-serif text-2xl text-[#3B1F0F] leading-snug mb-3">{product.name}</h2>

              <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />

              <p className="text-[#6B4C3B] text-sm font-sans leading-relaxed mt-4">{product.description}</p>

              {/* Meta info */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                {product.weight && (
                  <div className="bg-[#F5E6D3] rounded-xl p-2.5">
                    <p className="text-[10px] text-[#C8B8A2] font-sans uppercase tracking-wide">Weight</p>
                    <p className="text-sm text-[#3B1F0F] font-semibold font-sans">{product.weight}</p>
                  </div>
                )}
                {product.servings && (
                  <div className="bg-[#F5E6D3] rounded-xl p-2.5">
                    <p className="text-[10px] text-[#C8B8A2] font-sans uppercase tracking-wide">Serves</p>
                    <p className="text-sm text-[#3B1F0F] font-semibold font-sans">{product.servings}</p>
                  </div>
                )}
              </div>

              {product.ingredients && (
                <p className="text-xs text-[#C8B8A2] font-sans mt-3">
                  <span className="font-semibold text-[#6B4C3B]">Ingredients: </span>
                  {product.ingredients}
                </p>
              )}
            </div>

            {/* Pricing + Add */}
            <div className="mt-6">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-[#3B1F0F] font-sans">₹{product.price * quantity}</span>
                {product.originalPrice && (
                  <span className="text-[#C8B8A2] text-lg line-through font-sans">₹{product.originalPrice * quantity}</span>
                )}
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-[#6B4C3B] font-sans">Quantity:</span>
                <div className="flex items-center gap-2 bg-[#F5E6D3] rounded-full px-2 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#E8D5B7] text-[#7C4A2D] font-bold transition-colors"
                  >
                    −
                  </button>
                  <span className="w-6 text-center font-semibold text-[#3B1F0F] font-sans">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#E8D5B7] text-[#7C4A2D] font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                id={`modal-add-cart-${product.id}`}
                onClick={handleAdd}
                className={`w-full py-3.5 rounded-xl font-semibold font-sans transition-all duration-300 ${
                  added
                    ? 'bg-green-500 text-white'
                    : 'bg-[#7C4A2D] text-white hover:bg-[#5A3520] hover:shadow-lg active:scale-95'
                }`}
              >
                {added ? '✓ Added! Opening Cart...' : `Add ${quantity > 1 ? `(${quantity}x)` : ''} to Cart`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
