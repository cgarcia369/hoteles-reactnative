import {Country} from '../interfaces/appInterfaces';
import {COUNTRY_ERROR, COUNTRY_INIT, COUNTRY_SUCCESS} from '../types';
import {CountryActions} from '../actions/CountryActions';

export type CountryState = {
  isLoading: boolean;
  data: Country[] | null;
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
    default: {
      break;
    }
  }
};
