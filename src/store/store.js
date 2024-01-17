import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { blogReducer } from "./blogSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blogStore: blogReducer,
  },
});
