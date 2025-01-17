import React from 'react';
import CartItems from './cart-items';
import OrderSummary from './order-summary';

const Order = () => {
  return (
    <div className="flex flex-col justify-between gap-20 xl:flex-row">
      <CartItems />
      <OrderSummary />
    </div>
  );
};

export default Order;
