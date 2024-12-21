import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/services";

const initialState = {
    products: [],
    loading: false,
    error: null
}

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
return api.get("/products")
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    }
})

export default productsSlice.reducer
export {fetchProducts}
