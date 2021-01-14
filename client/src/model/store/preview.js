import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "alert",
  initialState: {
    brand: "",
    generic: "",
    strength: "",
    formulation: "",
    drug_class: "",
    description: "",
    expiry_date: "",
    manufacture_date: "",
    packsize: "",
    quantity: "",
    nafdac: "",
    price: "",
    imageForm: false,
    company: "",
    images: [],
  },
  reducers: {
    view: (state, { payload }) => ({ ...payload }),
  },
});
export const { view } = slice.actions;
export default slice.reducer;
