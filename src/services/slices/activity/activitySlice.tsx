import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const startLoadingActivity: any = createAsyncThunk(
  "activity/startLoadingActivity",
  async () => {}
);

export const stopLoadingActivity: any = createAsyncThunk(
  "activity/stopLoadingActivity",
  async () => {}
);

export const collapsedSideBar: any = createAsyncThunk(
  "activity/collapsedSideBar",
  async (data) => {
    return data;
  }
);

export const selectTheme: any = createAsyncThunk(
  "activity/selectTheme",
  async (data) => {
    return data;
  }
);

export const activitySlice = createSlice({
  name: "activity",
  initialState: {
    loading: false,
    collapsedSidebar: false,
    isDark: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // agent registration
      .addCase(startLoadingActivity.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(startLoadingActivity.fulfilled, (state, _action) => {
        state.loading = true;
      })
      .addCase(startLoadingActivity.rejected, (state, _action) => {
        state.loading = false;
      })

      .addCase(stopLoadingActivity.pending, (state, _action) => {
        state.loading = false;
      })
      .addCase(stopLoadingActivity.fulfilled, (state, _action) => {
        state.loading = false;
      })
      .addCase(stopLoadingActivity.rejected, (state, _action) => {
        state.loading = false;
      })

      .addCase(collapsedSideBar.pending, (state, _action) => {
        state.loading = false;
      })
      .addCase(collapsedSideBar.fulfilled, (state, _action) => {
        state.loading = false;
        state.collapsedSidebar = !state.collapsedSidebar;
      })
      .addCase(collapsedSideBar.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(selectTheme.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(selectTheme.fulfilled, (state, action) => {
        state.isDark = action.payload;
        state.loading = false;
      })
      .addCase(selectTheme.rejected, (state, _action) => {
        state.loading = false;
      });
  },
});

export default activitySlice.reducer;
