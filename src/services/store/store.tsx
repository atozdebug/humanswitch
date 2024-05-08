import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "../slices/auth/signUp";
import loginSlice from "../slices/auth/login";

export const store = configureStore({
  reducer: { signUp: signUpSlice, login: loginSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
