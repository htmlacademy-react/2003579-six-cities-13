import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { fetchFavoritesListAction } from '../api-actions';
import { FavoritesProcess } from '../../types/state';

const initialState: FavoritesProcess = {
  favoritesList: [],
  isFavoritesListLoading: false,
};

export const favoritesProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesListAction.pending, (state) => {
        state.isFavoritesListLoading = true;
      })
      .addCase(fetchFavoritesListAction.fulfilled, (state) => {
        state.isFavoritesListLoading = false;
      });
  }
});
