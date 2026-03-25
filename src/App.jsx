import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import ProductDetails from './pages/ProductDetails';
import IntroScreen from './components/IntroScreen';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroScreen onComplete={() => setShowIntro(false)} />;
  }

  return (
    <CartProvider>
      <Router>
        <div className="app-layout fade-in-app">
          <Navbar />
          <Cart />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<Help />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </main>
          <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Verve E-Commerce. Premium Quality.</p>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
