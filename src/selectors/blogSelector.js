import { createSelector } from 'reselect';

const blogReducer = (state) => state.blogStore;

export const blogs = createSelector(blogReducer, ({ blogs }) => blogs);
