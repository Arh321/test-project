import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBsketOpen: false,
};

const basketModuleSlice = createSlice({
  name: "basketModule",
  initialState,
  reducers: {
    triggerBasket: (state) => {
      state.isBsketOpen = !state.isBsketOpen;
    },
  },
});

export const { triggerBasket } = basketModuleSlice.actions;

export default basketModuleSlice.reducer;
