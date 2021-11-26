import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './TabNavigator';

import CreateHotelScreen from '../screen/CreateHotelScreen';
import HotelEditScreen from '../screen/HotelEditScreen';
import DetailsHotelScreen from '../screen/DetailsHotelScreen';
import DetailsCountryScreen from '../screen/DetailsCountryScreen';
import CreateCountryScreen from '../screen/CreateCountryScreen';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import {useAuth} from '../context/AuthContext';
import AccountScreen from "../screen/AccountScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  const {status, user} = useAuth();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      {status !== 'unauth' && user?.rol === 'ADMINISTRATOR' ? (
        <>
          <Stack.Screen
            name="cHotel"
            options={{headerTitle: 'Crear hotel'}}
            component={CreateHotelScreen}
          />
          <Stack.Screen
            name="eHotel"
            options={{headerTitle: 'Editar hotel'}}
            component={HotelEditScreen}
          />
          <Stack.Screen
            name="dHotel"
            options={{headerTitle: 'Detalles hotel'}}
            component={DetailsHotelScreen}
          />
          <Stack.Screen
            name="cPais"
            options={{headerTitle: 'Crear pais'}}
            component={CreateCountryScreen}
          />
          <Stack.Screen
            name="ePais"
            options={{headerTitle: 'Editar pais'}}
            component={HotelEditScreen}
          />
          <Stack.Screen
            name="dPais"
            options={{headerTitle: 'Detalles pais'}}
            component={DetailsCountryScreen}
          />
        </>
      ) : (
        <>
	        <Stack.Screen name="account" options={{headerTitle: 'Cuenta'}} component={AccountScreen}/>
          <Stack.Screen name="login" options={{headerTitle: 'Iniciar sesion'}} component={LoginScreen} />
          <Stack.Screen name="register" options={{headerTitle: 'Crear cuenta'}} component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
