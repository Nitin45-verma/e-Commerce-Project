import React from 'react';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate('/product/' + product.id)} style={{ cursor: 'pointer' }}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-bottom">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button 
            className="add-to-cart-btn" 
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            <Plus size={18} /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
