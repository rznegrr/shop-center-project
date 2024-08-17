const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    cart: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    addProducts: (state, action) => {
      state.items.push(action.payload);
    },
    removeProducts: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer : { products: productSlice.reducer }
})

export const { setProducts, addProducts, removeProducts } = productSlice.actions;

export default store
