import {Cities, NameSpace, SortingMode} from '../../const';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import { AccomodationListItem } from '../../types/accomodation-item';

export const getNearbyOffersList = (state: State): AccomodationListItem[] => state[NameSpace.NearbyOffers].nearbyOffersList;
export const getNearbyOffersLoadingStatus = (state: State): boolean => state[NameSpace.NearbyOffers].isNearbyOffersListLoading;
