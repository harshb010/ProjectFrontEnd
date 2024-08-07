import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state,action) => {
      console.log("Add to cart Called");
      console.log(action);
      var record = [...state.value, action.payload]
      state.value=record
    },
    removefromcart: (state,action) => {
      console.log("remove from cart called");
      var record = [...state.value, action.payload]
      state.value=record
    }
},
});

export const { addtocart, removefromcart } = cartSlice.actions;

export default cartSlice.reducer;