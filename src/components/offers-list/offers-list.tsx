function OffersList(): JSX.Element {
  return <div className="cities__places-list places__list tabs__content">
    {[...Array(offersData.length).keys()].map((item: number) => <AccomodationCard {...offersData[item]} key={offersData[item].id} />)}
  </div>
}

import OffersList;
