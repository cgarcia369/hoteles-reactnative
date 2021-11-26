import React, {createContext, FC, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useImmerReducer} from 'use-immer';
import {useToast} from 'native-base';
import api from '../config/axios';

import {AuthReducer, AuthState} from '../reducers/AuthReducer';
import {
  authError,
  authSucess,
  loginError,
  loginInit,
  loginSucess,
  logoutAction,
} from '../actions/AuthActions';

import {
  LoginRequest,
  LoginResponse,
  TokenCheck,
} from '../interfaces/appInterfaces';

const initialData: AuthState = {
  status: 'loading',
  user: null,
};
type AuthContextProps = AuthState & {
  login: (user: LoginRequest) => void;
  logout: () => void;
};
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: FC = ({children}) => {
  const toast = useToast();
  const [state, dispatch] = useImmerReducer(AuthReducer, initialData, e => e);
  const firstCall = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
      if (!token) {
        dispatch(authError());
      } else {
        const resTokenCheck = await api.get<TokenCheck>('/Account');
        console.log(resTokenCheck);
        dispatch(authSucess(resTokenCheck.data));
      }
    } catch (e) {
      dispatch(authError());
      await AsyncStorage.removeItem('token');
    }
  };
  useEffect(() => {
    firstCall();
  }, []);
  const login = async (user: LoginRequest) => {
    try {
      dispatch(loginInit());
      const resLogin = await api.post<LoginResponse>('/Account/login', user);
      dispatch(loginSucess(resLogin.data.user));
      await AsyncStorage.setItem('token', resLogin.data.token);
      toast.show({
        status: 'success',
        description: `Hola ${resLogin.data.user.email}`,
      });
    } catch (e) {
      dispatch(loginError());
      toast.show({
        status: 'error',
        description: 'Email o password incorrectos',
      });
    }
  };
  const logout = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(logoutAction());
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        user: state.user,
        status: state.status,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
