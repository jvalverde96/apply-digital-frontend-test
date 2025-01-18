'use client';

import Breadcrumb from '@/components/cart/breadcrumb';
import CartHeader from '@/components/cart/cart-header';
import Order from '@/components/cart/order';
import Wrapper from '@/components/shared/wrapper';
import React from 'react';

const Cart = () => {
  return (
    <Wrapper className="custom-container flex flex-col justify-center gap-12">
      <Breadcrumb />
      <CartHeader />
      <Order />
    </Wrapper>
  );
};

export default Cart;
