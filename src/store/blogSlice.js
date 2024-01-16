import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { parseResponseErrors } from '../shared/helpers/parseErrors';
import { showNotification } from '../shared/helpers/showNotification';
import {
  addEducation,
  deleteEducation,
  editEducation,
  getEducation,
  getEducations,
} from 'domains/shared/services/educationService';

const initialState = {
  isEducationsLoading: false,
  isEducationLoading: false,
  educations: [],
  recommendations: [],
  recommendation: recommendationInitialValues,
  isRecommendationsLoading: false,
  isRecommendationLoading: false,
  education: { title: '', content: '', tags: [], language: '', url: '' },
  pageInfo: null,
};

export const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchEducations.pending, (state) => {
      state.isEducationsLoading = true;
    });
    builder.addCase(fetchEducations.fulfilled, (state, action) => {
      state.isEducationsLoading = false;

      if (Array.isArray(action.payload)) {
        state.educations = action.payload ? action.payload : [];
      } else {
        state.educations = action.payload.results ? action.payload.results : [];
      }
    });
    builder.addCase(fetchEducations.rejected, (state) => {
      state.isEducationsLoading = false;
    });

    builder.addCase(fetchEducation.pending, (state) => {
      state.isEducationLoading = true;
    });
    builder.addCase(fetchEducation.fulfilled, (state, action) => {
      state.isEducationLoading = false;
      state.education = action.payload;
    });
    builder.addCase(fetchEducation.rejected, (state) => {
      state.isEducationLoading = false;
    });
    builder.addCase(removeEducation.pending, (state) => {
      state.isEducationsLoading = true;
    });
    builder.addCase(removeEducation.fulfilled, (state, action) => {
      state.isEducationsLoading = false;
      state.educations = state.educations.filter((education) => education.id !== action.payload.id);
    });
    builder.addCase(removeEducation.rejected, (state) => {
      state.isEducationsLoading = false;
    });
    builder.addCase(updateEducation.fulfilled, (state, action) => {
      state.isEducationsLoading = false;
      const updatedEducations = state.educations.map((education) =>
        education.id === action.payload.id ? action.payload : education
      );

      state.educations = updatedEducations;
    });
    builder.addCase(newEducation.fulfilled, (state, action) => {
      const educations = state.educations;

      state.educations = [...educations, action.payload];
    });
  },
});

export const fetchBlogs = createAsyncThunk('fetchBlogs', async (values) => {
  try {
    const response = await getEducations(values);

    return response.data;
  } catch (error) {
    showNotification({ message: parseResponseErrors(error) });

    return Promise.reject();
  }
});

export const fetchEducation = createAsyncThunk('fetchBlog', async (id) => {
  try {
    const response = await getEducation(id);

    return response.data;
  } catch (error) {
    showNotification({ message: parseResponseErrors(error) });

    return Promise.reject();
  }
});
export const removeBlog = createAsyncThunk("removeBlog", async (id) => {
  try {
    const response = await deleteEducation(id);

    return response.data;
  } catch (error) {
    return Promise.reject(parseResponseErrors(error));
  }
});
export const updateEducation = createAsyncThunk(
  'updateBlog',
  async ({
    id,
    values,
   }) => {
    try {
      const response = await editEducation(id, values);

      return response.data;
    } catch (error) {
      return Promise.reject(parseResponseErrors(error));
    }
  }
);
export const newBlog = createAsyncThunk(
  "newBlog",
  async ({ values, image, thumbnail, tags }) => {
    try {
      const response = await addEducation({
        ...values,
        image,
        thumbnail,
        tags,
      });

      return response.data;
    } catch (error) {
      return Promise.reject(parseResponseErrors(error));
    }
  }
);

export const { reducer: educationReducer } = educationSlice;