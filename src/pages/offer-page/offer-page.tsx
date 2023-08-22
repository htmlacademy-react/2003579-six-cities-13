import { Helmet } from 'react-helmet-async';
import { generatedDetailedOffers } from '../../mocks/generated-detailed-offers';
import { generatedReviews } from '../../mocks/generated-reviews';
//import { useParams } from 'react-router-dom';
import ReviewsList from '../../components/reviews-list/reviews-list';
import NearbyOffersList from '../../components/nearby-offers-list/nearby-offers-list';
import { generatedListOffers } from '../../mocks/generated-list-offers';
import Map from '../../components/map/map';
import { MapRole } from '../../const';
import { useAppSelector } from '../../hooks';

// type OfferPageProps = {
//   offersData: AccomodationListItem[];
// }

function OfferPage(/*{offersData}: OfferPageProps*/): JSX.Element {
  //const { id } = useParams();
  const nearbyOffers = useAppSelector((state) => state.nearbyOffersList);
  const slicedNearbyOffersList = nearbyOffers.slice(0, 3);
  const offer = generatedDetailedOffers[0]; //ВРЕМЕННО - ПОТОМ ЗАМЕНИТЬ

  /*function findOfferById(offer: AccomodationDetailedItem) {  ///НЕ УДАЛЯТЬ!!!!
    if (id !== undefined && offer.id !== undefined) {
      return offer.id === id;
    }
  }*/

  //const offer = generatedDetailedOffers.find(findOfferById);

  const cityName: string = offer.city.name;

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>`6 cities: {offer?.title}`</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offer?.images.map((imageSource) => (
              <div className="offer__image-wrapper" key={imageSource}>
                <img
                  className="offer__image"
                  src={imageSource}
                  alt="Photo studio"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {offer?.isPremium ?
              <div className="place-card__mark">
                <span>Premium</span>
              </div>
              : false}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{offer?.title}</h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: '80%' }} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{offer?.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">{offer?.type}</li>
              <li className="offer__feature offer__feature--bedrooms">
                {offer?.bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {offer?.maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">€{offer?.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {offer?.goods.map((goody) => (
                  <li className="offer__inside-item" key={goody}>{goody}</li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="offer__avatar user__avatar"
                    src={offer?.host.avatarUrl}
                    width={74}
                    height={74}
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">{offer?.host.name}</span>
                <span className="offer__user-status">{offer?.host.isPro ? 'Pro' : false}</span>
              </div>
              <div className="offer__description">
                <p className="offer__text">{offer?.description}</p>
              </div>
            </div>
            <ReviewsList reviewsArr={generatedReviews[0]}/>
          </div>
        </div>
        <Map city={cityName} points={generatedListOffers} selectedPointId={offer?.id} role={MapRole.OfferPageMap}/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <NearbyOffersList offersData={slicedNearbyOffersList}/>
        </section>
      </div>
    </main>
  );
}

export default OfferPage;
