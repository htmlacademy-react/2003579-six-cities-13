import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../const';
import { generatedListOffers } from '../mocks/generated-list-offers';
import { switchCity, fillOffersList } from './action';
import { AccomodationListItem } from '../types/accomodation-item';

const STARTING_CITY : Cities = Cities.Paris;

type initialStateType = {
  city: Cities;
  offersList: AccomodationListItem[];
};

const initialState: initialStateType = {
  city: STARTING_CITY,
  offersList: generatedListOffers,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(switchCity, (state, action) => {
    state.city = action.payload;
  })
    .addCase(fillOffersList, (state, action) => {
      state.offersList = action.payload;
    });
});

export {reducer};
