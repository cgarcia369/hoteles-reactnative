import React from 'react';
import {ScrollView, Avatar, Text, Button, Box, Badge} from 'native-base';
import {useAuth} from '../context/AuthContext';

const AccountScreen = () => {
  const {user, logout} = useAuth();
  return (
    <ScrollView
      _contentContainerStyle={{
        h: 'full',
        p: '8',
        overflowY: 'scroll',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
      <Avatar
        size={'56'}
        source={{
          uri: 'https://i.pinimg.com/originals/09/6d/f0/096df0eb195b8f0d9475924f9a1e9425.jpg',
        }}
      />
      <Text
        color="gray.600"
        fontSize="3xl"
        mt="5">{`${user?.firstName} ${user?.lastName}`}</Text>
      <Badge mt="2" colorScheme="success">{user?.rol}</Badge>
      <Box
        w="full"
        display="flex"
        flexGrow={2}
        justifyContent="flex-end"
        alignItems="center">
        <Button
          onPress={logout}
          w="full"
          p="4"
          bg="orange.400"
          _pressed={{bg: 'orange.200'}}>
          <Text fontSize="md" color="white">
            Logout
          </Text>
        </Button>
      </Box>
    </ScrollView>
  );
};

export default AccountScreen;
