import useCartContext from '@/context/cart/useCartContext';
import React from 'react';

const CartHeader = () => {
  const { cart } = useCartContext();

  return (
    <div className="flex flex-col py-12">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-4xl">Your Cart</h1>
        <p className="text-2xl font-extralight">
          {cart.length} item{`${cart.length !== 1 ? 's' : ''}`}
        </p>
      </div>
    </div>
  );
};

export default CartHeader;
