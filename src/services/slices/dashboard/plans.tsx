import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../http/baseUrl.tsx";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice.tsx";

export const createPlans: any = createAsyncThunk(
  "auth/createPlans",
  async (data, { dispatch }) => {
    try {
      const response = await http.post(`/createPlans`, data);
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

export const getPlans: any = createAsyncThunk(
  "auth/getPlans",
  async (_, { dispatch }) => {
    try {
      const response = await http.get(`/getPlans`);
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

export const updatePlans: any = createAsyncThunk(
  "auth/updatePlans",
  async (data: any, { dispatch }) => {
    try {
      const response = await http.put(`/updatePlans/${data.id}`, data);
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

export const deletePlans: any = createAsyncThunk(
  "auth/deletePlans",
  async (id: any, { dispatch }) => {
    try {
      const response = await http.delete(`/deletePlans/${id}`);
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

export interface Plans {
  loading: boolean;
  createData: [];
  getData: [];
  updateData: [];
  deleteData: [];
}

const initialState: Plans = {
  loading: false,
  createData: [],
  getData: [],
  updateData: [],
  deleteData: [],
};

export const planSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // agent registration
      .addCase(createPlans.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(createPlans.fulfilled, (state, action) => {
        state.createData = action.payload;
        state.loading = false;
      })
      .addCase(createPlans.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(getPlans.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(getPlans.fulfilled, (state, action) => {
        state.getData = action.payload?.user_plans;
        state.loading = false;
      })
      .addCase(getPlans.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(updatePlans.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(updatePlans.fulfilled, (state, action) => {
        state.updateData = action.payload;
        state.loading = false;
      })
      .addCase(updatePlans.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(deletePlans.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(deletePlans.fulfilled, (state, action) => {
        state.deleteData = action.payload;
        state.loading = false;
      })
      .addCase(deletePlans.rejected, (state, _action) => {
        state.loading = false;
      });
  },
});

export default planSlice.reducer;
