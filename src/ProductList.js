import React from 'react';
import AddToCartButton from './AddToCartButton';

function ProductList({ products, onAddToCart }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <AddToCartButton id={product.id} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
