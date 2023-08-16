import { AccomodationListItem } from '../../types/accomodation-item';
import { Cities} from '../../const';
import { useAppDispatch} from '../../hooks';
import { switchCity, fillOffersList } from '../../store/action';

type LocationsListProps = {
  citiesNamesArr: string[];
}

function LocationsList({citiesNamesArr} : LocationsListProps): JSX.Element {
  const dispatch = useAppDispatch();

  function handleTabClick(e : React.MouseEvent<HTMLElement>) {
    const previousActiveTab = document.querySelector('.tabs__item--active');
    previousActiveTab?.classList.remove('tabs__item--active');

    const target = e.target as Element;

    target.classList.add('tabs__item--active');

    //const cityName = target.querySelector('span')?.textContent;
    const cityName = target.textContent as Cities;

    if (cityName) {
      dispatch(switchCity(cityName));
    }
  }

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesNamesArr.map((city) => (
          <li className="locations__item" key={city} >
            <a className="locations__item-link tabs__item" href="#" onClick = {handleTabClick}>
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LocationsList;
