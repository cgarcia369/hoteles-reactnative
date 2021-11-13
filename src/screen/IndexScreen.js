import {NativeBaseProvider, View} from 'native-base';
import React from 'react';
import {Text} from 'react-native';
import Nav from './../Layout/Nav';
const IndexScreen = () => {
  return (
    <NativeBaseProvider>
      <View>
        <Text>Test</Text>
      </View>
    </NativeBaseProvider>
  );
};

export default IndexScreen;
