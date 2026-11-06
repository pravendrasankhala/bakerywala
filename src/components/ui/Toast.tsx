'use client';
// src/components/ui/Toast.tsx

import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  visible: boolean;
  onClose: () => void;
}

export default function Toast({ message, type = 'success', visible, onClose }: ToastProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  const colors = {
    success: 'bg-[#7C4A2D] text-white',
    error: 'bg-red-600 text-white',
    info: 'bg-[#D4A853] text-[#3B1F0F]',
  };

  const icons = { success: '✓', error: '✕', info: 'ℹ' };

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-[9999] flex items-center gap-3 px-5 py-3 rounded-full shadow-2xl font-sans text-sm font-medium transition-all duration-500 ${colors[type]} ${
        visible
          ? 'opacity-100 translate-y-0 -translate-x-1/2'
          : 'opacity-0 translate-y-10 -translate-x-1/2 pointer-events-none'
      }`}
    >
      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
        {icons[type]}
      </span>
      {message}
    </div>
  );
}

// Hook for toast management
export function useToast() {
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    type: NonNullable<ToastProps['type']>;
  }>({ visible: false, message: '', type: 'success' });

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ visible: true, message, type });
  };
  const hideToast = () => setToast((t) => ({ ...t, visible: false }));

  return { toast, showToast, hideToast };
}
