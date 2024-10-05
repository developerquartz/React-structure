import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPageData = createAsyncThunk("pages/getPageData", async (page, Thunk) => {
  try {
    let response = await axios.get(`get-page/${page}`);
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});
