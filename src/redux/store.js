import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import appReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = (state, action) => {
  const split = action.type?.split("/");
  const stateName = split?.[0];
  const typeName = split[split?.length - 1];
  const types = ["pending", "fulfilled", "rejected"];
  var newState = null;

  if (
    split?.length > 2 &&
    types?.includes(typeName) &&
    !types.includes(stateName)
  ) {
    newState = { ...state };
    if (typeName === "pending") {
      newState[stateName] = {
        ...newState[stateName],
        showLoader: action.meta.arg?.showLoader === false ? false : true,
      };
    } else if (typeName === "fulfilled") {
      newState[stateName] = {
        ...newState[stateName],
        showLoader: false,
      };
    } else if (typeName === "rejected") {
      newState[stateName] = {
        ...newState[stateName],
        showLoader: false,
      };
    }
    return appReducer(newState, action);
  } else if (action.type === "auth/logout") {
    return appReducer(undefined, action);
  } else {
    return appReducer(state, action);
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([]),
});

export const persistor = persistStore(store);
export default store;
