import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { fetchDetailedOfferAction } from '../api-actions';
import { CurrentOfferProcess} from '../../types/state';


const initialState: CurrentOfferProcess = {
  currentOffer: null,
  isCurrentOfferDataLoading: false,
};

export const offersProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDetailedOfferAction.pending, (state) => {
        state.isCurrentOfferDataLoading = true;
      })
      .addCase(fetchDetailedOfferAction.fulfilled, (state) => {
        state.isCurrentOfferDataLoading = false;
      });
  }
});
