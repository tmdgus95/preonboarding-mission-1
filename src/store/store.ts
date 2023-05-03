import { configureStore } from '@reduxjs/toolkit';
import keywordSlice from './slice/keywordSlice';
import recommendSlice from './slice/recommendSlice';

export const store = configureStore({
  reducer: { keyword: keywordSlice, recommend: recommendSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
