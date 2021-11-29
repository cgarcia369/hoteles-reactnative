import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Nav from '../layout/Nav';

import HotelScreen from '../screen/HotelScreen';
import CountryScreen from '../screen/CountryScreen';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <Nav {...props} />}>
      <Tab.Screen name="Hoteles" component={HotelScreen} />
      <Tab.Screen name="Paises" component={CountryScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
