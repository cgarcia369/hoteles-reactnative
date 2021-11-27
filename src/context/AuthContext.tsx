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
import {useNavigation} from '@react-navigation/native';

const initialData: AuthState = {
  status: 'loading',
  user: null,
  loginIsLoading: false,
};
type AuthContextProps = AuthState & {
  login: (user: LoginRequest) => void;
  logout: () => void;
};
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: FC = ({children}) => {
  const navigation = useNavigation();
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
        dispatch(authSucess(resTokenCheck.data));
        toast.show({
          status: 'success',
          title: `Bienvenido ${resTokenCheck.data.firstName}`,
        });
        navigation.navigate('home');

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
      await AsyncStorage.setItem('token', resLogin.data.token);
      dispatch(loginSucess(resLogin.data.user));
      navigation.navigate('home');
      toast.show({
        status: 'success',
        title: `Bienvenido ${resLogin.data.user.firstName}`,
      });
    } catch (e) {
      dispatch(loginError());
      toast.show({
        status: 'error',
        title: 'Email o password incorrectos',
      });
    }
  };
  const logout = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(logoutAction());
    navigation.navigate('unauth');
    toast.show({
      status: 'info',
      title: 'Bye bye',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        user: state.user,
        status: state.status,
        logout,
        loginIsLoading: state.loginIsLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
