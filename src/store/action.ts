import {createAction} from '@reduxjs/toolkit';
import { AccomodationListItem } from '../types/accomodation-item';
import { Cities } from '../const';
import { SortingMode } from '../const';

export const Action = {
  switchCity: 'switchCity',
  fillOffersList: 'fillOffersList',
  changeSortingMode: 'changeSortingMode',
};

export const switchCity = createAction(Action.switchCity, (city: Cities) => ({
  payload: city,
}));

export const fillOffersList = createAction(Action.fillOffersList, (offersList: AccomodationListItem[]) => ({
  payload: offersList,
}));

export const changeSortingMode = createAction(Action.changeSortingMode, (sortingMode: SortingMode) => ({
  payload: sortingMode,
}));
