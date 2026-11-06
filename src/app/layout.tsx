import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Oven House | Artisan Bakery",
    template: "%s | The Oven House",
  },
  description:
    "Discover handcrafted cakes, artisan breads, pastries, and desserts made fresh daily at The Oven House.",
  openGraph: {
    title: "The Oven House | Artisan Bakery",
    description:
      "Handcrafted cakes, artisan breads, pastries, and desserts made fresh daily.",
    siteName: "The Oven House",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Freshly baked treats from The Oven House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Oven House | Artisan Bakery",
    description:
      "Handcrafted cakes, artisan breads, pastries, and desserts made fresh daily.",
    images: [
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&q=85",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
