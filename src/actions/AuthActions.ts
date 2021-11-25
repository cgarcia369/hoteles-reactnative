import {
  AUTH_ERROR,
  AUTH_INIT,
  AUTH_SUCCESS,
  LOGIN_ERROR,
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../types';
import {User} from '../interfaces/appInterfaces';

export type AuthActions =
  | {type: typeof AUTH_INIT}
  | {type: typeof AUTH_SUCCESS; payload: {user: User}}
  | {type: typeof AUTH_ERROR}
  | {type: typeof LOGIN_INIT}
  | {type: typeof LOGIN_SUCCESS; payload: {user: User}}
  | {type: typeof LOGIN_ERROR}
  | {type: typeof LOGOUT};

export const authInit = (): AuthActions => ({
  type: AUTH_INIT,
});
export const authSucess = (user: any): AuthActions => ({
  type: AUTH_SUCCESS,
  payload: {user},
});
export const authError = (): AuthActions => ({
  type: AUTH_ERROR,
});
export const loginInit = (): AuthActions => ({
  type: LOGIN_INIT,
});
export const loginSucess = (user: User): AuthActions => ({
  type: LOGIN_SUCCESS,
  payload: {user},
});
export const loginError = (): AuthActions => ({
  type: LOGIN_ERROR,
});
export const logoutAction = (): AuthActions => ({
  type: LOGOUT,
});
