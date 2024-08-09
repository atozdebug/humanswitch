import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../../http/baseUrl.tsx';
import {
  startLoadingActivity,
  stopLoadingActivity,
} from '../activity/activitySlice.tsx';

import { deleteData, get, patch, post } from '../../../apis/index';
import type { ListResponse, UrlResponseType } from '../../../types';
export const createUrl: any = createAsyncThunk(
  'url/createUrl',
  async (data, { dispatch }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await post('/urls/', data);
      if (response.status === 201) {
        dispatch(getUrls({ page: 1 }));
        return response.data;
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error: any) {
      throw error;
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getUrls: any = createAsyncThunk(
  'url/getUrls',
  async (params: { category?: string; page?: number }, { dispatch }) => {
    const { category, page } = params;
    let url = `/urls/`;

    // Add query parameters if they are provided
    const queryParams = [];
    if (category) queryParams.push(`category=${category}`);
    if (page) queryParams.push(`page=${page}`);

    if (queryParams.length > 0) {
      url += `?${queryParams.join('&')}`;
    }

    try {
      const response = await get(url);
      if (response.status === 200) {
        dispatch(startLoadingActivity());
        return response.data;
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error: any) {
      throw error;
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const updateUrl = createAsyncThunk(
  'url/updateUrl',
  async (data: { id: string; payload: any }, { dispatch }) => {
    try {
      const headers = {
        'Content-Type': 'application/json', // Include if you need authorization
      };
      dispatch(startLoadingActivity());
      const response = await patch(`/urls/${data.id}`, data.payload, {
        headers,
      });
      if (response.status === 200) {
        dispatch(getUrls({ page: 1 }));
        return response.data;
      }
    } catch (error: any) {
      throw error;
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const deleteUrl: any = createAsyncThunk(
  'url/deleteUrl',
  async (id: string, { dispatch }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await deleteData(`/urls/${id}`);
      if (response.status === 204) {
        dispatch(getUrls({ page: 1 }));
        return { success: true, id };
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error: any) {
      throw error;
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const trainUrl: any = createAsyncThunk(
  'url/trainUrl',
  async (id: string, { dispatch }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.patch(`/urls/${id}/train/`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        return { error: 'Bad Request' };
      }
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export interface CreateUrls {
  loading: boolean;
  createData: [];
  getData: ListResponse<UrlResponseType[]> | undefined;
  updateData: [];
  deleteData: [];
  filtredData: [];
}

const initialState: CreateUrls = {
  loading: false,
  createData: [],
  getData: undefined,
  updateData: [],
  deleteData: [],
  filtredData: [],
};

export const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // agent registration
      .addCase(createUrl.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(createUrl.fulfilled, (state, action) => {
        state.createData = action.payload;
        state.loading = false;
      })
      .addCase(createUrl.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(getUrls.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(getUrls.fulfilled, (state, action) => {
        state.getData = action.payload;
        state.loading = false;
      })
      .addCase(getUrls.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(updateUrl.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUrl.fulfilled, (state, action) => {
        state.updateData = action.payload;
        state.loading = false;
      })
      .addCase(updateUrl.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteUrl.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUrl.fulfilled, (state, action) => {
        state.deleteData = action.payload;
        state.loading = false;
      })
      .addCase(deleteUrl.rejected, (state) => {
        state.loading = false;
      })
      .addCase(trainUrl.pending, (state) => {
        state.loading = true;
      })
      .addCase(trainUrl.fulfilled, (state, action) => {
        state.updateData = action.payload;
        state.loading = false;
      })
      .addCase(trainUrl.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default urlSlice.reducer;
