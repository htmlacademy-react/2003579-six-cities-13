import cn from 'classnames';
import { generatePath } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { AccomodationListItem } from '../../types/accomodation-item';
import { useState } from 'react';
import { OffersRole } from '../../const';

type AccomodationCardProps = {
  offerData: AccomodationListItem;
  onMouseOverOffer?: (e:React.MouseEvent<HTMLElement>) => void;
  role: OffersRole;
}

function AccomodationCard(props: AccomodationCardProps): JSX.Element {
  const [, setActiveCard] = useState('');

  function handleActiveChange (e : React.MouseEvent<HTMLElement>) {
    if(e.currentTarget !== null) {
      setActiveCard(e.currentTarget.id);

      if(props.role === OffersRole.OfferPageNearPlaces) {
        props.onMouseOverOffer = undefined;
      } else if (props.role === OffersRole.MainPageOffers && props.onMouseOverOffer !== undefined) {
        props.onMouseOverOffer(e);
      }
    }
  }

  return (
    <article
      className={cn('place-card',
        {'near-places__card' : props.role === OffersRole.OfferPageNearPlaces},
        {'cities__card' : props.role === OffersRole.MainPageOffers},
      )}

      id={props.offerData.id} onMouseOver = {handleActiveChange} onMouseOut = {() => setActiveCard('')}
    >

      {props.offerData.isPremium && props.role === OffersRole.MainPageOffers &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, {id: props.offerData.id})}>
          <img className="place-card__image" src={props.offerData.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.offerData.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{props.offerData.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ 'width': '80%' }}></span>
            <span className="visually-hidden">{props.offerData.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, {id: props.offerData.id})}>{props.offerData.title}</Link>
        </h2>
        <p className="place-card__type">{props.offerData.type}</p>
      </div>
    </article>
  );
}

export default AccomodationCard;
