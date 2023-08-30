import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { fetchReviewsAction } from '../api-actions';
import { ReviewsProcess } from '../../types/state';
import { sendReviewAction } from '../api-actions';
import ReviewsList from '../../components/reviews-list/reviews-list';

const initialState: ReviewsProcess = {
  reviewsList: [],
  isReviewsListLoading: false,
  hasReviewsListFetchingError: false,
  isReviewSending: false,
  hasReviewSendingError: false,
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
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isReviewsListLoading = false;
        state.hasReviewsListFetchingError = true;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.isReviewSending = false;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.isReviewSending = false;
        state.hasReviewSendingError = true;

        if(action.payload) {
          state.reviewsList = [...state.reviewsList, action.payload];
        }
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.isReviewSending = false;
        state.hasReviewSendingError = true;
      });
  }
});
