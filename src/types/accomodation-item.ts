type ApartmentType = 'apartment' | 'room' | 'house' | 'hotel';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type City = {
  name: string;
  location: Location;
}

export type AccomodationListItem = {
  id: string;
  title: string;
  type: ApartmentType;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type AccomodationDetailedItem = {
  id: string;
  title: string;
  type: ApartmentType;
  price: number;
  images: string[];
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  maxAdults: number;
}
