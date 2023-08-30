import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {NameSpace, SortingMode} from '../../const';
import { changeDetailedOfferFavoriteStatusAction, fetchOffersAction } from '../api-actions';
import { OffersProcess } from '../../types/state';
import { Cities } from '../../const';
import { AccomodationListItem } from '../../types/accomodation-item';

const STARTING_CITY : Cities = Cities.Paris;

const initialState: OffersProcess = {
  city: STARTING_CITY,
  offersList: [],
  isOffersListLoading: false,
  sortingMode: SortingMode.default,
  hasOffersLoadingError: false,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    switchCity : (state, action: PayloadAction<Cities>) => {
      state.city = action.payload;
    },
    switchSortingMode: (state, action: PayloadAction<SortingMode>) => {
      state.sortingMode = action.payload;
    },
    fillOffersList: (state, action: PayloadAction<AccomodationListItem[]>) => {
      state.offersList = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersListLoading = true;
        state.hasOffersLoadingError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersListLoading = false;
        state.offersList = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersListLoading = false;
        state.hasOffersLoadingError = true;
      })
      .addCase(changeDetailedOfferFavoriteStatusAction.fulfilled, (state, action) => {
        if (action.payload.chosenOffer !== null) {
          state.offersList = changeOffersItemFavoriteStatus(state.offers, action.payload.currentOffer.id, action.payload.currentOffer.isFavorite);

        }
      });
      // .addCase(changeOfferFavoriteStatusAction.fulfilled, (state, action) => {
      //   if (action.payload !== null) {
      //     if (state.currentOffer?.id === action.payload.id) {
      //       state.currentOffer.isFavorite = action.payload.isFavorite;
      //     }
      //   }
      // });
  }
});

function changeOffersItemFavoriteStatus(offersArray: AccomodationListItem[], id: string, isFavoriteItem: boolean) {
  const index = offersArray.findIndex((item) => item.id = id);
  return {...offersArray, offersArray[index].isFavorite: isFavoriteItem};

}


export const {switchCity, switchSortingMode, fillOffersList} = offersProcess.actions;
