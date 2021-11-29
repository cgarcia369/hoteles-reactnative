import {
  HOTEL_CREATE_ERROR,
  HOTEL_CREATE_INIT,
  HOTEL_CREATE_SUCCESS,
  HOTEL_DELETE_ERROR,
  HOTEL_DELETE_INIT,
  HOTEL_DELETE_SUCCESS,
  HOTEL_EDIT_ERROR,
  HOTEL_EDIT_INIT,
  HOTEL_EDIT_SUCCESS,
  HOTEL_ERROR,
  HOTEL_INIT,
  HOTEL_SUCCESS,
} from '../types';
import {Hotel, HotelEditRequest, Paginated} from '../interfaces/appInterfaces';

export type HotelAction =
  | {type: typeof HOTEL_INIT}
  | {type: typeof HOTEL_SUCCESS; payload: {data: any}}
  | {type: typeof HOTEL_ERROR}
  | {type: typeof HOTEL_EDIT_INIT}
  | {type: typeof HOTEL_EDIT_SUCCESS; payload: {data: HotelEditRequest}}
  | {type: typeof HOTEL_EDIT_ERROR}
  | {type: typeof HOTEL_DELETE_INIT}
  | {type: typeof HOTEL_DELETE_SUCCESS; payload: {id: number}}
  | {type: typeof HOTEL_DELETE_ERROR}
  | {type: typeof HOTEL_CREATE_INIT}
  | {type: typeof HOTEL_CREATE_ERROR}
  | {type: typeof HOTEL_CREATE_SUCCESS; payload: {data: Hotel}};

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
export const hotelEditInit = (): HotelAction => ({
  type: HOTEL_EDIT_INIT,
});
export const hotelEditSuccess = (data: HotelEditRequest): HotelAction => ({
  type: HOTEL_EDIT_SUCCESS,
  payload: {data},
});
export const hotelEditError = (): HotelAction => ({
  type: HOTEL_EDIT_ERROR,
});

export const hotelDeleteInit = (): HotelAction => ({
  type: HOTEL_DELETE_INIT,
});
export const hotelDeleteSuccess = (id: number): HotelAction => ({
  type: HOTEL_DELETE_SUCCESS,
  payload: {id},
});
export const hotelDeleteError = (): HotelAction => ({
  type: HOTEL_DELETE_ERROR,
});
export const hotelCreateInit = (): HotelAction => ({
  type: HOTEL_CREATE_INIT,
});
export const hotelCreateSuccess = (data: Hotel): HotelAction => ({
  type: HOTEL_CREATE_SUCCESS,
  payload: {data},
});
export const hotelCreateError = (): HotelAction => ({
  type: HOTEL_CREATE_ERROR,
});
