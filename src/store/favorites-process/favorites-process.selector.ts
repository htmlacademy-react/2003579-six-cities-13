import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { AccomodationListItem } from '../../types/accomodation-item';

export const getFavoritesList = (state: State): AccomodationListItem[] => state[NameSpace.Favorites].favoritesList;
export const getFavoritesLoadingStatus = (state: State): boolean => state[NameSpace.Favorites].isFavoritesListLoading;
