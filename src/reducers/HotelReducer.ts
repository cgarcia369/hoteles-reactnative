import {HotelAction} from '../actions/HotelAction';
import {Hotel, Paginated} from '../interfaces/appInterfaces';
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

export type HotelState = {
  isLoading: boolean;
  data: Paginated<Hotel[]> | null;
  isEditLoading: boolean;
  isDeleteLoading: boolean;
  isCreateLoading: boolean;
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
      break;
    }
    case HOTEL_EDIT_INIT: {
      state.isEditLoading = true;
      break;
    }
    case HOTEL_EDIT_SUCCESS: {
      state.isEditLoading = false;
      // @ts-ignore
      state.data.data = state.data.data.map(e =>
        e.id === action.payload.data.id ? {...e, ...action.payload.data} : e,
      );
      break;
    }
    case HOTEL_EDIT_ERROR: {
      state.isEditLoading = false;
      break;
    }
    case HOTEL_DELETE_INIT: {
      state.isDeleteLoading = true;
      break;
    }
    case HOTEL_DELETE_SUCCESS: {
      state.isDeleteLoading = false;
      // @ts-ignore
      state.data.data = state.data.data.filter(e => e.id !== action.payload.id);
      break;
    }
    case HOTEL_DELETE_ERROR: {
      state.isDeleteLoading = false;
    }
    case HOTEL_CREATE_INIT: {
      state.isCreateLoading = true;
      break;
    }
    case HOTEL_CREATE_SUCCESS: {
      state.isCreateLoading = false;
      // @ts-ignore
      state.data.data = [action.payload.data, ...state.data.data];
      break;
    }
    case HOTEL_CREATE_ERROR: {
      state.isCreateLoading = false;
      break;
    }

    default: {
      break;
    }
  }
};
