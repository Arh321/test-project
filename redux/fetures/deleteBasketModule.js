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
    triggCategori: (state) => {
      state.isCategory = !state.isCategory;
    },
    closeingCategori: (state, payload) => {
      if (payload.payload === false) {
        state.isCategory = false;
      }
    },
  },
});

export const {
  triggerDeleteBasket,
  triggPruductKey,
  triggCategori,
  closeingCategori,
} = deletebasketModuleSlice.actions;

export default deletebasketModuleSlice.reducer;
