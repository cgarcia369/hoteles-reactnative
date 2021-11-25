import React from 'react';
import {NativeBaseProvider} from 'native-base';
import AuthProvider from './src/context/AuthContext';

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider />
    </NativeBaseProvider>
  );
}
