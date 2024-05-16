import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../http/baseUrl.tsx";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice.tsx";

export const getUser: any = createAsyncThunk(
  "auth/getUser",
  async (data, { dispatch }) => {
    try {
      console.log("Datttatatatatta", data);
      const response = await http.get(`/users/${data}`);
      if (response.status === 200) {
        dispatch(startLoadingActivity());

        return response.data;
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        return { error: "Bad Request" };
      }
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export interface GetUser {
  loading: boolean;
  data: [];
}

const initialState: GetUser = {
  loading: false,
  data: [],
};

export const getUserSlice = createSlice({
  name: "getUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getUser.rejected, (state, _action) => {
        state.loading = false;
      });
  },
});

export default getUserSlice.reducer;
