import {Cities, NameSpace, SortingMode} from '../../const';
import {State} from '../../types/state';
import { AccomodationListItem } from '../../types/accomodation-item';

export const getOffersList = (state: State): AccomodationListItem[] => state[NameSpace.Offers].offersList;
export const getCity = (state: State) : Cities => state[NameSpace.Offers].city;
export const getSortingMode = (state: State) : SortingMode => state[NameSpace.Offers].sortingMode;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersListLoading;
export const getOffersLoadingErrorStatus = (state: State) : boolean => state[NameSpace.Offers].hasOffersLoadingError;
