import { createSlice } from "@reduxjs/toolkit";
const sortItems = (items, filter) => {
  return items.filter((item) => item.primary_category === filter);
};

const slice = createSlice({
  name: "Category",
  initialState: { furnitures: [], clothes: [], electronics: [] },
  reducers: {
    getItemsList: (state, { payload }) => {
      const furnitures = sortItems(payload.items, "Furnitures");
      const electronics = sortItems(payload.items, "Computers");
      const clothes = sortItems(payload.items, "Clothes");
      return { furnitures, electronics, clothes };
    },
  },
});
export const { getItemsList } = slice.actions;
export default slice.reducer;
