import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSettings = createAsyncThunk("common/getSettings", async (details, Thunk) => {
  try {
    let response = await axios.get(`get-setting/1`);
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});

export const getCareerList = createAsyncThunk("common/getPageData", async (details, Thunk) => {
  try {
    let response = await axios.post(`career-list`, details);
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});

export const applyForJob = createAsyncThunk("common/applyForJob", async (details, Thunk) => {
  try {
    let response = await axios.post(`add-career-form`, details);
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});

export const subscribeNewsletter = createAsyncThunk(
  "common/subscribeNewsletter",
  async (details, Thunk) => {
    try {
      let response = await axios.post(`add-career-newsletter`, details);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getLocations = createAsyncThunk("common/getLocations", async (details, Thunk) => {
  try {
    let response = await axios.post(`airport-location-list`, details);
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});

export const getLocationsList = createAsyncThunk(
  "common/getLocationsList",
  async (details, Thunk) => {
    try {
      let response = await axios.post(`airport-location-search`, details);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getLocationDetails = createAsyncThunk(
  "common/getLocationDetails",
  async (id, Thunk) => {
    try {
      let response = await axios.get(`get-airport-location/${id}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getDepartmentsList = createAsyncThunk(
  "common/getDepartmentsList",
  async (details, Thunk) => {
    try {
      let response = await axios.post(`department-list`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getDepartmentDetails = createAsyncThunk(
  "common/getDepartmentDetails",
  async (id, Thunk) => {
    try {
      let response = await axios.get(`get-department/${id}`);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getFaqs = createAsyncThunk("common/getFaqs", async (id, Thunk) => {
  try {
    let response = await axios.get(`get-faq/${id}`);
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});

export const getNewsList = createAsyncThunk("common/getNewsList", async (filters, Thunk) => {
  try {
    let response = await axios.post(`news-list`, filters);
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});

export const getNewsDetails = createAsyncThunk("common/getNewsDetails", async (id, Thunk) => {
  try {
    let response = await axios.get(`get-news/${id}`);
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});

export const addQuery = createAsyncThunk("common/addQuery", async (details, Thunk) => {
  try {
    let response = await axios.post(`add-contact-us`, details);
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});

export const getServiceList = createAsyncThunk("common/getServiceList", async (id, Thunk) => {
  try {
    let response = await axios.get(`service-list`);
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});

export const getServiceDetails = createAsyncThunk("common/getServiceDetails", async (id, Thunk) => {
  try {
    let response = await axios.get(`get-service/${id}`);
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});

export const requestQuote = createAsyncThunk("common/requestQuote", async (details, Thunk) => {
  try {
    let response = await axios.post(`add-quote`, details);
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});

export const uploadImage = createAsyncThunk("common/uploadImage", async (details, Thunk) => {
  try {
    let response = await axios.post(`utility/upload`, details, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});

export const uploadFile = createAsyncThunk("common/uploadFile", async (details, Thunk) => {
  try {
    let response = await axios.post(`utility/upload-file`, details, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});
