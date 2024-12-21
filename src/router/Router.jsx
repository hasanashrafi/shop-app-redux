import React from 'react'

import Products from '../components/Products';
import NotFound from '../components/NotFound';
import Home from '../components/Home';
import ProductDetail from '../components/ProductDetail';
import CheckOut from '../components/CheckOut';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ProductProvider from '../context/ProductContext';
// import CardProvider from '../context/CardContext';
import Layout from '../layout/Layout';
import store from '../app/store';
import { Provider } from 'react-redux';


function Router() {
  return (
    // <CardProvider>
    // <ProductProvider>

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

    // </ProductProvider>
    // </CardProvider>
  )
}

export default Router