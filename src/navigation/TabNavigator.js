import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HotelScreen from '../screen/HotelScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Nav from './../Layout/Nav';
const Tab = createMaterialTopTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <Nav {...props} />}>
      <Tab.Screen name="Hoteles" component={HotelScreen} />
      <Tab.Screen name="Ciudades" component={HotelScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
