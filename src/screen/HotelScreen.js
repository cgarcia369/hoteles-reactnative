import {Box, Pressable, Text} from 'native-base';
import React from 'react';
const HotelScreen = ({navigation}) => {
  return (
    <Box>
      <Text>Hotels Index</Text>
      <Pressable onPress={() => navigation.navigate('Crear Hotel')}>
        <Text>asdf</Text>
      </Pressable>
    </Box>
  );
};

export default HotelScreen;
