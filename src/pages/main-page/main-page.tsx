import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { AccomodationListItem } from '../../types/accomodation-item';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { OffersRole } from '../../const';
import { MapRole } from '../../const';
import {useAppDispatch, useAppSelector } from '../../hooks';
import LocationsList from '../../components/locations-list/locations-list';
import { fillOffersList } from '../../store/action';

type MainPageProps = {
  offersData: AccomodationListItem[];
  cities: string[];
}

function MainPage({offersData, cities}: MainPageProps): JSX.Element {
  const [selectedOfferId, setSelectedOfferId] = useState<string | undefined>(undefined);

  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);

  //const chosenCityOffersData = offersData.filter((item) => item.city.name === city);
  const chosenCityOffersData = useAppSelector((state) => state.offersList);

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
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList citiesNamesArr={cities} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{chosenCityOffersData.length} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
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
