import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { changeDetailedOfferFavoriteStatusAction, fetchDetailedOfferAction } from '../api-actions';
import { CurrentOfferProcess } from '../../types/state';


const initialState: CurrentOfferProcess = {
  currentOffer: null,
  isCurrentOfferDataLoading: false,
  hasCurrentOfferLoadingError: false,
};

export const currentOfferProcess = createSlice({
  name: NameSpace.CurrentOffer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDetailedOfferAction.pending, (state) => {
        state.isCurrentOfferDataLoading = true;
        state.hasCurrentOfferLoadingError = false;
      })
      .addCase(fetchDetailedOfferAction.fulfilled, (state, action) => {
        state.isCurrentOfferDataLoading = false;
        if (action.payload) {
          state.currentOffer = action.payload;
        }
      })
      .addCase(fetchDetailedOfferAction.rejected, (state) => {
        state.isCurrentOfferDataLoading = false;
        state.hasCurrentOfferLoadingError = true;
      })
      .addCase(changeDetailedOfferFavoriteStatusAction.fulfilled, (state, action) => {
        if (state.currentOffer !== null) {
          state.currentOffer = action.payload.chosenOffer;
        }
      }
      );
  }
});
