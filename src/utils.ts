import { AccomodationListItem } from './types/accomodation-item';

export function sortPriceHighToLow(array: AccomodationListItem[]) {
  return array.slice().sort((a, b) => a.price > b.price ? 1 : -1);
}

export function sortPriceLowToHigh(array: AccomodationListItem[]) {
  return array.slice().sort((a, b) => a.price > b.price ? -1 : 1);
}

export function topRatedFirst(array: AccomodationListItem[]) {
  return array.slice().sort((a, b) => a.rating > b.rating ? -1 : 1);
}
