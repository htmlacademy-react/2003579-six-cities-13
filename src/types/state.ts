import {store} from '../store/index';
import { AuthorizationStatus } from '../const';
import { AccomodationDetailedItem, AccomodationListItem } from './accomodation-item';
import { Cities } from '../const';
import { SortingMode } from '../const';
import { ReviewItemType } from './review-item';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type FavoritesProcess = {
  favoritesList: AccomodationListItem[];
  isFavoritesListLoading: boolean;
}

export type OffersProcess = {
  city: Cities;
  offersList: AccomodationListItem[];
  isOffersListLoading: boolean;
  sortingMode: SortingMode;
}

export type NearbyOffersProcess = {
  nearbyOffersList: AccomodationListItem[];
  isNearbyOffersListLoading: boolean;
}

export type CurrentOfferProcess = {
  currentOffer: AccomodationDetailedItem | null;
  isCurrentOfferDataLoading: boolean;
}

export type ReviewsProcess = {
  reviewsList: ReviewItemType[];
  isReviewsListLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
