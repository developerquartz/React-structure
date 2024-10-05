import { createSlice } from "@reduxjs/toolkit";
import { login, logoutUser, socialLogin } from "./thunk";

const initialState = {
  loggedinUser: {},
  rememberedUser: {},
};

const slice = createSlice({
  name: "auth",
  initialState: { ...initialState },
  reducers: {
    logout: (state, action) => {
      return initialState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(socialLogin.pending, (state, action) => {})
      .addCase(socialLogin.fulfilled, (state, action) => {
        state.loggedinUser = action.payload;
      })
      .addCase(socialLogin.rejected, (state, action) => {});
    builder
      .addCase(login.pending, (state, action) => {})
      .addCase(login.fulfilled, (state, action) => {
        state.loggedinUser = action.payload;
        state.rememberedUser = action.meta?.arg?.remember ? action.meta?.arg : {};
      })
      .addCase(login.rejected, (state, action) => {});
    builder
      .addCase(logoutUser.pending, (state, action) => {})
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loggedinUser = {};
      })
      .addCase(logoutUser.rejected, (state, action) => {});
  },
});

export default slice.reducer;
export const { logout } = slice.actions;
