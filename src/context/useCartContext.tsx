'use client';

import { useContext } from 'react';
import { CartContext } from './cart-context';

const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default useCartContext;
