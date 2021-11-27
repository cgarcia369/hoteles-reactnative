import React from 'react';
import {NativeBaseProvider} from 'native-base';
import AuthProvider from './src/context/AuthContext';
import MainNavigator from './src/navigation/MainNavigator';
import {NavigationContainer} from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AuthProvider>
          <MainNavigator />
        </AuthProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
