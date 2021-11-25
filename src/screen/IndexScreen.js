import {NativeBaseProvider, View} from 'native-base';
import React from 'react';
import {Text} from 'react-native';
import Nav from './../Layout/Nav';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import LoginScreen from './LoginScreen';

const Tab = createMaterialBottomTabNavigator();

const IndexScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={LoginScreen} />
      <Tab.Screen name="Peed" component={LoginScreen} />
    </Tab.Navigator>
  );
};

export default IndexScreen;
