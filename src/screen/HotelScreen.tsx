import React, {useEffect, useState} from 'react';
import {useHotel} from '../context/HotelContext';
import {Box, FlatList, Icon, Pressable} from 'native-base';
import HotelItem from '../components/HotelItem';
import Pagination from '../components/Pagination';
import {useNavigation} from '@react-navigation/native';
import {useCountry} from '../context/CountryContext';
import {useAuth} from '../context/AuthContext';
import Feather from 'react-native-vector-icons/Feather';

const HotelScreen = () => {
  const navigation = useNavigation();

  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    getHotels(page);
    getCountries();
  }, [page]);
  const {user} = useAuth();
  const {data, isLoading, getHotels} = useHotel();
  const {getCountries} = useCountry();
  return (
    <Box h={'full'} p="5" position={'relative'}>
      {user && user.rol === 'Administrator' ? (
        <Box
          bg={'orange.200'}
          shadow={3}
          p={'2'}
          borderRadius={'full'}
          position={'absolute'}
          bottom={'16'}
          right={0}
          m={'3'}
          justifyContent={'center'}
          alignItems={'center'}
          zIndex={99}>
          <Pressable onPress={() => navigation.navigate('cHotel' as never)}>
            <Icon
              as={Feather}
              name={'plus'}
              size={'xl'}
              textAlign={'center'}
              color={'gray.600'}
            />
          </Pressable>
        </Box>
      ) : null}

      <FlatList
        onRefresh={() => getHotels(page)}
        refreshing={isLoading}
        data={data?.data}
        renderItem={({item}) => (
          <HotelItem
            onPress={e =>
              user && user.rol === 'Administrator'
                ? navigation.navigate('dHotel' as never, e as never)
                : () => {}
            }
            data={item}
          />
        )}
      />
      <Pagination
        onPageChange={e => setPage(e)}
        page={page}
        hasPreviousPage={data?.metadata.hasPreviousPage}
        hasNextPage={data?.metadata.hasNextPage}
        isLoading={isLoading}
      />
    </Box>
  );
};

export default HotelScreen;
