import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../http/baseUrl.tsx";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice.tsx";

export const createQuestions: any = createAsyncThunk(
  "auth/createQuestions",
  async (data, { dispatch }) => {
    try {
      console.log("Datttatatatatta", data);
      const response = await http.post(`/createQuestions`, data);
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

export interface CreateQuestions {
  loading: boolean;
  data: [];
}

const initialState: CreateQuestions = {
  loading: false,
  data: [],
};

export const createQuestionsSlice = createSlice({
  name: "createQuestions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // agent registration
      .addCase(createQuestions.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(createQuestions.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(createQuestions.rejected, (state, _action) => {
        state.loading = false;
      });
  },
});

export default createQuestionsSlice.reducer;
