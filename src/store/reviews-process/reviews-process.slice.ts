import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { fetchReviewsAction } from '../api-actions';
import { ReviewsProcess } from '../../types/state';

const initialState: ReviewsProcess = {
  reviewsList: [],
  isReviewsListLoading: false,
};

export const reviewsProcess = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsListLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.isReviewsListLoading = false;
        state.reviewsList = action.payload;
      });
  }
});
