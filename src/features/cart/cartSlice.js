import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../utils/helper";
import { saveCartToLocalStorage, getCartFromLocalStorage } from "../../utils/localStorage";

const initialState = {
    selectedItems: getCartFromLocalStorage(), // Load initial state from local storage
    itemsCounter: sumQuantity(getCartFromLocalStorage()),
    total: sumPrice(getCartFromLocalStorage()),
    checkout: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const existingItemIndex = state.selectedItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingItemIndex >= 0) {
                state.selectedItems[existingItemIndex].quantity += 1;
            } else {
                state.selectedItems.push({ ...action.payload, quantity: 1 });
            }
            state.itemsCounter = sumQuantity(state.selectedItems);
            state.total = sumPrice(state.selectedItems);
            state.checkout = false;
            saveCartToLocalStorage(state.selectedItems); // Update local storage
        },
        removeItem(state, action) {
            const existingItemIndex = state.selectedItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingItemIndex >= 0) {
                state.selectedItems.splice(existingItemIndex, 1);
                state.itemsCounter = sumQuantity(state.selectedItems);
                state.total = sumPrice(state.selectedItems);
                saveCartToLocalStorage(state.selectedItems); // Update local storage
            }
        },
        increase: (state, action) => {
            const existingItemIndex = state.selectedItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingItemIndex >= 0) {
                state.selectedItems[existingItemIndex].quantity += 1;
                state.itemsCounter = sumQuantity(state.selectedItems);
                state.total = sumPrice(state.selectedItems);
                saveCartToLocalStorage(state.selectedItems); // Update local storage
            }
        },
        decrease: (state, action) => {
            const existingItemIndex = state.selectedItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingItemIndex >= 0) {
                if (state.selectedItems[existingItemIndex].quantity > 1) {
                    state.selectedItems[existingItemIndex].quantity -= 1;
                    state.itemsCounter = sumQuantity(state.selectedItems);
                    state.total = sumPrice(state.selectedItems);
                    saveCartToLocalStorage(state.selectedItems); // Update local storage
                }
            }
        },
        checkout: (state) => {
            state.selectedItems = [];
            state.checkout = true;
            state.total = 0;
            state.itemsCounter = 0;
            saveCartToLocalStorage(state.selectedItems); // Update local storage
        }
    }
});

export default cartSlice.reducer;
export const {
    addItem,
    removeItem,
    increase,
    decrease,
    checkout
} = cartSlice.actions;