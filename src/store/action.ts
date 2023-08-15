import {createAction} from '@reduxjs/toolkit';
import { AccomodationListItem } from '../types/accomodation-item';

export const Action = {
  switchCity: 'switchCity',
  fillOffersList: 'fiilOffersList',
}

export const switchCity = createAction(Action.switchCity, (city: string) => {
  return {
    payload: city,
  };
});

export const fillOffersList = createAction(Action.fillOffersList, (offersList: AccomodationListItem[]) => {
  return {
    payload: offersList,
  };
});
