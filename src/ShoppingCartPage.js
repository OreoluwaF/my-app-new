import React from 'react';
import CartItems from './CartItems';
import TotalPrice from './TotalPrice';
import CheckoutButton from './CheckoutButton';

function ShoppingCartPage() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <CartItems />
      <TotalPrice />
      <CheckoutButton />
    </div>
  );
}

export default ShoppingCartPage;
