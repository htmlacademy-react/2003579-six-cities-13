import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { fetchReviewsAction } from '../api-actions';
import { ReviewsProcess } from '../../types/state';

const initialState: ReviewsProcess = {
  reviewsList: [],
  isReviewsListLoading: false,
};

export const favoritesProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsListLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state) => {
        state.isReviewsListLoading = false;
      });
  }
});
