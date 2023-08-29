import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {saveToken, dropToken} from '../services/token';
import { saveEmail, dropEmail } from '../services/email.js';
import {APIRoute, AppRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { AccomodationListItem, AccomodationDetailedItem } from '../types/accomodation-item.js';
import type { ReviewItemType } from '../types/review-item.js';
import { redirectToRoute } from './action.js';

export const fetchOffersAction = createAsyncThunk<AccomodationListItem[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<AccomodationListItem[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchFavoritesListAction = createAsyncThunk<AccomodationListItem[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavoritesList',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<AccomodationListItem[]>(APIRoute.Favorites);
    return data;
  },
);

export const fetchNearbyOffersListAction = createAsyncThunk<AccomodationListItem[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchNearbyOffersList',
  async (id, {extra: api}) => {
    //console.log(`${APIRoute.Offers}${id}/nearby`);
    const {data} = await api.get<AccomodationListItem[]>(`${APIRoute.Offers}${id}/nearby`);
    //console.log(`data = ${JSON.stringify(data)}`)
    return data;
  },
);

export const fetchDetailedOfferAction = createAsyncThunk<AccomodationDetailedItem, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchDetailedOffer',
  async (id, {extra: api}) => {
    //console.log(`${APIRoute.Offers}${id}`);
    const {data} = await api.get<AccomodationDetailedItem>(`${APIRoute.Offers}${id}`);
    console.log(`dataFetch = ${JSON.stringify(data)}`)
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<ReviewItemType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReviews',
  async (id, {extra: api}) => {
    //console.log(`${APIRoute.Comments}${id}`);
    const {data} = await api.get<ReviewItemType[]>(`${APIRoute.Comments}${id}`);
    //console.log(`data = ${JSON.stringify(data)}`)
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    saveEmail(data.email);
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dropEmail();
  },
);
