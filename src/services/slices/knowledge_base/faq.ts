import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  startLoadingActivity,
  stopLoadingActivity,
} from '../activity/activitySlice.tsx';

import { get, post, patch, deleteData } from '../../../apis/index';
import type { FaqResponseType, ListResponse } from '../../../types';

export const createFaq: any = createAsyncThunk(
  'faq/createFaq',
  async (data, { dispatch }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await post('/faqs/', data);
      if (response.status === 201) {
        return response.data;
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        return { error: 'Bad Request' };
      }
    } finally {
      dispatch(stopLoadingActivity());
      dispatch(getFaqs());
    }
  }
);

export const getFaqs: any = createAsyncThunk(
  'faq/getFaqs',
  async (params: { category?: string; page?: number }, { dispatch }) => {
    console.log('Called');
    const { category, page } = params;
    let url = `/faqs/`;
    console.log('Called 1');
    // Add query parameters if they are provided
    const queryParams = [];
    if (category) queryParams.push(`category=${category}`);
    if (page) queryParams.push(`page=${page}`);
    console.log('Called 2');
    if (queryParams.length > 0) {
      url += `?${queryParams.join('&')}`;
    }
    console.log('called 3');
    try {
      const response = await get(url);
      console.info('Response', response);
      if (response.status === 200) {
        dispatch(startLoadingActivity());

        return response.data;
      }
    } catch (error: any) {
      if (error.response) {
        console.error(error.response);
        return { error: 'Bad Request' };
      }
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const updateFaq: any = createAsyncThunk(
  'faq/updateFaq',
  async (data: { id: string; payload: any }, { dispatch }) => {
    try {
      const headers = {
        'Content-Type': 'application/json', // Include if you need authorization
      };
      dispatch(startLoadingActivity());
      const response = await patch(`/faqs/${data.id}`, data.payload, {
        headers,
      });
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

export const deleteFaq: any = createAsyncThunk(
  'faq/deleteFaq',
  async (id: string, { dispatch }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await deleteData(`/faqs/${id}`);
      if (response.status === 204) {
        dispatch(getFaqs({ page: 1 })); // Corrected to ensure dispatching getDocuments
        return { success: true, id };
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

export const trainFaq: any = createAsyncThunk(
  'faq/trainFaq',
  async (id: string, { dispatch }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await http.patch(`/faqs/${id}/train/`);
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

export interface CreateFaqs {
  loading: boolean;
  createData: [];
  getData: ListResponse<FaqResponseType[]> | undefined;
  updateData: [];
  deleteData: [];
  filtredData: [];
}

const initialState: CreateFaqs = {
  loading: false,
  createData: [],
  getData: undefined,
  updateData: [],
  deleteData: [],
  filtredData: [],
};

export const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createFaq.pending, (state) => {
        state.loading = true;
      })
      .addCase(createFaq.fulfilled, (state, action) => {
        state.createData = action.payload;
        state.loading = false;
      })
      .addCase(createFaq.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getFaqs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFaqs.fulfilled, (state, action) => {
        state.getData = action.payload;
        state.loading = false;
      })
      .addCase(getFaqs.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateFaq.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateFaq.fulfilled, (state, action) => {
        state.updateData = action.payload;
        state.loading = false;
      })
      .addCase(updateFaq.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteFaq.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteFaq.fulfilled, (state, action) => {
        state.deleteData = action.payload;
        state.loading = false;
      })
      .addCase(deleteFaq.rejected, (state) => {
        state.loading = false;
      })
      .addCase(trainFaq.pending, (state) => {
        state.loading = true;
      })
      .addCase(trainFaq.fulfilled, (state, action) => {
        state.updateData = action.payload;
        state.loading = false;
      })
      .addCase(trainFaq.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default faqSlice.reducer;
