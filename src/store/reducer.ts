import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../const';
import { generatedListOffers } from '../mocks/generated-list-offers';
import { switchCity, fillOffersList, sortOffersList } from './action';
import { AccomodationListItem } from '../types/accomodation-item';
import { SortingMode } from '../const';

const STARTING_CITY : Cities = Cities.Paris;

type initialStateType = {
  city: Cities;
  offersList: AccomodationListItem[];
  sortingMode: SortingMode;
};

const initialState: initialStateType = {
  city: STARTING_CITY,
  offersList: generatedListOffers,
  sortingMode: SortingMode.default,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(switchCity, (state, action) => {
    state.city = action.payload;
  })
    .addCase(fillOffersList, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(sortOffersList, (state, action) => {
      state.sortingMode = action.payload;
    });
});

export {reducer};
