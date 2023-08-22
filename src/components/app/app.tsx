import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginCheck from '../login-check/login-check';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import MainPage from '../../pages/main-page/main-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {useEffect} from 'react';
import { fillOffersList } from '../../store/action';
import LoadingScreen from '../loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';


type AppProps = {
  //offersData: AccomodationListItem[];
  //offersList: AccomodationListItem[];
  cities: string[];
}

function App({/*offersData, offersList,*/ cities}: AppProps): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fillOffersList([]));
  }, [dispatch]);

  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const offersLoadingStatus = useAppSelector((state) => state.offersDataLoadingStatus);

  if(authStatus === AuthorizationStatus.Unknown || offersLoadingStatus === true) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route index path={AppRoute.Root} element={<MainPage cities={cities} /*offersData={offersData} offersData={generatedListOffersAll}*/ />} />
          <Route path={AppRoute.Favorites} element={
            <LoginCheck authorizationStatus={authStatus}>
              <FavoritesPage /*offersList = {offersList}*//>
            </LoginCheck>
          }
          />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Offer} element={<OfferPage /*offersData={offersData}*//>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
