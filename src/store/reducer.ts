import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../const';
import { switchCity, fillOffersList, changeSortingMode, requireAuthorization, switchOffersLoadingStatus, redirectToRoute, fillNearbyOffersList, fillReviewsList } from './action';
import { AccomodationListItem } from '../types/accomodation-item';
import { SortingMode, AuthorizationStatus, AppRoute, APIRoute } from '../const';
import { ReviewItemType } from '../types/review-item';

const STARTING_CITY : Cities = Cities.Paris;

type initialStateType = {
  city: Cities;
  authorizationStatus: AuthorizationStatus;
  offersDataLoadingStatus: boolean;
  offersList: AccomodationListItem[];
  nearbyOffersList: AccomodationListItem[];
  favoritesList: AccomodationListItem[];
  sortingMode: SortingMode;
  route: AppRoute | APIRoute;
  reviews: ReviewItemType[];
};

const initialState: initialStateType = {
  city: STARTING_CITY,
  authorizationStatus: AuthorizationStatus.Unknown,
  offersDataLoadingStatus: false,
  offersList: [],
  nearbyOffersList: [],
  favoritesList: [],
  sortingMode: SortingMode.default,
  route: AppRoute.Root,
  reviews: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(switchCity, (state, action) => {
    state.city = action.payload;
  })
    .addCase(fillOffersList, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(changeSortingMode, (state, action) => {
      state.sortingMode = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(switchOffersLoadingStatus, (state, action) => {
      state.offersDataLoadingStatus = action.payload;
    })
    .addCase(redirectToRoute, (state, action) => {
      state.route = action.payload;
    })
    .addCase(fillNearbyOffersList, (state, action) => {
      state.nearbyOffersList = action.payload;
    })
    .addCase(fillReviewsList, (state, action) => {
      state.reviews = action.payload;
    });
});

export {reducer};
