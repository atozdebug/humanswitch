import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  startLoadingActivity,
  stopLoadingActivity,
} from '../activity/activitySlice.tsx';

import { get, post, patch, deleteData } from '../../../apis/index';
import type {
  ChatResponseType,
  ChatMessageType,
  ListResponse,
} from '../../../types';

export const getChats: any = createAsyncThunk(
  'chat/getChats',
  async (params: { page?: number }, { dispatch }) => {
    const { page } = params;
    let url = `/chats/`;
    // Add query parameters if they are provided
    const queryParams = [];

    if (page) {
      url += `?page=${page}`;
    }

    try {
      const response = await get(url);
      console.info('Response', response);
      if (response.status === 200) {
        dispatch(startLoadingActivity());

        return response.data;
      }
      throw new Error('Something went wrong');
    } catch (error: any) {
      throw error;
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const getChatMessages: any = createAsyncThunk(
  'chat/getMessages',
  async (data: { id: string; page?: number }, { dispatch }) => {
    console.debug('ℹ️ ~ file: chats.ts:45 ~ data:', data);
    try {
      dispatch(startLoadingActivity());
      const response = await get(`/chats/${data.id}`);
      if (response.status === 200) {
        console.debug('ℹ️ ~ file: chats.ts:50 ~ response:', response.data);
        return response.data;
      }
      throw new Error('Something went wrong');
    } catch (error: any) {
      console.debug('ℹ️ ~ file: chats.ts:54 ~ error:', error);
      throw error;
    } finally {
      dispatch(stopLoadingActivity());
    }
  }
);

export const deleteChat: any = createAsyncThunk(
  'chat/deleteChat',
  async (id: string, { dispatch }) => {
    try {
      dispatch(startLoadingActivity());
      const response = await deleteData(`/chats/${id}`);
      if (response.status === 204) {
        dispatch(getChats({ page: 1 })); // Corrected to ensure dispatching getDocuments
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

export interface CreateChats {
  loading: boolean;

  getChatData: ListResponse<ChatResponseType[]> | undefined;
  getChatHistoryData: ListResponse<ChatMessageType[]> | undefined;

  deleteData: [];
}

const initialState: CreateChats = {
  loading: false,
  getChatData: undefined,
  getChatHistoryData: undefined,
  deleteData: [],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getChats.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChats.fulfilled, (state, action) => {
        state.getChatData = action.payload;
        state.loading = false;
      })
      .addCase(getChats.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getChatMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChatMessages.fulfilled, (state, action) => {
        console.debug(
          'ℹ️ ~ file: chats.ts:119 ~ .addCase ~ action:',
          action.payload
        );
        state.getChatHistoryData = action.payload;
        state.loading = false;
      })
      .addCase(getChatMessages.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteChat.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteChat.fulfilled, (state, action) => {
        state.deleteData = action.payload;
        state.loading = false;
      })
      .addCase(deleteChat.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default chatSlice.reducer;
