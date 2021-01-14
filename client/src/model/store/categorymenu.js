import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "categorymenu",
  initialState: false,
  reducers: {
    showMenu: (state, action) => (state = true),
    hideMenu: (state, action) => (state = false),
  },
});

export const { showMenu, hideMenu } = slice.actions;
export default slice.reducer;
