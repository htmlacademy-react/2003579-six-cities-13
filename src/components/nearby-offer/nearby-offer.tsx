import AccomodationCard from '../accomodation-card/accomodation-card';
import { AccomodationListItem } from '../../types/accomodation-item';
import { OffersRole } from '../../const';

type NearbyOfferProps = {
  offerData: AccomodationListItem;
}

function NearbyOffer({offerData} : NearbyOfferProps): JSX.Element {
  return (
    <AccomodationCard offerData={offerData} role={OffersRole.OfferPageNearPlaces}/>
  );
}

export default NearbyOffer;
