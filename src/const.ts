export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  NotFoudPage = '*',
  Offer = '/offer/:id',
  Root = '/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export enum MapRole {
  MainPageMap = 'MAIN_PAGE_MAP',
  OfferPageMap = 'OFFER_PAGE_MAP',
}

export enum OffersRole {
  MainPageOffers = 'MAIN_PAGE_OFFERS',
  OfferPageNearPlaces = 'OFFER_PAGE_NEAR_PLACES',
}
