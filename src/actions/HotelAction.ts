import {HOTEL_ERROR, HOTEL_INIT, HOTEL_SUCCESS} from '../types';
import {Hotel, Paginated} from '../interfaces/appInterfaces';

export type HotelAction =
  | {type: typeof HOTEL_INIT}
  | {type: typeof HOTEL_SUCCESS; payload: {data: any}}
  | {type: typeof HOTEL_ERROR};

export const hotelInit = (): HotelAction => ({
  type: HOTEL_INIT,
});
export const hotelSuccess = (data: Paginated<Hotel[]>): HotelAction => ({
  type: HOTEL_SUCCESS,
  payload: {data},
});
export const hotelError = (): HotelAction => ({
  type: HOTEL_ERROR,
});
