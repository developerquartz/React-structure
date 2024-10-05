import { combineReducers } from "@reduxjs/toolkit";
//reducers
import authReducer from "./auth/slice";
import profileReducer from "./profile/slice";
import pageReducer from "./pages/slice";
import commonSlice from "./common/slice";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  pages: pageReducer,
  common: commonSlice,
});

export default rootReducer;
