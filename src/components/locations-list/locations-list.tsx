import { Cities } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { switchCity} from '../../store/action';
import cn from 'classnames';

type LocationsListProps = {
  citiesNamesArr: string[];
}

function LocationsList({ citiesNamesArr/*, offersData*/ }: LocationsListProps): JSX.Element {
  const dispatch = useAppDispatch();

  function handleTabClick(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as Element;

    target.classList.add('tabs__item--active');

    const cityName = target.textContent as Cities;

    if (cityName) {
      dispatch(switchCity(cityName));
    }
  }

  const cityName = useAppSelector((state) => state.city);

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
