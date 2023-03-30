import React from 'react';
import Banner from './Banner';
import ProductCategories from './ProductCategories';
import FeaturedProducts from './FeaturedProducts';

function Homepage() {
  return (
    <div>
      <h1>Welcome to our e-commerce platform!</h1>
      <Banner />
      <ProductCategories />
      <FeaturedProducts />
    </div>
  );
}

export default Homepage;
