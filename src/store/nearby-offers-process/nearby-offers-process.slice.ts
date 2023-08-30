import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { fetchNearbyOffersListAction } from '../api-actions';
import { NearbyOffersProcess } from '../../types/state';

const initialState: NearbyOffersProcess = {
  nearbyOffersList: [],
  hasNearbyOffersFetchingError: false,
};

export const nearbyOffersProcess = createSlice({
  name: NameSpace.NearbyOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyOffersListAction.pending, (state) => {
        state.hasNearbyOffersFetchingError = false;
      })
      .addCase(fetchNearbyOffersListAction.fulfilled, (state, action) => {
        state.hasNearbyOffersFetchingError = false;
        state.nearbyOffersList = action.payload;
      })
      .addCase(fetchNearbyOffersListAction.rejected, (state) => {
        state.hasNearbyOffersFetchingError = true;
      });
  }
});
