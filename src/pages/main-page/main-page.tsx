import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { OffersRole } from '../../const';
import { MapRole } from '../../const';
import {useAppSelector, useAppDispatch } from '../../hooks';
import LocationsList from '../../components/locations-list/locations-list';
import { fillOffersList } from '../../store/action';
import Sorting from '../../components/sorting/sorting';
import UserMenu from '../../components/user-menu/user-menu';

type MainPageProps = {
  //offersData: AccomodationListItem[];
  cities: string[];
}

function MainPage({/*offersData, */cities}: MainPageProps): JSX.Element {
  const [selectedOfferId, setSelectedOfferId] = useState<string | undefined>(undefined);

  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);
  const offersData = useAppSelector((state) => state.offersList);

  const chosenCityOffersData = useAppSelector((state) => state.offersList);

  useEffect(() => {
    dispatch(fillOffersList(offersData.filter((item) => item.city.name === city)));
  }, [city]);

  const onMouseOverOffer = (e : React.MouseEvent<HTMLElement>) => {
    setSelectedOfferId(e.currentTarget.id);
  };

  useEffect(() => {
    dispatch(fillOffersList(offersData.filter((item) => item.city.name === city)));
  }, [city]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <UserMenu />
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList citiesNamesArr={cities} /*offersData={offersData}*/ />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{chosenCityOffersData.length} places to stay in {city}</b>
              <Sorting offersList={chosenCityOffersData} />
              <OffersList offersData={chosenCityOffersData} onMouseOverOffer={onMouseOverOffer} role={OffersRole.MainPageOffers}/>
            </section>
            <div className="cities__right-section">
              <Map city={city} points={chosenCityOffersData} selectedPointId={selectedOfferId} role={MapRole.MainPageMap}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
