import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {saveToken, dropToken} from '../services/token';
import { saveEmail, dropEmail } from '../services/email.js';
import {APIRoute, AppRoute, EMPTY_FAVORITES_RESPONSE} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { AccomodationListItem, AccomodationDetailedItem } from '../types/accomodation-item.js';
import type { ReviewItemType } from '../types/review-item.js';
import { redirectToRoute } from './action.js';
import { ChosenBriefOfferFavoriteStatusResponse, ChosenDetailedOfferFavoriteStatusResponse } from '../types/chosen-offer-favorite-status-response.js';
import { ChosenOfferFavoriteStatusRequest } from '../types/chosen-offer-favorite-status-request.js';

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

// export const changeOfferFavoriteStatusAction = createAsyncThunk<AccomodationDetailedItem | AccomodationListItem, {status: number; id: string}, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'changeOfferFavoriteStatus',
//   async ({status, id}, {extra: api}) => {
//     const {data} = await api.post<AccomodationDetailedItem | AccomodationListItem>(`${APIRoute.Favorites}/${id}/${status}`);

//     return data;
//   },
// );

export const changeBriefOfferFavoriteStatusAction = createAsyncThunk<ChosenBriefOfferFavoriteStatusResponse, ChosenOfferFavoriteStatusRequest, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'changeOfferFavoriteStatus',
  async ({status, id}, {extra: api}) => {
    try {
      const {data: chosenOffer} = await api.post<AccomodationListItem>(`${APIRoute.Favorites}/${id}/${status}`);
      const {data: favoritesList} = await api.get<AccomodationListItem[]>(APIRoute.Favorites);
      return {chosenOffer, favoritesList};
    } catch (error) {
      return EMPTY_FAVORITES_RESPONSE;
    }
  },
);

export const changeDetailedOfferFavoriteStatusAction = createAsyncThunk<ChosenDetailedOfferFavoriteStatusResponse, ChosenOfferFavoriteStatusRequest, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'changeOfferFavoriteStatus',
  async ({status, id}, {extra: api}) => {
    try {
      const {data: chosenOffer} = await api.post<AccomodationDetailedItem>(`${APIRoute.Favorites}/${id}/${status}`);
      const {data: favoritesList} = await api.get<AccomodationListItem[]>(APIRoute.Favorites);
      return {chosenOffer, favoritesList};
    } catch (error) {
      return EMPTY_FAVORITES_RESPONSE;
    }
  },
);

export const fetchNearbyOffersListAction = createAsyncThunk<AccomodationListItem[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchNearbyOffersList',
  async (id, {extra: api}) => {
    const {data} = await api.get<AccomodationListItem[]>(`${APIRoute.Offers}${id}/nearby`);
    return data;
  },
);

export const fetchDetailedOfferAction = createAsyncThunk<AccomodationDetailedItem | undefined, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchDetailedOffer',
  async (id, {dispatch, extra: api}) => {
    if(!id) {
      dispatch(redirectToRoute(AppRoute.Root));
    }
    try {
      const {data} = await api.get<AccomodationDetailedItem>(`${APIRoute.Offers}${id}`);
      return data;
    } catch(error) {
      dispatch(redirectToRoute(AppRoute.Root));
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<ReviewItemType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReviews',
  async (id, {extra: api}) => {
    const {data} = await api.get<ReviewItemType[]>(`${APIRoute.Comments}${id}`);
    return data;
  },
);

export const sendReviewAction = createAsyncThunk<ReviewItemType | null,
{rating: number; review: string; id: string; cb: () => void}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'sendReview',
  async ({ rating, review, id, cb }, { extra: api }) => {
    const response = await api.post<ReviewItemType>(`${APIRoute.Comments}${id}`, {rating, review});
    if (response.status === 201) {
      cb();
    }
    const {data} = response;
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
  async ({email, password}, {dispatch, extra: api}) => {
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
