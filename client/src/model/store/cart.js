import { createSlice } from "@reduxjs/toolkit";

const cart =
  JSON.parse(localStorage.getItem("cart")) !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
console.log(cart);
//using create slice
const slice = createSlice({
  name: "cart",
  initialState: [...cart],
  reducers: {
    itemAdded: (state, { payload }) => {
      state = payload;

      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },

    itemRemoved: (state, action) => {
      delete state.cart[action.payload.id];
      state.ids = [...state.ids.filter((id) => id !== action.payload.id)];
      localStorage.setItem("cart", JSON.stringify(state));
    },
    increaseQuantity: (state, { payload }) => {
      localStorage.setItem("cart", JSON.stringify(state));
      return payload.response;
    },
    decreaseQuantity: (state, { payload }) => {
      --state.cart[payload.id].quantity;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  itemAdded,
  itemRemoved,
  bugResolved,
  increaseQuantity,
  decreaseQuantity,
} = slice.actions;
export default slice.reducer;
