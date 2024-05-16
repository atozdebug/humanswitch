import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../http/baseUrl.tsx";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice.tsx";

export const sendResetMail: any = createAsyncThunk(
  "auth/sendResetMail",
  async (data, { dispatch }) => {
    try {
      console.log("Datttatatatatta", data);
      const response = await http.get(`/forgot-password`);
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

export const resetPassword: any = createAsyncThunk(
  "auth/resetPassword",
  async (data, { dispatch }) => {
    try {
      console.log("Datttatatatatta", data);
      const response = await http.get(`/reset-password`);
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

export interface ForgetPassword {
  loading: boolean;
  data: [];
}

const initialState: ForgetPassword = {
  loading: false,
  data: [],
};

export const forgetPasswordSlice = createSlice({
  name: "forgetPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendResetMail.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(sendResetMail.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(sendResetMail.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(resetPassword.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, _action) => {
        state.loading = false;
      });
  },
});

export default forgetPasswordSlice.reducer;
