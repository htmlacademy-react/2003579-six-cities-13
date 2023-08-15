import { AccomodationListItem } from "../../types/accomodation-item";
import { citiesArr } from "../../const";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { switchCity, fillOffersList } from "../../store/action";

type LocationsListProps = {
  citiesNamesArr: string[];
  //offersData: AccomodationListItem[];
}

function LocationsList({citiesNamesArr/*, offersData*/} : LocationsListProps): JSX.Element {
  const dispatch = useAppDispatch();

  function handleTabClick(e : React.MouseEvent<HTMLElement>) {
    let previousActiveTab = document.querySelector('.tabs__item--active');
    previousActiveTab?.classList.remove('tabs__item--active');

    const target = e.target as Element;

    target.classList.add('tabs__item--active');

    const cityName = target.querySelector('span')?.textContent;

    if(cityName !== null && cityName !== undefined) {
      dispatch(switchCity(cityName));
    }
  }

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesNamesArr.map((city) => {
          return (
            <li className="locations__item" key={city} onClick = {handleTabClick}>
              <a className="locations__item-link tabs__item" href="#">
                <span>city</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default LocationsList;
