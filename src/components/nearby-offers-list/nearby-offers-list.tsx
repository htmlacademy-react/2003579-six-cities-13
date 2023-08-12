import { AccomodationListItem } from '../../types/accomodation-item';
import { OffersRole } from '../../const';
import OffersList from '../offers-list/offers-list';

type NearbyOffersListProps = {
  offersData: AccomodationListItem[];
}

function NearbyOffersList({offersData} : NearbyOffersListProps) : JSX.Element {

  return(
    <OffersList offersData={offersData} role={OffersRole.OfferPageNearPlaces} />
  );
}

export default NearbyOffersList;
