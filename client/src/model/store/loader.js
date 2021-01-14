import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "loader",
  initialState: false,
  reducers: {
    loading: (state, action) => {
      return (state = true);
    },
    loadingFinished: (state, action) => {
      return (state = false);
    },
  },
});
export const { loading, loadingFinished } = slice.actions;
export default slice.reducer;
