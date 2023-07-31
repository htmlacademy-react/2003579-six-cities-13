import FavoritesCard from '../favorites-card/favorites-card';
import { AccomodationListItem } from '../../types/accomodation-item';
import { Cities } from '../../const';


type FavoritesListProps = {
  offersList: AccomodationListItem[];
}

function FavoritesList({ offersList } : FavoritesListProps): JSX.Element {
  const favoritesArr = offersList?.filter((item) => item.isFavorite);

  const offersAmsterdam = favoritesArr?.filter((item) => item.city.name === Cities.Amsterdam);
  const offersBrussels = favoritesArr?.filter((item) => item.city.name === Cities.Brussels);
  const offersCologne = favoritesArr?.filter((item) => item.city.name === Cities.Cologne);
  const offersDusseldorf = favoritesArr?.filter((item) => item.city.name === Cities.Dusseldorf);
  const offersHamburg = favoritesArr?.filter((item) => item.city.name === Cities.Hamburg);
  const offersParis = favoritesArr?.filter((item) => item.city.name === Cities.Paris);

  const citiesOffersArr : AccomodationListItem[][] = [offersAmsterdam, offersBrussels, offersCologne, offersDusseldorf, offersHamburg, offersParis];

  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {citiesOffersArr.map((cityOffersArr) => (cityOffersArr?.length > 0 &&
            <li className="favorites__locations-items" key={cityOffersArr[0].city.name}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{cityOffersArr[0].city.name}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {cityOffersArr?.map((favoriteOffer) => <FavoritesCard key={favoriteOffer.id} {...favoriteOffer}/>)}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default FavoritesList;
