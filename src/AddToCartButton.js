import React from 'react';

function AddToCartButton({ id, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart(id);
  };

  return (
    <button onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
