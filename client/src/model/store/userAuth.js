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
      localStorage.setItem(payload.auth, payload.token);
      localStorage.setItem("user", JSON.stringify(payload.user));
      state.user = payload.user;
      state.auth = payload.auth;
      state.isAuthorized = true;
    },
  },
});
export const { authorizeUser } = slice.actions;
export default slice.reducer;
