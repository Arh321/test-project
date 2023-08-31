"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import totalStore from "../store";

const { store, persistor } = totalStore();
export function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
