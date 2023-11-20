import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import ProductProvider from './context/products';
import CartProductsProvider from './context/cartproducts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <CartProductsProvider>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </ProductProvider>
    </CartProductsProvider>
  </HashRouter>
);
