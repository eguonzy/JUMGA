import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "alert",
  initialState: "up",
  reducers: {
    up: (state, action) => (state = "up"),
    down: (state, action) => (state = "down"),
  },
});
export const { up, down } = slice.actions;
export default slice.reducer;
