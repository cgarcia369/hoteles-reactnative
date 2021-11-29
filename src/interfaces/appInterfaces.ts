export interface LoginRequest {
  email: string;
  password: string;
}

export interface TokenCheck extends User {}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  roles: string[];
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  rol: 'Administrator' | 'User';
}

export interface Paginated<T> {
  data: T;
  metadata: {
    count: number;
    firstItemOnPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    isFirstPage: boolean;
    isLastPage: boolean;
    lastItemOnPage: number;
    pageCount: number;
    pageNumber: number;
    totalItemCount: number;
  };
}

export interface HotelResponse extends Paginated<Hotel[]> {}

export interface Hotel {
  id: number;
  name: string;
  address: string;
  rating: number;
  country: Country;
  countryId: number;
}

export interface HotelEditRequest {
  id: number;
  name: string;
  address: string;
  rating: number;
  countryId: number;
}

export interface Country {
  id: number;
  hotels: Hotel[];
  name: string;
  shortName: string;
}

export type CountryResponse = Country[];

export interface HotelCreateRequest {
  name: string;
  address: string;
  rating: number;
  countryId: number;
}

export interface CountryCreateRequest {
  name: string;
  shortName: string;
}

export interface CountryEditRequest extends CountryCreateRequest {
  id: number;
}
