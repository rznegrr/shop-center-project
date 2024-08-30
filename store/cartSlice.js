import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

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
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.quantity++;
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
      state.totalAmount += newItem.price;
      toast.success(`محصول ${newItem.name} به سبد خرید اضافه شد`, {
        style: {
          borderRadius: "10px",
          background: "#A4AFE5",
          color: "#fff",
          fontSize:'14px'
        },
        duration: 4000,
      });
    },

    removeItem: (state, action) => {
      if (state.quantity === 0) {
        return;
      }
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.quantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
      state.totalAmount -= existingItem.price;
      toast.error(`محصول ${existingItem.name} از سبد خرید حذف شد`, {
        style: {
          borderRadius: "10px",
          background: "#A4AFE5",
          color: "#fff",
          fontSize:'14px'
        },
        duration: 4000,
      });
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
