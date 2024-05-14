import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../http/baseUrl.tsx";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice.tsx";

export const changePassword: any = createAsyncThunk(
  "auth/changePassword",
  async (data, { dispatch }) => {
    try {
      console.log("Datttatatatatta", data);
      const response = await http.post(`/change-password`, data);
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

export interface ChangePassword {
  loading: boolean;
  data: [];
}

const initialState: ChangePassword = {
  loading: false,
  data: [],
};

export const changePasswordSlice = createSlice({
  name: "changePassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changePassword.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(changePassword.rejected, (state, _action) => {
        state.loading = false;
      });
  },
});

export default changePasswordSlice.reducer;
