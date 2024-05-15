import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "../slices/auth/signUp";
import loginSlice from "../slices/auth/login";
import dashboardSlice from "../slices/dashboard/dashboard";
import changePasswordSlice from "../slices/dashboard/changePassword";
import updateProfileSlice from "../slices/dashboard/updateProfile";
import activitySlice from "../slices/activity/activitySlice";

export const store = configureStore({
  reducer: {
    signUp: signUpSlice,
    login: loginSlice,
    dashboard: dashboardSlice,
    changePassword: changePasswordSlice,
    updateProfile: updateProfileSlice,
    activity: activitySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
