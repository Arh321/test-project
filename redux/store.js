import { configureStore } from "@reduxjs/toolkit";
import basket from "./fetures/basket";

export const store = configureStore({
  reducer: {
    basket: basket,
  },
});
