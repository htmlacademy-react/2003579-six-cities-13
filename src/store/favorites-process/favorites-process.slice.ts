import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { fetchFavoritesListAction } from '../api-actions';
import { FavoritesProcess } from '../../types/state';

const initialState: FavoritesProcess = {
  favoritesList: [],
  isFavoritesListLoading: false,
  hasFavoritesLoadingError: false,
};

export const favoritesProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesListAction.pending, (state) => {
        state.isFavoritesListLoading = true;
        state.hasFavoritesLoadingError = false;
      })
      .addCase(fetchFavoritesListAction.fulfilled, (state, action) => {
        state.isFavoritesListLoading = false;
        if(action.payload) {
          state.favoritesList = action.payload;
        }
      })
      .addCase(fetchFavoritesListAction.rejected, (state) => {
        state.isFavoritesListLoading = false;
        state.hasFavoritesLoadingError = true;
      });
  }
});


// .addCase(changeOfferFavoriteStatusAction.fulfilled, (state, action) => {
//   if (action.payload.currentOffer !== null) {
//     if (state.offerDetail?.id === action.payload.currentOffer.id) {
//       state.offerDetail.isFavorite = action.payload.currentOffer.isFavorite;
//     }
//     state.offersNearBy = updateOfferFavoriteStatus(state.offersNearBy, action.payload.currentOffer.id, action.payload.currentOffer.isFavorite);
//   }
// })
