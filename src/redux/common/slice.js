import { createSlice } from "@reduxjs/toolkit";
import {
  getCareerList,
  getDepartmentsList,
  getLocations,
  getLocationsList,
  getNewsList,
  getServiceList,
  getSettings,
} from "./thunk";

const initialState = {
  careerList: {},
  locations: {},
  locationsList: {},
  newsList: {},
  settings: {},
  departments: {},
  allServices: {},
};

const commonSlice = createSlice({
  name: "commonSlice",
  initialState: { ...initialState },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getServiceList.pending, (state, action) => {})
      .addCase(getServiceList.fulfilled, (state, action) => {
        state.allServices = action.payload;
      })
      .addCase(getServiceList.rejected, (state, action) => {});
    builder
      .addCase(getCareerList.pending, (state, action) => {})
      .addCase(getCareerList.fulfilled, (state, action) => {
        state.careerList = action.payload;
      })
      .addCase(getCareerList.rejected, (state, action) => {});
    builder
      .addCase(getLocations.pending, (state, action) => {})
      .addCase(getLocations.fulfilled, (state, action) => {
        state.locations = action.payload;
      })
      .addCase(getLocations.rejected, (state, action) => {});
    builder
      .addCase(getLocationsList.pending, (state, action) => {})
      .addCase(getLocationsList.fulfilled, (state, action) => {
        state.locationsList = action.payload;
      })
      .addCase(getLocationsList.rejected, (state, action) => {});
    builder
      .addCase(getNewsList.pending, (state, action) => {})
      .addCase(getNewsList.fulfilled, (state, action) => {
        state.newsList = action.payload;
      })
      .addCase(getNewsList.rejected, (state, action) => {});
    builder
      .addCase(getSettings.pending, (state, action) => {})
      .addCase(getSettings.fulfilled, (state, action) => {
        state.settings = action.payload;
      })
      .addCase(getSettings.rejected, (state, action) => {});
    builder
      .addCase(getDepartmentsList.pending, (state, action) => {})
      .addCase(getDepartmentsList.fulfilled, (state, action) => {
        state.departments = action.payload;
      })
      .addCase(getDepartmentsList.rejected, (state, action) => {});
  },
});

export default commonSlice.reducer;
