import {AuthActions} from '../actions/AuthActions';
import {User} from '../interfaces/appInterfaces';

export type AuthState = {
  status: 'loading' | 'unauth' | 'auth';
  user: User | null;
};
export const AuthReducer = (state: AuthState, action: AuthActions) => {
  switch (action.type) {
    case 'AUTH_INIT': {
      state.status = 'loading';
      break;
    }
    case 'AUTH_ERROR': {
      state.status = 'unauth';
      state.user = null;
      break;
    }
    case 'AUTH_SUCCESS': {
      state.user = action.payload.user;
      state.status = 'auth';
      break;
    }
    case 'LOGIN_INIT': {
      state.status = 'loading';
      break;
    }
    case 'LOGIN_ERROR': {
      state.status = 'unauth';
      break;
    }
    case 'LOGIN_SUCCESS': {
      state.user = action.payload.user;
      state.status = 'auth';
      break;
    }
    case 'LOGOUT': {
      state.status = 'unauth';
      state.user = null;
      break;
    }
    default: {
      break;
    }
  }
};
