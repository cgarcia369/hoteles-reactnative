import {AuthActions} from '../actions/AuthActions';
import {User} from '../interfaces/appInterfaces';

export type AuthState = {
  status: 'loading' | 'unauth' | 'auth';
  loginIsLoading: boolean;
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
      state.loginIsLoading = true;
      break;
    }
    case 'LOGIN_ERROR': {
      state.status = 'unauth';
      state.loginIsLoading = false
      break;
    }
    case 'LOGIN_SUCCESS': {
      state.user = action.payload.user;
      state.status = 'auth';
      state.loginIsLoading = false
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
