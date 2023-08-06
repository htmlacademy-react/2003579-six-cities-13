import { Link } from 'react-router-dom';
import { generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { AccomodationListItem } from '../../types/accomodation-item';

function FavoritesCard(favoritesData: AccomodationListItem): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {favoritesData.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : false}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, { id: favoritesData.id })}>
          <img
            className="place-card__image"
            src={favoritesData.previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{favoritesData.price}</b>
            <span className="place-card__price-text">
              /&nbsp;night
            </span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '100%' }} />
            <span className="visually-hidden">{favoritesData.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{favoritesData.title}</a>
        </h2>
        <p className="place-card__type">{favoritesData.type}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
