import React, {createContext, useContext, FC} from 'react';
import {CountryReducer, CountryState} from '../reducers/CountryReducer';
import {useImmerReducer} from 'use-immer';
import api from '../config/axios';
import {CountryResponse} from '../interfaces/appInterfaces';
import {
  countryError,
  countryInit,
  countrySuccess,
} from '../actions/CountryActions';
import {useToast} from 'native-base';

const InitialState: CountryState = {
  data: null,
  isLoading: false,
};

type CountryContextProps = CountryState & {
  getCountries: () => void;
};

const CountryContext = createContext<CountryContextProps>(
  {} as CountryContextProps,
);

export const CountryProvider: FC = ({children}) => {
  const toast = useToast();
  const [state, dispatch] = useImmerReducer(
    CountryReducer,
    InitialState,
    e => e,
  );
  const getCountries = async () => {
    dispatch(countryInit());
    try {
      const resHotels = await api.get<CountryResponse>('/Country');
      dispatch(countrySuccess(resHotels.data));
    } catch (e) {
      dispatch(countryError());
      toast.show({
        status: 'error',
        title: 'Error , intente de nuevo más tarde',
      });
    }
  };
  return (
    <CountryContext.Provider value={{...state, getCountries}}>
      {children}
    </CountryContext.Provider>
  );
};
export const useCountry = () => useContext(CountryContext);
