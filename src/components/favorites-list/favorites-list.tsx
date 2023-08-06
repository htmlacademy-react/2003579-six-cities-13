import FavoritesCard from '../favorites-card/favorites-card';
import { AccomodationListItem } from '../../types/accomodation-item';

type FavoritesListProps = {
  offersList: AccomodationListItem[];
}

function FavoritesList({ offersList } : FavoritesListProps): JSX.Element {

  const favoritesArr = offersList?.filter((item) => item.isFavorite);
  const favoritesArrMap = new Map<string, AccomodationListItem[]>();

  function setFavoriteMapItem(offer: AccomodationListItem) {
    if(favoritesArrMap.has(offer.city.name)) {
      favoritesArrMap.get(offer.city.name)!.push(offer);
    } else {
      favoritesArrMap.set(offer.city.name, [offer]);
    }
  }

  for(const offer of favoritesArr) {
    setFavoriteMapItem(offer);
  }

  const cities : JSX.Element[] = [];

  favoritesArrMap.forEach((offersArr, cityName) => {
    cities.push(
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{cityName}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {offersArr.map((favoriteOffer) => <FavoritesCard key={favoriteOffer.id} {...favoriteOffer}/>)}
        </div>
      </li>
    );
  });

  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {cities}
        </ul>
      </section>
    </div>
  );
}

export default FavoritesList;
