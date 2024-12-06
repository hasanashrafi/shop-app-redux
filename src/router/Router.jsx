import React from 'react'

import Products from '../components/Products';
import NotFound from '../components/NotFound';
import Home from '../components/Home';
import ProductDetail from '../components/ProductDetail';
import CheckOut from '../components/CheckOut';
import ProductProvider from '../context/ProductContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardProvider from '../context/CardContext';
import Layout from '../layout/Layout';


function Router() {
  return (
    <CardProvider>
      <ProductProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ProductProvider>
    </CardProvider>
  )
}

export default Router