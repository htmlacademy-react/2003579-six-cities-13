import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { switchOffersLoadingStatus, fillOffersList, requireAuthorization, redirectToRoute, getDetailedOfferData, fillNearbyOffersList, fillFavoritesList, fillReviewsList } from './action.js';
import { AccomodationListItem, AccomodationDetailedItem } from '../types/accomodation-item.js';
import type { ReviewItemType } from '../types/review-item.js';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(switchOffersLoadingStatus(true));
    const {data} = await api.get<AccomodationListItem[]>(APIRoute.Offers);
    dispatch(switchOffersLoadingStatus(false));
    dispatch(fillOffersList(data));
  },
);

export const fetchFavoritesListAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavoritesList',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(switchOffersLoadingStatus(true));
    const {data} = await api.get<AccomodationListItem[]>(APIRoute.Favorites);
    dispatch(switchOffersLoadingStatus(false));
    dispatch(fillFavoritesList(data));
  },
);

export const fetchNearbyOffersListAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchNearbyOffersList',
  async (id, {dispatch, extra: api}) => {
    //console.log(`${APIRoute.Offers}${id}/nearby`);
    const {data} = await api.get<AccomodationListItem[]>(`${APIRoute.Offers}${id}/nearby`);
    //console.log(`data = ${JSON.stringify(data)}`)
    dispatch(fillNearbyOffersList(data));
  },
);

export const fetchDetailedOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchDetailedOffer',
  async (id, {dispatch, extra: api}) => {
    //console.log(`${APIRoute.Offers}${id}`);
    const {data} = await api.get<AccomodationDetailedItem>(`${APIRoute.Offers}${id}`);
    //console.log(`data = ${JSON.stringify(data)}`)
    dispatch(getDetailedOfferData(data));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReviews',
  async (id, {dispatch, extra: api}) => {
    //console.log(`${APIRoute.Comments}${id}`);
    const {data} = await api.get<ReviewItemType[]>(`${APIRoute.Comments}${id}`);
    //console.log(`data = ${JSON.stringify(data)}`)
    dispatch(fillReviewsList(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
