import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cartslice";

const mystore = configureStore({
  reducer: {
    cart:cartSlice.reducer,

  },
});
export default mystore;