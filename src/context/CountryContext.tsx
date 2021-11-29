import React, {createContext, useContext, FC} from 'react';
import {CountryReducer, CountryState} from '../reducers/CountryReducer';
import {useImmerReducer} from 'use-immer';
import api from '../config/axios';
import {
  Country,
  CountryCreateRequest,
  CountryEditRequest,
  CountryResponse,
} from '../interfaces/appInterfaces';
import {
  countryCreateError,
  countryCreateInit,
  countryCreateSuccess,
  countryDeleteError,
  countryDeleteInit,
  countryDeleteSuccess,
  countryEditError,
  countryEditInit,
  countryEditSuccess,
  countryError,
  countryInit,
  countrySuccess,
} from '../actions/CountryActions';
import {useToast} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {
  hotelCreateError,
  hotelCreateInit,
  hotelCreateSuccess,
} from '../actions/HotelAction';

const InitialState: CountryState = {
  data: null,
  isLoading: false,
  isDeleteLoading: false,
  isEditLoading: false,
  isCreateLoading: false,
};

type CountryContextProps = CountryState & {
  getCountries: () => void;
  createCountry: (data: CountryCreateRequest) => void;
  editCountry: (data: CountryEditRequest) => void;
  deleteCountry: (id: number) => void;
};

const CountryContext = createContext<CountryContextProps>(
  {} as CountryContextProps,
);

export const CountryProvider: FC = ({children}) => {
  const navigation = useNavigation();
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
  const createCountry = async (data: CountryCreateRequest) => {
    dispatch(countryCreateInit());
    try {
      const resCreate = await api.post('/Country', data);
      const country = await api.get<Country>(resCreate.headers.location);
      dispatch(countryCreateSuccess(country.data));
      navigation.navigate('Paises' as never);
      toast.show({
        status: 'success',
        title: 'Pais creado correctamente',
      });
    } catch (e) {
      dispatch(countryCreateError());
      toast.show({
        status: 'error',
        title: 'Error , intente de nuevo más tarde',
      });
    }
  };
  const editCountry = async (data: CountryEditRequest) => {
    console.log('aja');
    dispatch(countryEditInit());
    try {
      await api.put(`/Country/${data.id}`, data);
      dispatch(countryEditSuccess(data));
      navigation.navigate('Paises' as never);
      toast.show({
        status: 'success',
        title: 'Pais editado correctamente',
      });
    } catch (e) {
      dispatch(countryEditError());
      toast.show({
        status: 'error',
        title: 'Error , intente de nuevo más tarde',
      });
    }
  };
  const deleteCountry = async (id: number) => {
    dispatch(countryDeleteInit());
    try {
      await api.delete(`/Country/${id}`);
      dispatch(countryDeleteSuccess(id));
      navigation.navigate('Paises' as never);
      toast.show({
        status: 'success',
        title: 'Pais eliminado correctamente',
      });
    } catch (e) {
      dispatch(countryDeleteError());
      toast.show({
        status: 'error',
        title: 'Error , intente de nuevo más tarde',
      });
    }
  };
  return (
    <CountryContext.Provider
      value={{
        ...state,
        getCountries,
        editCountry,
        deleteCountry,
        createCountry,
      }}>
      {children}
    </CountryContext.Provider>
  );
};
export const useCountry = () => useContext(CountryContext);
