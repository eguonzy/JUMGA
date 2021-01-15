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
      state.images = [...state.images, ...payload.images];
      console.log(state.images);
      return state;
    },
    deleteImage: (state, { payload }) => {
      console.log("this");
      state.images = state.images.filter(
        (image) => image.id !== payload.image.id
      );
    },
  },
});
export const { view, images, deleteImage } = slice.actions;
export default slice.reducer;
