import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/product/productsSlice"

const store = configureStore({
    reducer: {
        products: productsReducer
    }
})

export default store