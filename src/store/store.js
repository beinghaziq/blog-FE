import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'store/counterSlice';
import { blogReducer } from 'store/blogSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blogStore: blogReducer,
  },
});
