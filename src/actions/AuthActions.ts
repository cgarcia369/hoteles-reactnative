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
import {User} from '../interfaces/appInterfaces';

export type AuthActions =
  | {type: typeof AUTH_INIT}
  | {type: typeof AUTH_SUCCESS; payload: {user: User}}
  | {type: typeof AUTH_ERROR}
  | {type: typeof LOGIN_INIT}
  | {type: typeof LOGIN_SUCCESS; payload: {user: User}}
  | {type: typeof LOGIN_ERROR}
  | {type: typeof LOGOUT}
  | {type: typeof REGISTER_INIT}
  | {type: typeof REGISTER_SUCCESS}
  | {type: typeof REGISTER_ERROR};

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

export const registerInit = () :AuthActions =>({
  type:REGISTER_INIT
})
export const registerSuccess = () :AuthActions =>({
  type:REGISTER_SUCCESS
})
export const registerError = () :AuthActions =>({
  type:REGISTER_ERROR
})