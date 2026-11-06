'use client';
// src/components/ui/CartDrawer.tsx

import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { state, closeCart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[800] transition-opacity duration-300 ${
          state.isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-[#FDFAF5] z-[900] shadow-2xl flex flex-col transition-transform duration-400 ease-in-out ${
          state.isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#F5E6D3]">
          <div>
            <h2 className="font-serif text-xl text-[#3B1F0F]">Your Cart</h2>
            <p className="text-sm text-[#6B4C3B] font-sans">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
          </div>
          <button
            id="close-cart"
            onClick={closeCart}
            className="w-9 h-9 rounded-full bg-[#F5E6D3] flex items-center justify-center hover:bg-[#E8D5B7] transition-colors text-[#7C4A2D] text-lg"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto scrollbar-thin py-4 px-5 space-y-4">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="text-6xl">🛒</div>
              <p className="font-serif text-xl text-[#3B1F0F]">Your cart is empty</p>
              <p className="text-sm text-[#6B4C3B] font-sans">
                Add some delicious items to get started!
              </p>
              <button
                onClick={closeCart}
                className="mt-2 bg-[#7C4A2D] text-white px-6 py-2.5 rounded-full text-sm font-semibold font-sans hover:bg-[#5A3520] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            state.items.map((item) => (
              <div key={item.product.id} className="flex gap-3 bg-white rounded-xl p-3 shadow-sm border border-[#F5E6D3]">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-sm text-[#3B1F0F] leading-snug line-clamp-2">
                    {item.product.name}
                  </h4>
                  <p className="text-[#7C4A2D] font-bold text-sm font-sans mt-0.5">
                    ₹{item.product.price}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity controls */}
                    <div className="flex items-center gap-1 bg-[#F5E6D3] rounded-full px-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[#E8D5B7] transition-colors text-[#7C4A2D] text-sm font-bold"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="text-sm font-semibold text-[#3B1F0F] font-sans w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[#E8D5B7] transition-colors text-[#7C4A2D] text-sm font-bold"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-xs text-red-400 hover:text-red-600 transition-colors font-sans"
                      aria-label={`Remove ${item.product.name}`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-bold text-sm text-[#3B1F0F] font-sans">
                    ₹{item.product.price * item.quantity}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-[#F5E6D3] p-5 space-y-4 bg-white">
            <div className="flex justify-between items-center">
              <span className="text-[#6B4C3B] font-sans text-sm">Subtotal</span>
              <span className="font-bold text-lg text-[#3B1F0F] font-sans">₹{totalPrice}</span>
            </div>
            <div className="flex justify-between items-center text-xs text-[#C8B8A2] font-sans">
              <span>Delivery charges calculated at checkout</span>
            </div>
            <button
              id="checkout-btn"
              className="w-full bg-[#7C4A2D] text-white py-3.5 rounded-xl font-semibold font-sans hover:bg-[#5A3520] transition-colors shadow-md"
              onClick={() => alert('🎉 This is a demo! Checkout would proceed in the full version.')}
            >
              Proceed to Checkout →
            </button>
            <p className="text-center text-xs text-[#C8B8A2] font-sans">
              * This is a demo — no real orders are placed
            </p>
          </div>
        )}
      </div>
    </>
  );
}
