import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import ProductProvider from './context/products';
import CartProductsProvider from './context/cartproducts';

const router = createBrowserRouter([
  {
    path: "/Caputeeno/",
    element: <App />,
    children: [
      {
        path: "/Caputeeno/",
        element: <Home />,
      },
      {
        path: "/Caputeeno/product/:id",
        element: <Product />,
      },
      {
        path: "/Caputeeno/cart",
        element: <Cart />,
      },

    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProductsProvider>
      <ProductProvider>
        <RouterProvider router={router}/>
      </ProductProvider>
    </CartProductsProvider>
  </React.StrictMode>
);
