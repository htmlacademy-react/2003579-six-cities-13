import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { AccomodationListItem } from '../../types/accomodation-item';

export const getNearbyOffersList = (state: State): AccomodationListItem[] => state[NameSpace.NearbyOffers].nearbyOffersList;
export const getNearbyOffersFetchingErrorStatus = (state: State): boolean => state[NameSpace.NearbyOffers].hasNearbyOffersFetchingError;

