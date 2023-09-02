import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

const historySearchSlice = createSlice({
  name: "historySearchSlice",
  initialState,
  reducers: {
    addHistory: (state, { payload }) => {
      const check = state.history.find((item) => item.item === payload.item);
      if (!check) {
        state.history = [...state.history, payload];
      }
    },
    deleteHistory: (state, { payload }) => {
      state.history = state.history.filter((item) => item.id !== payload);
    },
  },
});

export const { addHistory, deleteHistory } = historySearchSlice.actions;

export default historySearchSlice.reducer;
