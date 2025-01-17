import React from 'react';

interface OrderDetailProps {
  name: string;
  price: number;
}

const OrderDetail = ({ name, price }: OrderDetailProps) => {
  return (
    <div className="flex items-center justify-between gap-14">
      <p>{name}</p>
      <p>${price}</p>
    </div>
  );
};

export default OrderDetail;
