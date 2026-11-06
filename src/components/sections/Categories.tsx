'use client';

import { categories } from '@/data/categories';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface CategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export default function Categories({ onSelectCategory }: CategoriesProps) {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToBestsellers = (categoryId: string) => {
    onSelectCategory(categoryId);
    document.getElementById('bestsellers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories" className="bg-[#fffdf9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div
          ref={ref}
          className={`mb-10 flex flex-col gap-5 transition-all duration-700 sm:mb-12 sm:flex-row sm:items-end sm:justify-between ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="max-w-2xl">
            <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9b7134]">
              A little something for everyone
            </p>
            <h2 className="font-serif text-4xl tracking-[-0.035em] text-[#302016] sm:text-5xl">
              Find your <span className="italic text-[#875635]">favourite</span>
            </h2>
          </div>
          <p className="max-w-sm font-sans text-sm leading-6 text-[#78685b] sm:text-right">
            Thoughtfully made classics and new things to fall for, fresh from
            the bakery.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4">
          {categories.map((category, index) => (
            <button
              key={category.id}
              id={`category-${category.id}`}
              type="button"
              onClick={() => scrollToBestsellers(category.id)}
              className={`group relative isolate flex min-h-44 overflow-hidden rounded-2xl bg-[#302016] text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#875635] sm:min-h-56 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
              aria-label={`Browse ${category.name}`}
            >
              <span
                className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${category.image}')` }}
                aria-hidden="true"
              />
              <span
                className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1d120d]/85 via-[#1d120d]/15 to-transparent"
                aria-hidden="true"
              />
              <span className="mt-auto flex w-full items-end justify-between gap-2 p-4 sm:p-5">
                <span>
                  <span className="mb-1 block font-sans text-[9px] uppercase tracking-[0.16em] text-white/70 sm:text-[10px]">
                    Fresh from our oven
                  </span>
                  <span className="block font-serif text-xl text-white sm:text-2xl">
                    {category.name}
                  </span>
                </span>
                <span
                  className="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/55 bg-white/10 text-sm text-white backdrop-blur transition group-hover:border-[#e3bf72] group-hover:bg-[#e3bf72] group-hover:text-[#302016]"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-[#f3eadc] p-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6">
          <div>
            <p className="font-serif text-xl text-[#38251a] sm:text-2xl">
              Something worth celebrating?
            </p>
            <p className="mt-1 font-sans text-sm text-[#78685b]">
              Let&apos;s make a cake that feels like yours.
            </p>
          </div>
          <button
            type="button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[#754a30] px-5 font-sans text-sm font-semibold text-white transition hover:bg-[#513320] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#754a30]"
          >
            Plan a custom cake <span className="ml-2" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
