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
import AccountScreen from '../screen/AccountScreen';

import {useAuth} from '../context/AuthContext';
import Spinner from '../components/Spinner';
import UnAuthScreen from '../screen/UnAuthScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const {status, user} = useAuth();
  if (status === 'loading') {
    return <Spinner />;
  }
  return (
    <Stack.Navigator
      initialRouteName="unauth"
      screenOptions={{animationEnabled: true, headerTitleAlign: 'center'}}>
      {status !== 'unauth' && (
        <>
          <Stack.Screen
            name="home"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="account"
            options={{headerTitle: 'Cuenta'}}
            component={AccountScreen}
          />
        </>
      )}
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
          <Stack.Screen
            name="unauth"
            options={{headerTitle: 'Cuenta'}}
            component={UnAuthScreen}
          />
          <Stack.Screen
            name="login"
            options={{headerTitle: 'Iniciar sesion'}}
            component={LoginScreen}
          />
          <Stack.Screen
            name="register"
            options={{headerTitle: 'Crear cuenta'}}
            component={RegisterScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
