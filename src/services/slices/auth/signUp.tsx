import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../http/baseUrl.tsx";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice.tsx";

export const userSignUp: any = createAsyncThunk(
  "auth/userSignUp",
  async (data, { dispatch }) => {
    try {
      console.log("Datttatatatatta", data);
      const response = await http.post(`/signup`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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

export interface SignUp {
  loading: boolean;
  data: [];
}

const initialState: SignUp = {
  loading: false,
  data: [],
};

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // agent registration
      .addCase(userSignUp.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(userSignUp.rejected, (state, _action) => {
        state.loading = false;
      });
  },
});

export default signUpSlice.reducer;
