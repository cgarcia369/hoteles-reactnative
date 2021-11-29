import React, {createContext, FC, useContext} from 'react';
import {useImmerReducer} from 'use-immer';
import {HotelReducer, HotelState} from '../reducers/HotelReducer';
import {
  hotelCreateError,
  hotelCreateInit,
  hotelCreateSuccess,
  hotelDeleteError,
  hotelDeleteInit,
  hotelDeleteSuccess,
  hotelEditError,
  hotelEditInit,
  hotelEditSuccess,
  hotelError,
  hotelInit,
  hotelSuccess,
} from '../actions/HotelAction';
import {useToast} from 'native-base';
import api from '../config/axios';
import {
  Hotel,
  HotelCreateRequest,
  HotelEditRequest,
  HotelResponse,
} from '../interfaces/appInterfaces';
import {useNavigation} from '@react-navigation/native';

type HotelContextProps = HotelState & {
  getHotels: (page: number) => void;
  editHotel: (data: HotelEditRequest) => void;
  deleteHotel: (id: number) => void;
  createHotel: (data: HotelCreateRequest) => void;
};

const InitialData: HotelState = {
  data: null,
  isLoading: false,
  isEditLoading: false,
  isCreateLoading: false,
  isDeleteLoading: false,
};

const HotelContext = createContext<HotelContextProps>({} as HotelContextProps);

const HotelProvider: FC = ({children}) => {
  const navigation = useNavigation();
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
  const editHotel = async (data: HotelEditRequest) => {
    dispatch(hotelEditInit());
    try {
      await api.put(`/Hotel/${data.id}`, data);
      dispatch(hotelEditSuccess(data));
      navigation.navigate('Hoteles' as never);
      toast.show({
        status: 'success',
        title: 'Hotel editado correctamente',
      });
    } catch (e) {
      dispatch(hotelEditError());
      toast.show({
        status: 'error',
        title: 'Error , intente de nuevo más tarde',
      });
    }
  };
  const deleteHotel = async (id: number) => {
    dispatch(hotelDeleteInit());
    try {
      await api.delete(`/Hotel/${id}`);
      dispatch(hotelDeleteSuccess(id));
      navigation.navigate('Hoteles' as never);
      toast.show({
        status: 'success',
        title: 'Hotel eliminado correctamente',
      });
    } catch (e) {
      dispatch(hotelDeleteError());
      toast.show({
        status: 'error',
        title: 'Error , intente de nuevo más tarde',
      });
    }
  };

  const createHotel = async (data: HotelCreateRequest) => {
    dispatch(hotelCreateInit());
    try {
      const resCreate = await api.post('/Hotel', data);
      const hotel = await api.get<Hotel>(resCreate.headers.location);
      dispatch(hotelCreateSuccess(hotel.data));
      navigation.navigate('Hoteles' as never);
      toast.show({
        status: 'success',
        title: 'Hotel creado correctamente',
      });
    } catch (e) {
      dispatch(hotelCreateError());
      toast.show({
        status: 'error',
        title: 'Error , intente de nuevo más tarde',
      });
    }
  };
  return (
    <HotelContext.Provider
      value={{
        ...state,
        getHotels,
        editHotel,
        deleteHotel,
        createHotel,
      }}>
      {children}
    </HotelContext.Provider>
  );
};
export const useHotel = () => useContext(HotelContext);
export default HotelProvider;
