import { Helmet } from 'react-helmet-async';
import { useState} from 'react';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { OffersRole } from '../../const';
import { MapRole } from '../../const';
import {useAppSelector} from '../../hooks';
import LocationsList from '../../components/locations-list/locations-list';
import Sorting from '../../components/sorting/sorting';
import PageHeader from '../../components/page-header/page-header';
import { citiesArr } from '../../const';
import { State } from '../../types/state';


const getOffersListSelector = (state: State) => state.offersList;

const getOffersListByCity = (state: State, city: string) => getOffersListSelector(state).filter((item) => item.city.name === city);

function MainPage(): JSX.Element {
  const cities = citiesArr;
  const [selectedOfferId, setSelectedOfferId] = useState<string | undefined>(undefined);

  const city = useAppSelector((state) => state.city);
  const chosenCityOffersData = useAppSelector((state) => getOffersListByCity(state, city));

  const onMouseOverOffer = (e : React.MouseEvent<HTMLElement>) => {
    setSelectedOfferId(e.currentTarget.id);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <PageHeader />
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
