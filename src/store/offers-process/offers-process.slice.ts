import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {NameSpace, SortingMode} from '../../const';
import { fetchOffersAction } from '../api-actions';
import { OffersProcess } from '../../types/state';
import { Cities } from '../../const';

const STARTING_CITY : Cities = Cities.Paris;

const initialState: OffersProcess = {
  city: STARTING_CITY,
  offersList: [],
  isOffersListLoading: false,
  sortingMode: SortingMode.default,
};

export const offersProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    switchCity : (state, action: PayloadAction) => {
      state.city = action.payload;
    },
    switchSortingMode: (state, action: PayloadAction) => {
      state.sortingMode = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersListLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state) => {
        state.isOffersListLoading = false;
      });
  }
});
