import React from 'react';
import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import AddToCartButton from './AddToCartButton';

function ProductPage() {
  return (
    <div>
      <h1>Product Name</h1>
      <ProductImage />
      <p>Product description</p>
      <ProductPrice />
      <AddToCartButton />
    </div>
  );
}

export default ProductPage;
