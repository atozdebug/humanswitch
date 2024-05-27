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

export const getQuestions: any = createAsyncThunk(
  "auth/getQuestions",
  async (_, { dispatch }) => {
    try {
      const response = await http.get(`/getQuestions`);
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

export const updateQuestions: any = createAsyncThunk(
  "auth/updateQuestions",
  async (data: any, { dispatch }) => {
    try {
      const response = await http.put(`/updateQuestions/${data.id}`, data);
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

export const deleteQuestions: any = createAsyncThunk(
  "auth/deleteQuestions",
  async (id: any, { dispatch }) => {
    try {
      const response = await http.delete(`/deleteQuestions/${id}`);
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

export const filterQuestionsByName: any = createAsyncThunk(
  "auth/getQuestionsbyname",
  async (data: any, { dispatch }) => {
    try {
      const response = await http.get(`/getQuestionsbyname/${data.name}`);
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
  createData: [];
  getData: [];
  updateData: [];
  deleteData: [];
  filtredData: [];
}

const initialState: CreateQuestions = {
  loading: false,
  createData: [],
  getData: [],
  updateData: [],
  deleteData: [],
  filtredData: [],
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // agent registration
      .addCase(createQuestions.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(createQuestions.fulfilled, (state, action) => {
        state.createData = action.payload;
        state.loading = false;
      })
      .addCase(createQuestions.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(getQuestions.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.getData = action.payload;
        state.loading = false;
      })
      .addCase(getQuestions.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(updateQuestions.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(updateQuestions.fulfilled, (state, action) => {
        state.updateData = action.payload;
        state.loading = false;
      })
      .addCase(updateQuestions.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(deleteQuestions.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(deleteQuestions.fulfilled, (state, action) => {
        state.deleteData = action.payload;
        state.loading = false;
      })
      .addCase(deleteQuestions.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(filterQuestionsByName.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(filterQuestionsByName.fulfilled, (state, action) => {
        state.getData = action.payload;
        state.loading = false;
      })
      .addCase(filterQuestionsByName.rejected, (state, _action) => {
        state.loading = false;
      });
  },
});

export default dashboardSlice.reducer;
