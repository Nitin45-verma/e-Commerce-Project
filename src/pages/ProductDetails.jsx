import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { MOCK_PRODUCTS } from '../data/products';
import { ArrowLeft, ShoppingCart, Info } from 'lucide-react';
import Product3DCard from '../components/Product3DCard';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = MOCK_PRODUCTS.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="page-container" style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>Product not found</h2>
        <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px' }}>
          Back to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="page-container">
      <button 
        onClick={() => navigate(-1)} 
        style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: 'var(--text-light)', marginBottom: '30px', padding: 0 }}
      >
        <ArrowLeft size={20} /> Back
      </button>
      
      <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap', background: 'var(--surface)', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <div style={{ flex: '1 1 400px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
          <Product3DCard imageUrl={product.image} />
          <div style={{ position: 'absolute', bottom: '20px', right: '20px', background: 'rgba(255,255,255,0.8)', padding: '8px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px', pointerEvents: 'none' }}>
            <Info size={14} /> Drag to rotate
          </div>
        </div>
        
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', color: 'var(--primary)', fontWeight: '600', marginBottom: '12px' }}>
            {product.category}
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--text)' }}>
            {product.name}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', lineHeight: '1.6', marginBottom: '30px' }}>
            {product.description || 'This premium item is designed to elevate your everyday lifestyle, combining uncompromising quality with timeless design.'}
          </p>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px', color: 'var(--text)' }}>
            ${product.price.toFixed(2)}
          </div>
          
          <button 
            onClick={handleAddToCart}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', background: added ? '#10b981' : 'var(--primary)', color: 'white', border: 'none', padding: '16px 32px', fontSize: '1.1rem', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s ease', fontWeight: '500', width: '100%', maxWidth: '300px' }}
          >
            <ShoppingCart size={22} /> {added ? 'Added to Cart ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
