'use client';

import Breadcrumb from '@/components/cart/breadcrumb';
import CartHeader from '@/components/cart/cart-header';
import Order from '@/components/cart/order';
import React from 'react';

const Cart = () => {
  return (
    <div className="custom-container flex flex-col justify-center gap-12">
      <Breadcrumb />
      <CartHeader />
      <Order />
    </div>
  );
};

export default Cart;
