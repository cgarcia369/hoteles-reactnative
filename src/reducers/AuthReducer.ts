import {AuthActions} from '../actions/AuthActions';
import {User} from '../interfaces/appInterfaces';
import {
  AUTH_ERROR,
  AUTH_INIT,
  AUTH_SUCCESS,
  LOGIN_ERROR,
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_ERROR,
  REGISTER_INIT,
  REGISTER_SUCCESS,
} from '../types';

export type AuthState = {
  status: 'loading' | 'unauth' | 'auth';
  loginIsLoading: boolean;
  user: User | null;
  registerIsLoading: boolean;
};
export const AuthReducer = (state: AuthState, action: AuthActions) => {
  switch (action.type) {
    case AUTH_INIT: {
      state.status = 'loading';
      break;
    }
    case AUTH_ERROR: {
      state.status = 'unauth';
      state.user = null;
      break;
    }
    case AUTH_SUCCESS: {
      state.user = action.payload.user;
      state.status = 'auth';
      break;
    }
    case LOGIN_INIT: {
      state.loginIsLoading = true;
      break;
    }
    case LOGIN_ERROR: {
      state.status = 'unauth';
      state.loginIsLoading = false;
      break;
    }
    case LOGIN_SUCCESS: {
      state.user = action.payload.user;
      state.status = 'auth';
      state.loginIsLoading = false;
      break;
    }
    case REGISTER_INIT: {
      state.registerIsLoading = true;
      break;
    }
    case REGISTER_SUCCESS: {
      state.registerIsLoading = false;
      break;
    }
    case REGISTER_ERROR: {
      state.registerIsLoading = false;
      break;
    }
    case LOGOUT: {
      state.status = 'unauth';
      state.user = null;
      break;
    }
    default: {
      break;
    }
  }
};
