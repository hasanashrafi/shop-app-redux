import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/services'

const ProductContext = createContext()

function ProductProvider({ children }) {
    const [products, setProducts] = useState([])

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