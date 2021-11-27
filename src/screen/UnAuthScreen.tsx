import React from 'react';
import {ScrollView, Button, Icon, Text} from 'native-base';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const UnAuthScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      _contentContainerStyle={{
        p: '8',
        overflowY: 'scroll',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
      <>
        <Icon size="56" as={Material} name="incognito" color="gray.800" />
        <Text fontSize="xl">Parece que no has iniciado sesion</Text>
        <Button
          _pressed={{bg: 'orange.200'}}
          bg="orange.300"
          w="full"
          my="4"
          py="3"
          onPress={() => navigation.navigate('login')}>
          <Text fontSize="xl" color="white">
            Iniciar sesion
          </Text>
        </Button>
        <Button
          _pressed={{bg: 'orange.200'}}
          bg="orange.300"
          w="full"
          my="4"
          py="3"
          onPress={() => navigation.navigate('register')}>
          <Text fontSize="xl" color="white">
            Registrarse
          </Text>
        </Button>
      </>
    </ScrollView>
  );
};

export default UnAuthScreen;
