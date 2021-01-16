import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: { user: {}, isAuthorized: false },
  reducers: {
    authorizeUser: (state, { payload }) => {
      localStorage.setItem(payload.auth, payload.token);
      state.user = payload.user;
      state.isAuthorized = true;
    },
  },
});
export const { authorizeUser } = slice.actions;
export default slice.reducer;
