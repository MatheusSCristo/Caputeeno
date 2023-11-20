import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter,
  createBrowserRouter,
  HashRouter,
  RouterProvider,
} from "react-router-dom";
import Product from "./Pages/Product.jsx"
import Cart from "./Pages/Cart.jsx"
import Home from './Pages/Home.jsx';
import ProductProvider from './context/products.jsx';
import CartProductsProvider from './context/cartproducts.jsx';

const router = createBrowserRouter([
  {
    path: "/Caputeeno",
    element: <App />,
    children: [
      {
        path: "/Caputeeno/product/:id",
        element: <Product />
      },
      {
        path: "/Caputeeno/cart",
        element: <Cart />
      },
      {
        path: "/Caputeeno",
        element: <Home />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Caputeeno/'}>
      <CartProductsProvider>
        <ProductProvider>
          <RouterProvider router={router} />
        </ProductProvider>
      </CartProductsProvider>
  </BrowserRouter>
)
