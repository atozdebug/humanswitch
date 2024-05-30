import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../http/baseUrl.tsx";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice.tsx";

export const createRoles: any = createAsyncThunk(
  "auth/createRoles",
  async (data, { dispatch }) => {
    try {
      const response = await http.post(`/createRoles`, data);
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

export const getRoles: any = createAsyncThunk(
  "auth/getRoles",
  async (_, { dispatch }) => {
    try {
      const response = await http.get(`/getRoles`);
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

export const updateRoles: any = createAsyncThunk(
  "auth/updateRoles",
  async (data: any, { dispatch }) => {
    try {
      const response = await http.put(`/updateRoles/${data.id}`, data);
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

export const deleteRoles: any = createAsyncThunk(
  "auth/deleteRoles",
  async (id: any, { dispatch }) => {
    try {
      const response = await http.delete(`/deleteRoles/${id}`);
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

export interface Roles {
  loading: boolean;
  createData: [];
  getData: [];
  updateData: [];
  deleteData: [];
}

const initialState: Roles = {
  loading: false,
  createData: [],
  getData: [],
  updateData: [],
  deleteData: [],
};

export const roleSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // agent registration
      .addCase(createRoles.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(createRoles.fulfilled, (state, action) => {
        state.createData = action.payload;
        state.loading = false;
      })
      .addCase(createRoles.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(getRoles.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(getRoles.fulfilled, (state, action) => {
        state.getData = action.payload?.user_roles;
        state.loading = false;
      })
      .addCase(getRoles.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(updateRoles.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(updateRoles.fulfilled, (state, action) => {
        state.updateData = action.payload;
        state.loading = false;
      })
      .addCase(updateRoles.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(deleteRoles.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(deleteRoles.fulfilled, (state, action) => {
        state.deleteData = action.payload;
        state.loading = false;
      })
      .addCase(deleteRoles.rejected, (state, _action) => {
        state.loading = false;
      });
  },
});

export default roleSlice.reducer;
