import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  amount: 0,
  total: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBaket: (state, { payload }) => {
      const check = state.basket.find((item) => item.id == payload.id);
      if (!check) {
        state.basket = [...state.basket, payload];
      }
    },
    remove: (state, payload) => {
      state.basket = state.basket.filter((item) => item.id === payload);
    },
    increase: (state, { payload }) => {
      const cartItem = state.basket.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount + 1;
    },
    remoeFromBasket: (state, { payload }) => {
      const cartItem = state.basket.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount - 1;
    },
    clculateTotal: (state) => {
      let sum = 0;
      let amount = 0;
      state.basket.forEach((item) => {
        amount += item.amount;
        sum += item.amount * item.price;
      });
      state.total = sum;
      state.amount = amount;
    },
  },
});

export const { addToBaket, clculateTotal, remoeFromBasket, increase, remove } =
  basketSlice.actions;

export default basketSlice.reducer;
