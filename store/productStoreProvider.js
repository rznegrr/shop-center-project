"use client";

import { Provider } from "react-redux";
import store from "./productSlice";

import store from "./shopcart-slice";

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
