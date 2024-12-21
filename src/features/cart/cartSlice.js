import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../utils/helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
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
    },
    removeItem(state, action) {
      const existingItemIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        state.selectedItems.splice(existingItemIndex, 1);
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.total = sumPrice(state.selectedItems);
      }
    },
    toggleCheckout(state) {
      state.checkout = !state.checkout;
    },
    clearCart(state) {
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.checkout = false;
    },
  },
});

export default cartSlice.reducer;