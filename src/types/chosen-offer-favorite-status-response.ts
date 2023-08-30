import { AccomodationDetailedItem, AccomodationListItem } from './accomodation-item';

export type ChosenBriefOfferFavoriteStatusResponse = {
  chosenOffer: AccomodationListItem | null;
  favoritesList: AccomodationListItem[];
}

export type ChosenDetailedOfferFavoriteStatusResponse = {
  chosenOffer: AccomodationDetailedItem | null;
  favoritesList: AccomodationListItem[];
}
