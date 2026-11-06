'use client';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { Product } from '@/types';
import ProductCard from '@/components/ui/ProductCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface BestsellersProps {
  activeFilter: string;
  onFilterChange: (categoryId: string) => void;
  onQuickView: (product: Product) => void;
  onAddedToCart: () => void;
}

const ALL_FILTER = { id: 'all', name: 'All Items', icon: '🍽️' };

export default function Bestsellers({
  activeFilter,
  onFilterChange,
  onQuickView,
  onAddedToCart,
}: BestsellersProps) {
  const { ref, isVisible } = useScrollAnimation();

  const filters = [ALL_FILTER, ...categories];
  const filtered =
    activeFilter === 'all'
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section id="bestsellers" className="bg-[#f7f3ec] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-8 text-center transition-all duration-700 sm:mb-10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9b7134]">
            The good stuff, baked fresh
          </p>
          <h2 className="mb-4 font-serif text-4xl tracking-[-0.035em] text-[#302016] sm:text-5xl">
            Made to be <span className="italic text-[#875635]">loved</span>
          </h2>
          <p className="mx-auto max-w-xl font-sans text-sm leading-6 text-[#78685b] sm:text-base">
            A few of the things that keep our neighbours coming back for one more bite.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className={`mb-7 flex gap-2 overflow-x-auto pb-2 sm:mb-9 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              id={`filter-${filter.id}`}
              onClick={() => onFilterChange(filter.id)}
              className={`flex min-h-10 shrink-0 items-center gap-1.5 rounded-full px-4 font-sans text-xs font-semibold transition-all duration-200 sm:text-sm ${
                activeFilter === filter.id
                  ? 'bg-[#754a30] text-white shadow-sm'
                  : 'border border-[#e7ddd0] bg-white text-[#78685b] hover:border-[#b88a52] hover:text-[#754a30]'
              }`}
              aria-pressed={activeFilter === filter.id}
            >
              <span>{filter.icon}</span>
              <span>{filter.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className={`min-w-0 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 60 + 200}ms` }}
            >
              <ProductCard
                product={product}
                onQuickView={onQuickView}
                onAddedToCart={onAddedToCart}
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center font-sans text-[#9a8978]">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg">No products in this category yet</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="font-sans text-xs text-[#8d7b69]">
            {filtered.length} freshly baked favourites · Demo prices in Indian rupees
          </p>
        </div>
      </div>
    </section>
  );
}
