import { Cities } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { switchCity } from '../../store/offers-process/offers-process.slice';
import { getCity } from '../../store/offers-process/offers-process.selector';

type LocationsListProps = {
  citiesNamesArr: string[];
}

function LocationsList({ citiesNamesArr }: LocationsListProps): JSX.Element {
  const dispatch = useAppDispatch();

  function handleTabClick(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as Element;

    const cityName = target.textContent as Cities;

    if (cityName) {
      dispatch(switchCity(cityName));
    }
  }

  const cityName = useAppSelector(getCity);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesNamesArr.map((city) => (
          <li className="locations__item" key={city} >
            <a className={cn('locations__item-link tabs__item',
              { 'tabs__item--active': city === cityName }
            )}
            href="#" onClick={handleTabClick}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LocationsList;
