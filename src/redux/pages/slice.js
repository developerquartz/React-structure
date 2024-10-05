import { createSlice } from "@reduxjs/toolkit";
import { getPageData } from "./thunk";

const initialState = {
  pageData: {},
};

const slice = createSlice({
  name: "pages",
  initialState: { ...initialState },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getPageData.pending, (state, action) => {})
      .addCase(getPageData.fulfilled, (state, action) => {
        state.pageData = action.payload;
      })
      .addCase(getPageData.rejected, (state, action) => {});
  },
});

export default slice.reducer;
