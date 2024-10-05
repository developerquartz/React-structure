import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (data, Thunk) => {
    try {
      let response = await axios.get("auth/me");
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (details, Thunk) => {
    try {
      let response = await axios.put("auth/me/update", details);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);
