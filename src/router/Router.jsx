import React from 'react'


// Import other components for your routes

import Products from '../components/Products';
import NotFound from '../components/NotFound';
import Home from '../components/Home';
import ProductDetail from '../components/ProductDetail';
import CheckOut from '../components/CheckOut';
import ProductProvider from '../context/ProductContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardProvider from '../context/CardContext';


function Router() {
  return (
    /* The code snippet you provided is setting up the routing configuration for a React application using
    React Router. Here's a breakdown of what it's doing: */
    <CardProvider>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<CheckOut />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* Add more routes as needed */}
            <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </CardProvider>
  )
}

export default Router