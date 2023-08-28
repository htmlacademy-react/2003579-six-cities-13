import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { AccomodationDetailedItem, AccomodationListItem } from '../../types/accomodation-item';

export const getCurrentOffer = (state: State): AccomodationDetailedItem => state[NameSpace.CurrentOffer].currentOffer;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.CurrentOffer].isCurrentOfferDataLoading;
