import React from 'react';
import {NativeBaseProvider, Box, Pressable, Text} from 'native-base';
import {NativeRouter, Routes, Route} from 'react-router-native';
import IndexScreen from './src/screen/IndexScreen.js';
export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<IndexScreen />} />
      </Routes>
    </NativeRouter>
  );
}
