import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { parseResponseErrors } from 'shared/helpers/parseErrors';
import { showNotification } from 'shared/helpers/showNotification';
import {
  createBlog,
  deleteBlog,
  updateBlog,
  getBlog,
  getBlogs,
} from 'services/blogService';

const initialState = {
  isBlogsLoading: false,
  isBlogLoading: false,
  blogs: [],
  blog: { title: '', body: '' },
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllBlogs.pending, (state) => {
      state.isBlogsLoading = true;
    });
    builder.addCase(fetchAllBlogs.fulfilled, (state, action) => {
      state.isBlogsLoading = false;
      state.blogs = action.payload ? action.payload : [];
    });
    builder.addCase(fetchAllBlogs.rejected, (state) => {
      state.isBlogsLoading = false;
    });

    builder.addCase(fetchBlogById.pending, (state) => {
      state.isBlogLoading = true;
    });
    builder.addCase(fetchBlogById.fulfilled, (state, action) => {
      state.isBlogLoading = false;
      state.blog = action.payload;
    });
    builder.addCase(fetchBlogById.rejected, (state) => {
      state.isBlogLoading = false;
    });
    builder.addCase(removeBlog.pending, (state) => {
      state.isBlogsLoading = true;
    });
    builder.addCase(removeBlog.fulfilled, (state, action) => {
      state.isBlogsLoading = false;
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload.id);
    });
    builder.addCase(removeBlog.rejected, (state) => {
      state.isBlogsLoading = false;
    });
    builder.addCase(editBlog.fulfilled, (state, action) => {
      state.isBlogsLoading = false;
      const updatedBlogs = state.blogs.map((blog) =>
        blog.id === action.payload.id ? action.payload : blog
      );

      state.blogs = updatedBlogs;
    });
    builder.addCase(newBlog.fulfilled, (state, action) => {
      const blogs = state.blogs;

      state.blogs = [...blogs, action.payload];
    });
  },
});

export const fetchAllBlogs = createAsyncThunk('fetchAllBlogs', async () => {
  try {
    const response = await getBlogs();
    return response.data;
  } catch (error) {
    showNotification({ message: parseResponseErrors(error) });

    return Promise.reject();
  }
});

export const fetchBlogById = createAsyncThunk('fetchBlogById', async (id) => {
  try {
    const response = await getBlog(id);
    
    return response.data;
  } catch (error) {
    showNotification({ message: parseResponseErrors(error) });

    return Promise.reject();
  }
});
export const removeBlog = createAsyncThunk('removeBlog', async (id) => {
  try {
    const response = await deleteBlog(id);

    return response.data;
  } catch (error) {
    return Promise.reject(parseResponseErrors(error));
  }
});
export const editBlog = createAsyncThunk('editBlog', async ({ id, values }) => {
  try {
    const response = await updateBlog(id, values);

    return response.data;
  } catch (error) {
    return Promise.reject(parseResponseErrors(error));
  }
});
export const newBlog = createAsyncThunk('newBlog',async ({ values }) => {
    try {
      const response = await createBlog({
        values,
      });

      return response.data;
    } catch (error) {
      return Promise.reject(parseResponseErrors(error));
    }
  }
);

export const { reducer: blogReducer } = blogSlice;
