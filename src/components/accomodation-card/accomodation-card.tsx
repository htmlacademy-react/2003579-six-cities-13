import { AccomodationListItem } from '../../types/accomodation-item';
import { EventHandler, useState } from 'react';

function AccomodationCard(props: AccomodationListItem): JSX.Element {
  const cardId = props.id;
  const [isActiveCard, setActiveCard] = useState('');

  function handleActiveChange (e : React.MouseEvent<HTMLTimeElement>) {
    if(e.currentTarget != null) {
      setActiveCard(e.currentTarget.id);
    }
  }

  return (
    <article className="cities__card place-card"
    id={cardId} onMouseOver = {handleActiveChange} onMouseOut = {() => setActiveCard('')}>

      {props.isPremium ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      : false}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={props.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{props.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ 'width': '80%' }}></span>
            <span className="visually-hidden">{props.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{props.title}</a>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}

export default AccomodationCard;
