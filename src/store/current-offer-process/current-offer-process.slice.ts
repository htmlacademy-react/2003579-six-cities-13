import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { changeOfferFavoriteStatusAction, fetchDetailedOfferAction } from '../api-actions';
import { CurrentOfferProcess} from '../../types/state';


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
        if(action.payload) {
          state.currentOffer = action.payload;
        }
      })
      .addCase(fetchDetailedOfferAction.rejected, (state) => {
        state.isCurrentOfferDataLoading = false;
        state.hasCurrentOfferLoadingError = true;
      })
      .addCase(changeOfferFavoriteStatusAction.fulfilled, (state, action) => {
        if (action.payload !== null) {
          if (state.currentOffer?.id === action.payload.id) {
            state.currentOffer.isFavorite = action.payload.isFavorite;
          }
        }
      });
  }
});

