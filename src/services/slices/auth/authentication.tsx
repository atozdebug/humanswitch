import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../http/baseUrl.tsx";
import {
  startLoadingActivity,
  stopLoadingActivity,
} from "../activity/activitySlice.tsx";

export const sendEmailVerification: any = createAsyncThunk(
  "auth/sendEmailVerification",

  async (data, { dispatch }) => {
    try {
      console.log("Datttatatatatta", data);
      const response = await http.post(`/send-code`, data);
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

export const verifyEmailOtp: any = createAsyncThunk(
  "auth/verifyEmailOtp",
  async (data, { dispatch }) => {
    try {
      console.log("Datttatatatatta", data);
      const response = await http.post(`/verify-otp`, data);
      if (response.status === 200) {
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

export const verifyEmail: any = createAsyncThunk(
  "auth/verifyEmail",
  async (data, { dispatch }) => {
    try {
      console.log("Datttatatatatta", data);
      const response = await http.post(`/login_2fa`, data);
      if (response.status === 200) {
        if (response.data.access_token && response.data.user.id) {
          localStorage.setItem("token", response.data.access_token);
          localStorage.setItem("user", response.data.user.id);
        }
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

export const verifyQROtp: any = createAsyncThunk(
  "auth/verifyQROtp",
  async (data, { dispatch }) => {
    try {
      console.log("Datttatatatatta", data);
      const response = await http.post(`/qr_verification`, data);
      if (response.status === 200) {
        if (response.data.access_token && response.data.user.id) {
          localStorage.setItem("token", response.data.access_token);
          localStorage.setItem("user", response.data.user.id);
        }
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

export const verifyQROtp2FA: any = createAsyncThunk(
  "auth/verifyQROtp2FA",
  async (data, { dispatch }) => {
    try {
      console.log("Datttatatatatta", data);
      const response = await http.post(`/qr_verification2fa`, data);
      if (response.status === 200) {
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

export const generateSecret: any = createAsyncThunk(
  "auth/generateSecret",
  async (data, { dispatch }) => {
    try {
      console.log("Datttatatatatta", data);
      const response = await http.post(`/generate-secret`, data);
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

export const sendQRVerification: any = createAsyncThunk(
  "auth/sendQRVerification",
  async (data: any, { dispatch }) => {
    try {
      console.log("Datttatatatatta", data);
      const response = await http.get(`/get-qr-code?email=${data.email}`);
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

export interface Authentication {
  loading: boolean;
  data: [];
}

const initialState: Authentication = {
  loading: false,
  data: [],
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendEmailVerification.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(sendEmailVerification.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(sendEmailVerification.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(sendQRVerification.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(sendQRVerification.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(sendQRVerification.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(verifyEmailOtp.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(verifyEmailOtp.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(verifyEmailOtp.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(verifyEmail.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(verifyEmail.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(generateSecret.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(generateSecret.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(generateSecret.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(verifyQROtp.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(verifyQROtp.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(verifyQROtp.rejected, (state, _action) => {
        state.loading = false;
      })
      .addCase(verifyQROtp2FA.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(verifyQROtp2FA.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(verifyQROtp2FA.rejected, (state, _action) => {
        state.loading = false;
      });
  },
});

export default authenticationSlice.reducer;
