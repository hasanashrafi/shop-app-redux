import React from 'react'

import { BrowserRouter, Route } from 'react-router';
import { Routes } from 'react-router';

// Import other components for your routes

import Products from '../components/Products';
import NotFound from '../components/NotFound';
import Home from '../components/Home';


function Router() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                {/* <Route path="/about" element={<About />} /> */}
                {/* Add more routes as needed */}
                <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
            </Routes>
        </BrowserRouter>
    
  )
}

export default Router