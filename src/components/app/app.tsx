import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginCheck from '../login-check/login-check';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import MainPage from '../../pages/main-page/main-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { getOffersLoadingStatus } from '../../store/offers-process/offers-process.selector';
import {useEffect} from 'react';
import { useAppDispatch } from '../../hooks';
import { checkAuthAction, fetchOffersAction } from '../../store/api-actions';

function App(): JSX.Element {

  const authStatus = useAppSelector(getAuthorizationStatus);
  const offersLoadingStatus = useAppSelector(getOffersLoadingStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction());
    dispatch(checkAuthAction());
  },[]);

  if(authStatus === AuthorizationStatus.Unknown || offersLoadingStatus === true) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route index path={AppRoute.Root} element={<MainPage />} />
          <Route path={AppRoute.Favorites} element={
            <LoginCheck>
              <FavoritesPage />
            </LoginCheck>
          }
          />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
