import { createSlice } from "@reduxjs/toolkit";
//export const bugAdded = createAction("bugAdded");
//export const bugRemoved = createAction("bugRemoved");
//export const bugResolved = createAction("bugResolved");

//action types

//Action Creators

const cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : { cart: {}, ids: [] };
console.log(cart);
//using create slice
const slice = createSlice({
  name: "cart",
  initialState: { ...cart },
  reducers: {
    itemAdded: (state, { payload }) => {
      if (!state.cart[payload.item.id]) {
        state.cart[payload.item.id] = payload.item;
        state.ids.push(payload.item.id);
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },

    itemRemoved: (state, action) => {
      delete state.cart[action.payload.id];
      state.ids = [...state.ids.filter((id) => id !== action.payload.id)];
      localStorage.setItem("cart", JSON.stringify(state));
    },
    increaseQuantity: (state, { payload }) => {
      payload.quantity
        ? (state.cart[payload.id].quantity = payload.quantity)
        : ++state.cart[payload.id].quantity;
      localStorage.setItem("cart", JSON.stringify(state));
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
