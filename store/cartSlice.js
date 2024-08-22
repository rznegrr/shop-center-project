import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  quantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "shopCart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem);
      state.quantity++;
      if (!existingItem) {
        state.items.push(action.payload);
      } else {
        existingItem.quantity++;
      }
      state.totalAmount += newItem.calcPrice;
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem);
      state.quantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
      state.totalAmount -= existingItem.calcPrice;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
