import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "category",
  initialState: {},
  reducers: {
    onSuccess: (items, action) => {
      return { ...action.payload.data };
    },
  },
});
export const { onSuccess } = slice.actions;
export default slice.reducer;
