'use client';

import { useState } from 'react';
import About from '@/components/sections/About';
import Bestsellers from '@/components/sections/Bestsellers';
import Categories from '@/components/sections/Categories';
import Contact from '@/components/sections/Contact';
import Gallery from '@/components/sections/Gallery';
import Hero from '@/components/sections/Hero';
import Newsletter from '@/components/sections/Newsletter';
import SpecialOffer from '@/components/sections/SpecialOffer';
import Testimonials from '@/components/sections/Testimonials';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import CartDrawer from '@/components/ui/CartDrawer';
import ProductModal from '@/components/ui/ProductModal';
import Toast, { useToast } from '@/components/ui/Toast';
import { Product } from '@/types';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const { toast, showToast, hideToast } = useToast();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories onSelectCategory={setSelectedCategory} />
        <Bestsellers
          activeFilter={selectedCategory}
          onFilterChange={setSelectedCategory}
          onQuickView={setQuickViewProduct}
          onAddedToCart={() => showToast('Added to your cart')}
        />
        <SpecialOffer />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <Newsletter />
        <Contact />
      </main>
      <Footer onSelectCategory={setSelectedCategory} />
      <CartDrawer />
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
        onClose={hideToast}
      />
    </>
  );
}
