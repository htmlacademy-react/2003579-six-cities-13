import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { fetchNearbyOffersListAction } from '../api-actions';
import { NearbyOffersProcess } from '../../types/state';

const initialState: NearbyOffersProcess = {
  nearbyOffersList: [],
  isNearbyOffersListLoading: false,
};

export const nearbyOffersProcess = createSlice({
  name: NameSpace.NearbyOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyOffersListAction.pending, (state) => {
        state.isNearbyOffersListLoading = true;
      })
      .addCase(fetchNearbyOffersListAction.fulfilled, (state, action) => {
        state.isNearbyOffersListLoading = false;
        state.nearbyOffersList = action.payload;
      });
  }
});
