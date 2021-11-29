import {Country} from '../interfaces/appInterfaces';
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
} from '../types';
import {CountryActions} from '../actions/CountryActions';

export type CountryState = {
  isLoading: boolean;
  data: Country[] | null;
  isDeleteLoading: boolean;
  isEditLoading: boolean;
  isCreateLoading: boolean;
};

export const CountryReducer = (state: CountryState, action: CountryActions) => {
  switch (action.type) {
    case COUNTRY_INIT: {
      state.isLoading = true;
      break;
    }
    case COUNTRY_SUCCESS: {
      state.isLoading = false;
      state.data = action.payload.data;
      break;
    }
    case COUNTRY_ERROR: {
      state.isLoading = false;
      break;
    }
    case COUNTRY_EDIT_INIT: {
      state.isEditLoading = true;
      break;
    }
    case COUNTRY_EDIT_SUCCESS: {
      state.isEditLoading = false;
      // @ts-ignore
      state.data = state.data.map(e =>
        e.id === action.payload.data.id ? {...e, ...action.payload.data} : e,
      );
      break;
    }
    case COUNTRY_EDIT_ERROR: {
      state.isEditLoading = false;
      break;
    }
    case COUNTRY_DELETE_INIT: {
      state.isDeleteLoading = true;
      break;
    }
    case COUNTRY_DELETE_SUCCESS: {
      state.isDeleteLoading = false;
      // @ts-ignore
      state.data = state.data.filter(e => e.id !== action.payload.id);
      break;
    }
    case COUNTRY_DELETE_ERROR: {
      state.isDeleteLoading = false;
      break;
    }
    case COUNTRY_CREATE_INIT: {
      state.isCreateLoading = true;
      break;
    }
    case COUNTRY_CREATE_SUCCESS: {
      state.isCreateLoading = false;
      // @ts-ignore
      state.data = [action.payload.data, ...state.data];
      break;
    }
    case COUNTRY_CREATE_ERROR: {
      state.isCreateLoading = false;
      break;
    }
    default: {
      break;
    }
  }
};
