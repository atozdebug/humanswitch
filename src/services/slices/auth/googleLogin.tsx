import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice.tsx";
import axios from "axios";

export const googleLogin: any = createAsyncThunk(
  "auth/googleLogin",
  async (data: any, { dispatch }) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${data.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${data.access_token}`,
            Accept: "application/json",
          },
        }
      );
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

export interface GoogleLogin {
  loading: boolean;
  data: [];
}

const initialState: GoogleLogin = {
  loading: false,
  data: [],
};

export const googleLoginSlice = createSlice({
  name: "googleLogin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // agent registration
      .addCase(googleLogin.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(googleLogin.rejected, (state, _action) => {
        state.loading = false;
      });
  },
});

export default googleLoginSlice.reducer;
