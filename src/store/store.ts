/** @format */

import { configureStore } from "@reduxjs/toolkit";
import faucetReducer from "./faucet";
import pongReducer from "./pong";

export const store = configureStore({
  reducer: {
    faucet: faucetReducer,
    pong: pongReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
