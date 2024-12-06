import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/services'

const ProductContext = createContext()

function ProductProvider({ children }) {
    const [products, setProducts] = useState([])

    /* The `useEffect` hook in the code snippet is responsible for fetching products from an API endpoint
  when the component mounts. Here's a breakdown of what it does: */
    useEffect(() => {
        try {
            api.get("/products")
                .then((res) => setProducts(res))
        } catch (error) {
            console.log(error.message)
        }
    }, [])


    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}

/**
 * The useProducts function retrieves and returns the products from the ProductContext using useContext
 * in React.
 * @returns The `useProducts` function is returning the products obtained from the `ProductContext`
 * using the `useContext` hook.
 */
const useProducts = () => {
    const products = useContext(ProductContext)
    return products
}

const useProductsDetail = (id) => {
    const products = useContext(ProductContext)
    const product = products.find((product) => product.id === id);
    return product
}

export default ProductProvider;
export { useProducts, useProductsDetail }