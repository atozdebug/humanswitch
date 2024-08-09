import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

import {
  startLoadingActivity,
  stopLoadingActivity,
} from '../activity/activitySlice.tsx';

import { deleteData, get, patch, postForm } from '../../../apis/index';
import type { DocumentResponseType, ListResponse } from '../../../types';

export const createDocument: any = createAsyncThunk(
  'document/createDocument',
  async (data: FormData, { dispatch }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await postForm('/documents/', data);
      if (response.status === 201) {
        return response.data;
      }
    } catch (error: any) {
      if (error.response) {
        return { error: error.response.text };
      }
      throw error; // Rethrow error for further error handling if needed
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getDocuments: any = createAsyncThunk(
  'document/getDocuments',
  async (params: { category?: string; page?: number }, { dispatch }) => {
    const { category, page } = params;
    let url = `/documents/`;

    // Add query parameters if they are provided
    const queryParams = [];
    if (category) queryParams.push(`category=${category}`);
    if (page) queryParams.push(`page=${page}`);

    if (queryParams.length > 0) {
      url += `?${queryParams.join('&')}`;
    }

    try {
      const response = await get<ListResponse<DocumentResponseType[]>>(url);
      if (response.status === 200) {
        dispatch(startLoadingActivity());
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

export const updateDocument: any = createAsyncThunk(
  'document/updateDocument',
  async (data: { id: string; payload: any }, { dispatch }) => {
    console.debug('ℹ️ ~ file: document.ts:69 ~ data:', data);
    try {
      const headers = {
        'Content-Type': 'application/json', // Include if you need authorization
      };
      dispatch(startLoadingActivity());
      const response = await patch(`/documents/${data.id}`, data.payload, {
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
export const deleteDocument: any = createAsyncThunk(
  'document/deleteDocument',
  async (id: string, { dispatch }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await deleteData(`/documents/${id}`);

      if (response.status === 204) {
        dispatch(getDocuments({ page: 1 })); // Corrected to ensure dispatching getDocuments
        return { success: true, id };
      }

      throw new Error('Something went wrong');
    } catch (error: any) {
      throw error;
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const trainDocument: any = createAsyncThunk(
  'document/trainDocument',
  async (id: string, { dispatch }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await post(`/documents/${id}/train/`);
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

export interface CreateDocuments {
  loading: boolean;
  createData: [];
  getData: ListResponse<DocumentResponseType[]> | undefined;
  updateData: [];
  deleteData: [];
  filtredData: [];
}

const initialState: CreateDocuments = {
  loading: false,
  createData: [],
  getData: undefined,
  updateData: [],
  deleteData: [],
  filtredData: [],
};

export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // agent registration
      .addCase(createDocument.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(createDocument.fulfilled, (state, action) => {
        state.createData = action.payload;
        state.loading = false;
      })
      .addCase(createDocument.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(getDocuments.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(
        getDocuments.fulfilled,
        (
          state,
          action: PayloadAction<ListResponse<DocumentResponseType[]>>
        ) => {
          state.getData = action.payload;
          state.loading = false;
        }
      )
      .addCase(getDocuments.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(updateDocument.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(updateDocument.fulfilled, (state, action) => {
        state.updateData = action.payload;
        state.loading = false;
      })
      .addCase(updateDocument.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(deleteDocument.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(deleteDocument.fulfilled, (state, action) => {
        state.deleteData = action.payload;
        state.loading = false;
      })
      .addCase(deleteDocument.rejected, (state, _action) => {
        state.loading = false;
      });
    // .addCase(filterDocumentsByName.pending, (state, _action) => {
    //   state.loading = true;
    // })
    // .addCase(filterDocumentsByName.fulfilled, (state, action) => {
    //   state.getData = action.payload;
    //   state.loading = false;
    // })
    // .addCase(filterDocumentsByName.rejected, (state, _action) => {
    //   state.loading = false;
    //});
  },
});

export default documentSlice.reducer;
