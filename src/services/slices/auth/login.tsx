import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../http/baseUrl.tsx";
import { stopLoadingActivity } from "../activity/activitySlice.tsx";

export const userLogin: any = createAsyncThunk(
  "auth/login",
  async (data, { dispatch }) => {
    try {
      const response = await http.post(`/login`, data);
      if (response.status === 200) {
        if (response.data.access_token && response.data.user.id) {
          localStorage.setItem("token", response.data.access_token);
          localStorage.setItem("user", response.data.user.id);
        }
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

export interface Login {
  loading: boolean;
  data: null;
}

const initialState: Login = {
  loading: false,
  data: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // agent registration
      .addCase(userLogin.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(userLogin.rejected, (state, _action) => {
        state.loading = false;
      });
  },
});

export default loginSlice.reducer;
