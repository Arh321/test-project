import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBsketOpen: false,
};

const basketModuleSlice = createSlice({
  name: "basketModule",
  initialState,
  reducers: {
    triggerBasket: (state, payload) => {
      if (payload.payload === false) {
        state.isBsketOpen = false;
      }
      state.isBsketOpen = !state.isBsketOpen;
    },
    closingBasket: (state, payload) => {
      if (payload.payload === false) {
        state.isBsketOpen = false;
      }
    },
  },
});

export const { triggerBasket, closingBasket } = basketModuleSlice.actions;

export default basketModuleSlice.reducer;
