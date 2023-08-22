import {createAction} from '@reduxjs/toolkit';
import { AccomodationListItem } from '../types/accomodation-item';
import { Cities } from '../const';
import { SortingMode } from '../const';
import { AuthorizationStatus } from '../const';
import { AppRoute, APIRoute } from '../const';
import { ReviewItemType } from '../types/review-item';

export const Action = {
  switchCity: 'switchCity',
  fillOffersList: 'fillOffersList',
  changeSortingMode: 'changeSortingMode',
  switchOffersLoadingStatus: 'switchOffersLoadingStatus',
  requireAuthorization: 'requireAuthorization',
  redirectToRoute: 'redirectToRoute',
  fillNearbyOffersList: 'fillNearbyOffersList',
  fillReviewsList: 'fillReviewsList',
};

export const switchCity = createAction(Action.switchCity, (city: Cities) => ({
  payload: city,
}));

export const fillOffersList = createAction(Action.fillOffersList, (offersList: AccomodationListItem[]) => ({
  payload: offersList,
}));

export const fillNearbyOffersList = createAction(Action.fillNearbyOffersList, (nearbyOffersList: AccomodationListItem[]) => ({
  payload: nearbyOffersList,
}));

export const fillReviewsList = createAction(Action.fillReviewsList, (reviews: ReviewItemType[]) => ({
  payload: reviews,
}));

export const changeSortingMode = createAction(Action.changeSortingMode, (sortingMode: SortingMode) => ({
  payload: sortingMode,
}));

export const switchOffersLoadingStatus = createAction(Action.switchOffersLoadingStatus, (isOffersListLoading: boolean) => ({
  payload: isOffersListLoading,
}));

export const requireAuthorization = createAction(Action.requireAuthorization, (authorizationStatus: AuthorizationStatus) => ({
  payload: authorizationStatus,
}));

export const redirectToRoute = createAction(Action.redirectToRoute, (route: AppRoute | APIRoute) =>({
  payload: route,
}));
