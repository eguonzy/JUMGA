import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "alert",
  initialState: {
    name: "",
    description: "",
    quantity: "",
    price: "",
    imageForm: false,
    manufacturer: "",
    images: [],
  },
  reducers: {
    view: (state, { payload }) => ({ ...payload }),
    images: (state, { payload }) => {
      console.log(state.images);
      state.images = [...payload.images];
      console.log(state.images);
      return state;
    },
  },
});
export const { view, images } = slice.actions;
export default slice.reducer;
