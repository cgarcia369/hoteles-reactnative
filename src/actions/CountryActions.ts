import {COUNTRY_ERROR, COUNTRY_INIT, COUNTRY_SUCCESS} from '../types';
import {Country} from '../interfaces/appInterfaces';

export type CountryActions =
  | {type: typeof COUNTRY_INIT}
  | {type: typeof COUNTRY_SUCCESS; payload: {data: Country[]}}
  | {type: typeof COUNTRY_ERROR};

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
