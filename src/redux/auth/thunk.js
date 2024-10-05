import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (data, Thunk) => {
  try {
    let response = await axios.post("auth/login", data);
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});

export const register = createAsyncThunk(
  "auth/register",
  async (data, Thunk) => {
    try {
      let response = await axios.post("auth/signup", data);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const socialLogin = createAsyncThunk(
  "auth/socialLogin",
  async (data, Thunk) => {
    try {
      let response = await axios.post("auth/socialite", data);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (data, Thunk) => {
    try {
      let response = await axios.get("auth/logout", data);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);
