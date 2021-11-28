import {HotelAction} from '../actions/HotelAction';
import {Hotel, Paginated} from '../interfaces/appInterfaces';
import {HOTEL_ERROR, HOTEL_INIT, HOTEL_SUCCESS} from '../types';

export type HotelState = {
  isLoading: boolean;
  data: Paginated<Hotel[]> | null;
};
export const HotelReducer = (state: HotelState, action: HotelAction) => {
  switch (action.type) {
    case HOTEL_INIT: {
      state.isLoading = true;
      break;
    }
    case HOTEL_SUCCESS: {
      state.isLoading = false;
      state.data = action.payload.data;
      break;
    }
    case HOTEL_ERROR: {
      state.isLoading = false;
    }
    default: {
      break;
    }
  }
};
