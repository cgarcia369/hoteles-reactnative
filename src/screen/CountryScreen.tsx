import React, {useEffect} from 'react';
import {Box, FlatList, Icon, Pressable} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useCountry} from '../context/CountryContext';
import {useAuth} from '../context/AuthContext';
import Feather from 'react-native-vector-icons/Feather';
import CountryItem from '../components/CountryItem';

const CountryScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    getCountries();
  }, []);
  const {user} = useAuth();
  const {isLoading, data, getCountries} = useCountry();
  return (
    <Box h={'full'} p="5" position={'relative'}>
      <Box
        bg={'orange.200'}
        shadow={3}
        p={'2'}
        borderRadius={'full'}
        position={'absolute'}
        bottom={0}
        right={0}
        m={'4'}
        justifyContent={'center'}
        alignItems={'center'}
        zIndex={99}>
        <Pressable onPress={() => navigation.navigate('cPais' as never)}>
          <Icon
            as={Feather}
            name={'plus'}
            size={'xl'}
            textAlign={'center'}
            color={'gray.600'}
          />
        </Pressable>
      </Box>
      <FlatList
        onRefresh={() => getCountries()}
        refreshing={isLoading}
        data={data}
        renderItem={({item}) => (
          <CountryItem
            onPress={e =>
              user && user.rol === 'Administrator'
                ? navigation.navigate('dPais' as never, e as never)
                : () => {}
            }
            data={item}
          />
        )}
      />
    </Box>
  );
};

export default CountryScreen;
