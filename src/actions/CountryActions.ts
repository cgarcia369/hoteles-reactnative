import {
  COUNTRY_CREATE_ERROR,
  COUNTRY_CREATE_INIT,
  COUNTRY_CREATE_SUCCESS,
  COUNTRY_DELETE_ERROR,
  COUNTRY_DELETE_INIT,
  COUNTRY_DELETE_SUCCESS,
  COUNTRY_EDIT_ERROR,
  COUNTRY_EDIT_INIT,
  COUNTRY_EDIT_SUCCESS,
  COUNTRY_ERROR,
  COUNTRY_INIT,
  COUNTRY_SUCCESS,
  HOTEL_CREATE_ERROR,
  HOTEL_CREATE_INIT,
  HOTEL_CREATE_SUCCESS,
  HOTEL_DELETE_ERROR,
  HOTEL_DELETE_INIT,
  HOTEL_DELETE_SUCCESS,
  HOTEL_EDIT_ERROR,
  HOTEL_EDIT_INIT,
  HOTEL_EDIT_SUCCESS,
} from '../types';
import {
  Country,
  CountryEditRequest,
  Hotel,
  HotelEditRequest,
} from '../interfaces/appInterfaces';
import {HotelAction} from './HotelAction';

export type CountryActions =
  | {type: typeof COUNTRY_INIT}
  | {type: typeof COUNTRY_SUCCESS; payload: {data: Country[]}}
  | {type: typeof COUNTRY_ERROR}
  | {type: typeof COUNTRY_EDIT_INIT}
  | {type: typeof COUNTRY_EDIT_SUCCESS; payload: {data: CountryEditRequest}}
  | {type: typeof COUNTRY_EDIT_ERROR}
  | {type: typeof COUNTRY_DELETE_INIT}
  | {type: typeof COUNTRY_DELETE_SUCCESS; payload: {id: number}}
  | {type: typeof COUNTRY_DELETE_ERROR}
  | {type: typeof COUNTRY_CREATE_INIT}
  | {type: typeof COUNTRY_CREATE_ERROR}
  | {type: typeof COUNTRY_CREATE_SUCCESS; payload: {data: Country}};

export const countryInit = (): CountryActions => ({
  type: COUNTRY_INIT,
});
export const countrySuccess = (data: Country[]): CountryActions => ({
  type: COUNTRY_SUCCESS,
  payload: {data},
});
export const countryError = (): CountryActions => ({
  type: COUNTRY_ERROR,
});

export const countryEditInit = (): CountryActions => ({
  type: COUNTRY_EDIT_INIT,
});
export const countryEditSuccess = (
  data: CountryEditRequest,
): CountryActions => ({
  type: COUNTRY_EDIT_SUCCESS,
  payload: {data},
});
export const countryEditError = (): CountryActions => ({
  type: COUNTRY_EDIT_ERROR,
});

export const countryDeleteInit = (): CountryActions => ({
  type: COUNTRY_DELETE_INIT,
});
export const countryDeleteSuccess = (id: number): CountryActions => ({
  type: COUNTRY_DELETE_SUCCESS,
  payload: {id},
});
export const countryDeleteError = (): CountryActions => ({
  type: COUNTRY_DELETE_ERROR,
});
export const countryCreateInit = (): CountryActions => ({
  type: COUNTRY_CREATE_INIT,
});
export const countryCreateSuccess = (data: Country): CountryActions => ({
  type: COUNTRY_CREATE_SUCCESS,
  payload: {data},
});
export const countryCreateError = (): CountryActions => ({
  type: COUNTRY_CREATE_ERROR,
});
