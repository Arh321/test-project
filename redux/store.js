import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import basket from "./fetures/basket";
import basketModule from "./fetures/basketModule";
import deleteBasketModule from "./fetures/deleteBasketModule";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  basket,
  basketModule,
  deleteBasketModule,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [logger, thunk];

const totalStore = () => {
  let store = configureStore({
    middleware: middlewares,
    reducer: persistedReducer,
  });
  let persistor = persistStore(store);
  return { store, persistor };
};

export default totalStore;
