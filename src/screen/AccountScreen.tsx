import React from 'react';
import {Box, Button, Icon, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAuth} from '../context/AuthContext';

const AccountScreen = () => {
  const {status} = useAuth();
  const navigation = useNavigation();
  return (
    <Box
      p="8"
      overflowY="scroll"
      overflowX="hidden"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center">
      {status === 'auth' ? (
        <Text>asdf </Text>
      ) : (
        <>
          <Icon size="56" as={Material} name="incognito" color="gray.800" />
          <Text fontSize="xl">Parece que no has iniciado sesion</Text>
          <Button
            w="full"
            my="4"
            py="3"
            onPress={() => navigation.navigate('login')}>
            <Text fontSize="xl" color="white">
              Iniciar sesion
            </Text>
          </Button>
          <Button
            w="full"
            my="4"
            py="3"
            onPress={() => navigation.navigate('register')}>
            <Text fontSize="xl" color="white">
              Registrarse
            </Text>
          </Button>
        </>
      )}
    </Box>
  );
};

export default AccountScreen;
