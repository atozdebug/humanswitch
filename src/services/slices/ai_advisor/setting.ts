import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

import {
  startLoadingActivity,
  stopLoadingActivity,
} from '../activity/activitySlice.tsx';

import { deleteData, get, patch, postForm, post } from '../../../apis/index';
import type { AdvisorResponseType, ListResponse } from '../../../types';

export const createAdvisor: any = createAsyncThunk(
  'advisor/createAdvisor',
  async (data: FormData, { dispatch }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await post('/chatbots/', data);
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

export const getImage: any = createAsyncThunk(
  'advisor/getAdvisorImage',
  async (_, { dispatch }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await get('/chatbots/image', {
        responseType: 'blob', // To handle binary data (image)
      });
      if (response.status === 200) {
        // Convert Blob to a base64 string or Blob URL
        const imageBlob = response.data;
        const imageUrl = URL.createObjectURL(imageBlob);
        return imageUrl;
      }
      throw new Error('Something went wrong');
    } catch (error: any) {
      if (error.response) {
        return { error: error.response.text };
      }
      throw error;
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getAdvisor: any = createAsyncThunk(
  'advisor/getAdvisors',
  async (_, { dispatch }) => {
    // Note: Added `_` to indicate that no parameters are being used
    try {
      dispatch(startLoadingActivity());

      const response = await get<AdvisorResponseType>('/chatbots/');

      if (response.status === 200) {
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

export const updateAdvisorImage: any = createAsyncThunk(
  'advisor/updateAdvisorImage',
  async (data: FormData, { dispatch }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await postForm('/chatbots/image', data);
      if (response.status === 200) {
        dispatch(getImage());
        return response.data;
      }
      throw new error('Something went wrong');
    } catch (error: any) {
      throw error;
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);
export const deleteAdvisor: any = createAsyncThunk(
  'advisor/deleteAdvisor',
  async (id: string, { dispatch }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await deleteData(`/advisor/${id}`);

      if (response.status === 204) {
        dispatch(getAdvisors({ page: 1 })); // Corrected to ensure dispatching getAdvisors
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

export const trainAdvisor: any = createAsyncThunk(
  'advisor/trainAdvisor',
  async (id: string, { dispatch }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await post(`/advisor/${id}/train/`);
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

export interface CreateAdvisors {
  loading: boolean;
  createData: [];
  getData: AdvisorResponseType | undefined;
  updateData: [];
  deleteData: [];
  filtredData: [];
  imageData: string | null;
}

const initialState: CreateAdvisors = {
  loading: false,
  createData: [],
  getData: undefined,
  updateData: [],
  deleteData: [],
  filtredData: [],
  imageData: null,
};

export const advisorSlice = createSlice({
  name: 'advisor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getImage.fulfilled, (state, action: PayloadAction<string>) => {
        state.imageData = action.payload; // <-- Store the image URL
      })

      .addCase(getImage.rejected, (state, _action) => {
        state.imageData = null; // <-- Handle error by clearing the image data
      })

      // agent registration
      .addCase(createAdvisor.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(createAdvisor.fulfilled, (state, action) => {
        state.createData = action.payload;
        state.loading = false;
      })
      .addCase(createAdvisor.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(getAdvisor.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(
        getAdvisor.fulfilled,
        (state, action: PayloadAction<AdvisorResponseType>) => {
          state.getData = action.payload;
          state.loading = false;
        }
      )
      .addCase(getAdvisor.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(updateAdvisorImage.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(updateAdvisorImage.fulfilled, (state, action) => {
        state.updateData = action.payload;
        state.loading = false;
      })
      .addCase(updateAdvisorImage.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(deleteAdvisor.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(deleteAdvisor.fulfilled, (state, action) => {
        state.deleteData = action.payload;
        state.loading = false;
      })
      .addCase(deleteAdvisor.rejected, (state, _action) => {
        state.loading = false;
      });
    // .addCase(filterAdvisorsByName.pending, (state, _action) => {
    //   state.loading = true;
    // })
    // .addCase(filterAdvisorsByName.fulfilled, (state, action) => {
    //   state.getData = action.payload;
    //   state.loading = false;
    // })
    // .addCase(filterAdvisorsByName.rejected, (state, _action) => {
    //   state.loading = false;
    //});
  },
});

export default advisorSlice.reducer;
