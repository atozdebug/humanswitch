import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../http/baseUrl.tsx";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice.tsx";

export const deleteUser: any = createAsyncThunk(
  "auth/deleteUser",
  async (data: any, { dispatch }) => {
    try {
      const response = await http.post(`/users/deleteAccount`, data);
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

export interface DeleteUser {
  loading: boolean;
  data: null;
}

const initialState: DeleteUser = {
  loading: false,
  data: null,
};

export const deleteUserSlice = createSlice({
  name: "deleteUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteUser.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(deleteUser.rejected, (state, _action) => {
        state.loading = false;
      });
  },
});

export default deleteUserSlice.reducer;
