'use client';

import { FormEvent, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const contactDetails = [
  {
    icon: '📍',
    label: 'Visit our bakery',
    value: '42, Bakery Lane, Connaught Place, New Delhi — 110001',
  },
  { icon: '📞', label: 'Call us', value: '+91 98765 43210' },
  { icon: '✉️', label: 'Email us', value: 'hello@theovenhouse.demo' },
];

const openingHours = [
  { days: 'Monday – Saturday', hours: '7:00 AM – 9:00 PM' },
  { days: 'Sunday', hours: '8:00 AM – 7:00 PM' },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#D4A853]">
            We&apos;d Love to Hear From You
          </p>
          <h2 className="mb-4 font-serif text-3xl text-[#3B1F0F] sm:text-4xl lg:text-5xl">
            Let&apos;s Talk <span className="italic text-[#7C4A2D]">Bakery</span>
          </h2>
          <p className="mx-auto max-w-xl font-sans text-[#6B4C3B]">
            Planning a celebration or have a question? Get in touch with our
            friendly team.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-2xl border border-[#F5E6D3] bg-[#FDFAF5] p-5"
                >
                  <span className="mb-3 block text-2xl" aria-hidden="true">
                    {detail.icon}
                  </span>
                  <h3 className="font-serif text-lg text-[#3B1F0F]">
                    {detail.label}
                  </h3>
                  <p className="mt-1 break-words font-sans text-sm leading-relaxed text-[#6B4C3B]">
                    {detail.value}
                  </p>
                </div>
              ))}

              <div className="rounded-2xl border border-[#F5E6D3] bg-[#FDFAF5] p-5">
                <span className="mb-3 block text-2xl" aria-hidden="true">
                  🕐
                </span>
                <h3 className="font-serif text-lg text-[#3B1F0F]">
                  Opening hours
                </h3>
                <ul className="mt-2 space-y-1 font-sans text-sm text-[#6B4C3B]">
                  {openingHours.map((item) => (
                    <li key={item.days} className="flex justify-between gap-3">
                      <span>{item.days}</span>
                      <span className="whitespace-nowrap">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-3xl border border-[#E8D5B7] bg-[#F5EDD8] p-8 text-center"
              role="img"
              aria-label="Map preview showing the demo bakery location in Connaught Place, New Delhi"
              style={{
                backgroundImage:
                  'linear-gradient(30deg, transparent 48%, rgba(124,74,45,.12) 49%, rgba(124,74,45,.12) 51%, transparent 52%), linear-gradient(120deg, transparent 48%, rgba(124,74,45,.10) 49%, rgba(124,74,45,.10) 51%, transparent 52%)',
                backgroundSize: '56px 56px, 72px 72px',
              }}
            >
              <div className="rounded-2xl border border-white/80 bg-white/90 px-6 py-5 shadow-lg backdrop-blur-sm">
                <span className="text-3xl" aria-hidden="true">
                  📍
                </span>
                <p className="mt-2 font-serif text-lg text-[#3B1F0F]">
                  Connaught Place
                </p>
                <p className="font-sans text-sm text-[#6B4C3B]">
                  New Delhi · Demo location
                </p>
                <p className="mt-2 font-sans text-xs text-[#9A806C]">
                  Map preview for demonstration only
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#F5E6D3] bg-[#FDFAF5] p-6 sm:p-8">
            <h3 className="font-serif text-2xl text-[#3B1F0F]">
              Send us a message
            </h3>
            <p className="mb-6 mt-2 font-sans text-sm text-[#6B4C3B]">
              Tell us what you&apos;re craving. This demo form won&apos;t send or
              store your details.
            </p>

            {submitted ? (
              <div
                className="rounded-2xl border border-[#D4A853]/40 bg-[#F5E6D3]/60 p-5 text-[#3B1F0F]"
                role="status"
              >
                <p className="font-serif text-xl">Thank you for reaching out!</p>
                <p className="mt-1 font-sans text-sm text-[#6B4C3B]">
                  Your message is part of this demo and was not sent.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 font-sans text-sm font-semibold text-[#7C4A2D] underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block font-sans text-sm font-medium text-[#3B1F0F]"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-[#E8D5B7] bg-white px-4 py-3 font-sans text-sm text-[#2C1810] outline-none transition focus:border-[#7C4A2D] focus:ring-2 focus:ring-[#7C4A2D]/15"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block font-sans text-sm font-medium text-[#3B1F0F]"
                  >
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-[#E8D5B7] bg-white px-4 py-3 font-sans text-sm text-[#2C1810] outline-none transition focus:border-[#7C4A2D] focus:ring-2 focus:ring-[#7C4A2D]/15"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block font-sans text-sm font-medium text-[#3B1F0F]"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-y rounded-xl border border-[#E8D5B7] bg-white px-4 py-3 font-sans text-sm text-[#2C1810] outline-none transition focus:border-[#7C4A2D] focus:ring-2 focus:ring-[#7C4A2D]/15"
                    placeholder="Custom cake, celebration order, or just a sweet question..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#7C4A2D] px-6 py-3.5 font-sans text-sm font-semibold text-white transition hover:bg-[#5A3520] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C4A2D]"
                >
                  Send message (Demo) →
                </button>
              </form>
            )}
          </div>
        </div>

        <p className="mt-6 text-center font-sans text-xs text-[#9A806C]">
          Demo contact details and form — no real business or message delivery.
        </p>
      </div>
    </section>
  );
}
