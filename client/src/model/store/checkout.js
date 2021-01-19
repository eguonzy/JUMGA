import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "checkout",
  initialState: {
    address: "",
    amount: "",
    currency: "USD",
  },
});
