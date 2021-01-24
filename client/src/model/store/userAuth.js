import { createSlice } from "@reduxjs/toolkit";
let user;
try {
  user = JSON.parse(localStorage.getItem("user"));
} catch (error) {
  user = {};
}
const slice = createSlice({
  name: "user",
  initialState: {
    user,
    isAuthorized: localStorage.getItem("user") !== null ? true : false,
  },
  reducers: {
    authorizeUser: (state, { payload }) => {
      payload.user.shop_items = payload.shop_items;
      state.user = payload.user;
      state.auth = payload.auth;
      state.isAuthorized = true;
      localStorage.setItem(payload.auth, payload.token);
      localStorage.setItem("user", JSON.stringify(payload.user));
    },
    add_item: (state, { payload }) => {
      state.user.shop_items = payload.shop_items;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    update_user: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
  },
});
export const { authorizeUser, add_item, update_user } = slice.actions;
export default slice.reducer;
