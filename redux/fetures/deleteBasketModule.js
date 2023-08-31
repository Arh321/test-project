import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDeleteBsketOpen: false,
  isPruductKey: false,
  isCategory: false,
};

const deletebasketModuleSlice = createSlice({
  name: "basketModule",
  initialState,
  reducers: {
    triggerDeleteBasket: (state) => {
      state.isDeleteBsketOpen = !state.isDeleteBsketOpen;
    },
    triggPruductKey: (state) => {
      state.isPruductKey = !state.isPruductKey;
    },
    triggCategiry: (state) => {
      state.isCategory = !state.isCategory;
    },
  },
});

export const { triggerDeleteBasket, triggPruductKey, triggCategiry } =
  deletebasketModuleSlice.actions;

export default deletebasketModuleSlice.reducer;
