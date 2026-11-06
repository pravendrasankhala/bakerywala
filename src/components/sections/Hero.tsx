'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#2b180f] sm:min-h-[820px] lg:min-h-[780px]"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?w=2000&q=90')",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#24140f]/95 via-[#30190f]/80 to-[#30190f]/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#21120d]/50 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-24 pt-32 sm:px-8 lg:grid-cols-[1.05fr_.8fr] lg:gap-16 lg:px-10 lg:pb-20 lg:pt-28">
        <div className="text-center lg:text-left">
          <div
            className={`mb-7 inline-flex items-center gap-2 rounded-full border border-[#d4a853]/40 bg-black/20 px-4 py-2 backdrop-blur-sm transition-all duration-700 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
          >
            <span className="text-[#e7c576]" aria-hidden="true">✦</span>
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3d996] sm:text-xs">
              A little joy, baked fresh every day
            </span>
          </div>

          <h1
            className={`mx-auto mb-6 max-w-3xl font-serif text-[clamp(3.35rem,8vw,6.5rem)] leading-[.98] tracking-[-0.045em] text-[#fffaf2] transition-all delay-100 duration-700 lg:mx-0 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
          >
            Good things
            <span className="mt-1 block font-normal italic text-[#e5bd68]">
              take time.
            </span>
          </h1>

          <p
            className={`mx-auto mb-9 max-w-xl font-sans text-base leading-7 text-white/75 transition-all delay-200 duration-700 sm:text-lg sm:leading-8 lg:mx-0 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
          >
            Slow-fermented breads, celebration-worthy cakes and buttery little
            things. Made by hand, fresh from our oven, and always worth sharing.
          </p>

          <div
            className={`flex flex-col justify-center gap-3 transition-all delay-300 duration-700 sm:flex-row lg:justify-start ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
          >
            <button
              type="button"
              onClick={() => scrollTo('bestsellers')}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#d4a853] px-7 font-sans text-sm font-semibold text-[#2b180f] shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#e8c97a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8c97a]"
            >
              Shop the bakery <span className="ml-2" aria-hidden="true">→</span>
            </button>
            <button
              type="button"
              onClick={() => scrollTo('about')}
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 font-sans text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Our story
            </button>
          </div>

          <div
            className={`mx-auto mt-10 grid max-w-md grid-cols-3 divide-x divide-white/20 border-t border-white/20 pt-6 transition-all delay-500 duration-700 lg:mx-0 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
          >
            {[
              { value: '24 hr', label: 'Slow-fermented' },
              { value: 'Small', label: 'Batches, always' },
              { value: 'Since 2010', label: 'Baking with care' },
            ].map(({ value, label }) => (
              <div key={label} className="px-2 text-center lg:text-left">
                <p className="font-serif text-lg text-[#f1d58f] sm:text-xl">{value}</p>
                <p className="mt-1 font-sans text-[9px] uppercase leading-4 tracking-[0.12em] text-white/55 sm:text-[10px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`relative mx-auto hidden w-full max-w-[410px] transition-all delay-200 duration-1000 lg:block ${
            loaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}
        >
          <div className="absolute -inset-5 rotate-3 rounded-[2rem] border border-[#e5bd68]/35" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-[#3b2418] shadow-[0_35px_90px_rgba(0,0,0,.4)]">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=90"
              alt="Hand-finished chocolate celebration cake"
              className="h-[460px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c110b]/90 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#edca79]">
                Made for the moment
              </p>
              <p className="font-serif text-3xl text-white">
                The celebration cake
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-sans text-sm text-white/65">
                  Belgian chocolate · serves 8–10
                </span>
                <span className="font-sans text-lg font-semibold text-[#f1d58f]">
                  ₹849
                </span>
              </div>
            </div>
            <div className="absolute right-5 top-5 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-[#f7ead1] text-[#3b1f0f] shadow-lg">
              <span className="font-sans text-sm font-bold">4.9</span>
              <span className="text-[10px] text-[#bb8a35]" aria-hidden="true">★★★★★</span>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-8 rounded-2xl border border-[#e9dcc8] bg-[#fffaf2] px-4 py-3 shadow-xl">
            <p className="font-serif text-sm text-[#3b1f0f]">Out of the oven</p>
            <p className="mt-0.5 font-sans text-xs text-[#806a56]">
              Freshly made, never rushed
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/55 sm:flex">
        <span className="font-sans text-[9px] uppercase tracking-[0.25em]">Scroll to explore</span>
        <span className="h-7 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
