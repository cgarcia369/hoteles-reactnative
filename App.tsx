import React from 'react';
import {NativeBaseProvider} from 'native-base';
import AuthProvider from './src/context/AuthContext';
import MainNavigator from './src/navigation/MainNavigator';
import {NavigationContainer} from '@react-navigation/native';
import HotelProvider from './src/context/HotelContext';
import {Provider as PaperProvider} from 'react-native-paper';
import {CountryProvider} from './src/context/CountryContext';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <NativeBaseProvider>
          <AuthProvider>
            <HotelProvider>
              <CountryProvider>
                <MainNavigator />
              </CountryProvider>
            </HotelProvider>
          </AuthProvider>
        </NativeBaseProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}
