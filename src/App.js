import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productId) => {
    setCartItems((items) => {
      const itemIndex = items.findIndex((item) => item.id === productId);
      if (itemIndex === -1) {
        // Product is not in cart yet, so add it with a quantity of 1
        return [...items, { id: productId, quantity: 1 }];
      } else {
        // Product is already in cart, so update its quantity
        const updatedItems = [...items];
        updatedItems[itemIndex].quantity++;
        return updatedItems;
      }
    });
  };

  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10.99 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 19.99 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 5.99 },
  ];

  return (
    <div>
      <h1>E-Commerce Site</h1>
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <Cart items={cartItems} />
    </div>
  );
}

export default App;
