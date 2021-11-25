import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HotelScreen from './../screen/HotelScreen';
import CreateHotelScreen from './../screen/CreateHotelScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createMaterialTopTabNavigator();

const HotelesNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Group>
        <Tab.Screen name="Hotels" component={HotelScreen} />
      </Tab.Group>
      <Tab.Group screenOptions={{presentation: 'modal'}}>
        <Tab.Screen name="MyModal" component={CreateHotelScreen} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default HotelesNavigator;
