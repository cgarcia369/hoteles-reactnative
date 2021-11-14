import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {NativeBaseProvider} from 'native-base';

import Nav from './src/Layout/Nav';

import IndexScreen from './src/screen/IndexScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Tab.Navigator tabBar={props => <Nav {...props} />}>
          <Tab.Screen name="Hoteles" component={IndexScreen} />
        </Tab.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
