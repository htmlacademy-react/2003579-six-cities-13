import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {NameSpace, SortingMode} from '../../const';
import { fetchOffersAction } from '../api-actions';
import { OffersProcess } from '../../types/state';
import { Cities } from '../../const';
import { AccomodationListItem } from '../../types/accomodation-item';

const STARTING_CITY : Cities = Cities.Paris;

const initialState: OffersProcess = {
  city: STARTING_CITY,
  offersList: [],
  isOffersListLoading: false,
  sortingMode: SortingMode.default,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    switchCity : (state, action: PayloadAction<Cities>) => {
      state.city = action.payload;
    },
    switchSortingMode: (state, action: PayloadAction<SortingMode>) => {
      state.sortingMode = action.payload;
    },
    fillOffersList: (state, action: PayloadAction<AccomodationListItem[]>) => {
      state.offersList = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersListLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersListLoading = false;
        state.offersList = action.payload;
      });
  }
});

export const {switchCity, switchSortingMode, fillOffersList} = offersProcess.actions;
