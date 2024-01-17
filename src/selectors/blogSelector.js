import { createSelector } from "reselect";

const counterReducer = (state) => state.blogStore;

export const blogs = createSelector(counterReducer, ({ blogs }) => blogs);
