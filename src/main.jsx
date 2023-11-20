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
    path: "/",
    element: <App />,
    children: [
      {
        path: "/product/:id",
        element: <Product />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/",
        element: <Home />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <CartProductsProvider>
        <ProductProvider>
          <RouterProvider router={router} />
        </ProductProvider>
      </CartProductsProvider>
  </React.StrictMode>
)
