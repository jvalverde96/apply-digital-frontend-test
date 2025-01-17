import useCartContext from '@/context/cart/useCartContext';
import { Game } from '@/utils/endpoint';
import React from 'react';
import CartItem from './cart-item';

const CartItems = () => {
  const { cart } = useCartContext();

  return (
    <div className="flex flex-col">
      {cart.map((game, index) => (
        <CartItem
          key={game.id}
          game={game}
          index={index}
          totalItems={cart.length}
        />
      ))}
    </div>
  );
};

export default CartItems;
