import { createSlice } from "@reduxjs/toolkit";
import AllData from "../../public/data/AllData";

const initialState = {
  data : AllData,
  inCart : []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      state.inCart.push(action.payload)
    },
    deleteCart(state, action) {
      localStorage.removeItem('item')
    },
  },
});

export const { addCart, deleteCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
