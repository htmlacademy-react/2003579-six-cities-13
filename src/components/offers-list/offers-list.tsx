import cn from 'classnames';
import { AccomodationListItem } from '../../types/accomodation-item';
import AccomodationCard from '../accomodation-card/accomodation-card';
import { OffersRole } from '../../const';

type OffersListProps = {
  offersData: AccomodationListItem[];
  onMouseOverOffer?: (e:React.MouseEvent<HTMLElement>) => void;
  role: OffersRole;
}

function OffersList({ offersData, onMouseOverOffer, role }: OffersListProps): JSX.Element {

  return (
    <div
      className={cn('places__list',
        {'near-places__list' : role === OffersRole.OfferPageNearPlaces},
        {'tabs__content' : role === OffersRole.MainPageOffers},
        {'cities__places-list' : role === OffersRole.MainPageOffers})}
    >

      {offersData?.map((offer) => <AccomodationCard key={offer.id} offerData={offer} onMouseOverOffer = {onMouseOverOffer} role={role}/>)}
    </div>
  );
}

export default OffersList;
