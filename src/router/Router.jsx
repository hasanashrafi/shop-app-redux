import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../components/Home';
import store from '../app/store';
import Layout from '../layout/Layout';
import Products from '../components/Products';
import NotFound from '../components/NotFound';
import CheckOut from '../components/CheckOut';
import ProductDetail from '../components/ProductDetail';



function Router() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default Router