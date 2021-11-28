import React, {createContext, FC, useContext} from 'react';
import {useImmerReducer} from 'use-immer';
import {HotelReducer, HotelState} from '../reducers/HotelReducer';
import {hotelError, hotelInit, hotelSuccess} from '../actions/HotelAction';
import {useToast} from 'native-base';
import api from '../config/axios';
import {HotelResponse} from '../interfaces/appInterfaces';

type HotelContextProps = HotelState & {
  getHotels: (page: number) => void;
};

const InitialData: HotelState = {
  data: null,
  isLoading: false,
};

const HotelContext = createContext<HotelContextProps>({} as HotelContextProps);

const HotelProvider: FC = ({children}) => {
  const [state, dispatch] = useImmerReducer<HotelState>(
    HotelReducer,
    InitialData,
    e => e,
  );
  const toast = useToast();
  const getHotels = async (page: number) => {
    dispatch(hotelInit());
    try {
      const resHotels = await api.get<HotelResponse>(
        `/hotel?PageNumber=${page}`,
      );
      dispatch(hotelSuccess(resHotels.data));
    } catch (e) {
      dispatch(hotelError());
      toast.show({
        status: 'error',
        title: 'Error , intente de nuevo más tarde',
      });
    }
  };
  return (
    <HotelContext.Provider
      value={{
        data: state.data,
        isLoading: state.isLoading,
        getHotels: getHotels,
      }}>
      {children}
    </HotelContext.Provider>
  );
};
export const useHotel = () => useContext(HotelContext);
export default HotelProvider;
