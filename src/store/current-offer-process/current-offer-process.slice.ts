import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { fetchDetailedOfferAction } from '../api-actions';
import { CurrentOfferProcess} from '../../types/state';


const initialState: CurrentOfferProcess = {
  id: undefined,
  currentOffer: null,
  isCurrentOfferDataLoading: false,
};

export const currentOfferProcess = createSlice({
  name: NameSpace.CurrentOffer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDetailedOfferAction.pending, (state) => {
        state.isCurrentOfferDataLoading = true;
      })
      .addCase(fetchDetailedOfferAction.fulfilled, (state, action) => {
        state.isCurrentOfferDataLoading = false;
        state.currentOffer = action.payload;
        console.log('работа экшна');
        console.log(action.payload);
      });
  }
});
