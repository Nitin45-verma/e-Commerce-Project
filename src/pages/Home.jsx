import React from 'react';
import ProductCard from '../components/ProductCard';
import Hero3D from '../components/Hero3D';
import { MOCK_PRODUCTS } from '../data/products';

const Home = () => {
  return (
    <div className="page-container">
      <header className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <Hero3D />
        <div style={{ position: 'relative', zIndex: 1, padding: '40px 0', textAlign: 'center' }}>
          <h1>Discover Premium Essentials</h1>
          <p>Curated products designed to elevate your everyday lifestyle.</p>
        </div>
      </header>
      <section className="product-grid">
        {MOCK_PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default Home;
