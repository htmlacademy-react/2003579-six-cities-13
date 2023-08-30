import { useRef, useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SortingMode, SORTING_MODES_ARR } from '../../const';
import cn from 'classnames';
import { sortPriceHighToLow, sortPriceLowToHigh, topRatedFirst } from '../../utils';
import { AccomodationListItem } from '../../types/accomodation-item';
//import { fillOffersList, changeSortingMode } from '../../store/action';
import {useOnClickOutside} from 'usehooks-ts';
import { switchCity, switchSortingMode, fillOffersList } from '../../store/offers-process/offers-process.slice';
import { getSortingMode } from '../../store/offers-process/offers-process.selector';

type SortingProps = {
  offersList: AccomodationListItem[];
}

function Sorting({ offersList }: SortingProps): JSX.Element {
  const [optionsListToggle, setOptionsListToggle] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const sortingMode = useAppSelector(getSortingMode);
  const initialOffersList = useRef(offersList).current;

  const formRef = useRef(null);

  function handleClickOutside() {
    setOptionsListToggle(false);
  }

  useOnClickOutside(formRef, handleClickOutside);

  function handleSortClick(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as Element;
    const sortingTitle = target.textContent as SortingMode;
    dispatch(switchSortingMode(sortingTitle));

    switch (sortingTitle) {
      case SortingMode.default:
        dispatch(fillOffersList(initialOffersList));
        break;
      case SortingMode.sortPriceHighToLow:
        dispatch(fillOffersList(sortPriceHighToLow(offersList)));
        break;
      case SortingMode.sortPriceLowToHigh:
        dispatch(fillOffersList(sortPriceLowToHigh(offersList)));
        break;
      case SortingMode.topRatedFirst:
        dispatch(fillOffersList(topRatedFirst(offersList)));
        break;
    }
  }

  return (
    <form className="places__sorting" action="#" method="get" ref={formRef} onClick={() => setOptionsListToggle(true)}/*onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}*/ >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options places__options--custom',
        { 'places__options--opened': optionsListToggle === true }
      )}
      >
        {SORTING_MODES_ARR.map((sortingTitle) => (
          <li key={sortingTitle}
            className={cn('places__option',
              { 'places__option--active': sortingTitle === sortingMode }
            )}
            tabIndex={0} onClick={(e) => handleSortClick(e)}
          >{sortingTitle}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
