import { AccomodationListItem } from '../../types/accomodation-item';
import AccomodationCard from '../accomodation-card/accomodation-card';

type OffersListProps = {
  offersData: AccomodationListItem[];
}

function OffersList({ offersData }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersData?.map((offer) => <AccomodationCard key={offer.id} {...offer} />)}
    </div>
  );
}

export default OffersList;
