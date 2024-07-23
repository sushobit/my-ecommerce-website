import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import CartButton from './components/CartIcon';
import { CartProvider } from './contexts/CartContext';
import './App.css'
import Footer from './components/Footer';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className='bg' sx={{ marginTop: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <CartButton />
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;