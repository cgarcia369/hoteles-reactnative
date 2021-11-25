import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import HotelScreen from './../screen/HotelScreen';
import TabNavigator from './TabNavigator';
import CreateHotelScreen from './../screen/CreateHotelScreen';

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Crear Hotel" component={CreateHotelScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
