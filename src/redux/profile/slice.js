import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "./thunk";

const initialState = {
  userProfile: {},
};

const slice = createSlice({
  name: "profile",
  initialState: { ...initialState },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state, action) => {})
      .addCase(getProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {});
  },
});

export default slice.reducer;
