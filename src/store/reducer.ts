import { combineReducers} from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersProcess } from './offers-process/offers-process.slice';
import { favoritesProcess } from './favorites-process/favorites-process.slice';
import { currentOfferProcess } from './current-offer-process/current-offer-process.slice';
import { reviewsProcess } from './reviews-process/reviews-process.slice';
import { userProcess } from './user-process/user-process.slice';
import { nearbyOffersProcess } from './nearby-offers-process/nearby-offers-process.slice';

const reducer = combineReducers({[NameSpace.Offers]: offersProcess.reducer, [NameSpace.Favorites] : favoritesProcess.reducer,
  [NameSpace.CurrentOffer]: currentOfferProcess.reducer, [NameSpace.Reviews]: reviewsProcess.reducer, [NameSpace.User]: userProcess.reducer,
  [NameSpace.NearbyOffers]: nearbyOffersProcess.reducer});

export {reducer};
