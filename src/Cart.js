import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const [cart, setCart] = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}
      <h3>Total Price: {getTotalPrice()}</h3>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
