import { AccomodationListItem } from './types/accomodation-item';
import { ReviewItemType } from './types/review-item';
import { MONTHS } from './const';

export function sortPriceHighToLow(array: AccomodationListItem[]) {
  return array.slice().sort((a, b) => a.price > b.price ? 1 : -1);
}

export function sortPriceLowToHigh(array: AccomodationListItem[]) {
  return array.slice().sort((a, b) => a.price > b.price ? -1 : 1);
}

export function topRatedFirst(array: AccomodationListItem[]) {
  return array.slice().sort((a, b) => a.rating > b.rating ? -1 : 1);
}

function convertToDate(stringDate: string) {
  return new Date(stringDate);
}

export function getMostRecentReviews(array: ReviewItemType[]) {
  return array.slice().sort((a, b) => convertToDate(a.date) > convertToDate(b.date) ? 1 : -1);
}

export function convertNumericMonthToString(monthNumber: number) {
  return MONTHS[monthNumber];
}
