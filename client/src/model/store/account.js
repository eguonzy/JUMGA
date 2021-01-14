import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "account",
  initialState: { current: localStorage.getItem("account") || "Account" },
  reducers: {
    account: (state, { payload }) => {
      localStorage.setItem("account", payload.option);
      state.current = payload.option;
    },
  },
});

export const { account } = slice.actions;
export default slice.reducer;
