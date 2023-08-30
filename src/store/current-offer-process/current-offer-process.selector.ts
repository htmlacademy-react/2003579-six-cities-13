import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { AccomodationDetailedItem} from '../../types/accomodation-item';

export const getCurrentOffer = (state: State): AccomodationDetailedItem | null => state[NameSpace.CurrentOffer].currentOffer;
export const getCurrentOfferLoadingStatus = (state: State): boolean => state[NameSpace.CurrentOffer].isCurrentOfferDataLoading;
export const getCurrentOfferErrorStatus = (state: State): boolean => state[NameSpace.CurrentOffer].hasCurrentOfferLoadingError;
