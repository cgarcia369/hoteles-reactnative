import React, {useEffect, useState} from 'react';
import {useHotel} from '../context/HotelContext';
import {Box, FlatList, HStack, Icon, Text, Pressable} from 'native-base';
import HotelItem from '../components/HotelItem';
import Evil from 'react-native-vector-icons/EvilIcons';

const HotelScreen = () => {
  const {data, isLoading, getHotels} = useHotel();
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    getHotels(page);
  }, []);
  useEffect(() => {
    console.log('hola');
    console.log(page);
    getHotels(page);
  }, [page]);
  console.log(data?.metadata.hasNextPage);
  return (
    <Box h={'full'} p="5">
      <FlatList
        onRefresh={() => getHotels(page)}
        refreshing={isLoading}
        data={data?.data}
        renderItem={({item}) => <HotelItem data={item} />}
      />
      <HStack
        w={'full'}
        justifyContent={'center'}
        alignItems={'center'}
        mt={'4'}>
        <Pressable
          onPress={() => setPage(page - 1)}
          pl={'2'}
          pr={'4'}
          borderRadius={'xl'}
          bg={'orange.100'}
          disabled={!data?.metadata.hasPreviousPage || isLoading}
          mx={'2'}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}>
          <Icon
            as={Evil}
            name={'chevron-left'}
            size={'md'}
            color={data?.metadata.hasPreviousPage ? 'black' : 'warmGray.400'}
          />
          <Text
            color={data?.metadata.hasPreviousPage ? 'black' : 'warmGray.400'}>
            Anterior
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setPage(page + 1)}
          pl={'4'}
          pr={'2'}
          borderRadius={'xl'}
          bg={'orange.100'}
          disabled={!data?.metadata.hasNextPage || isLoading}
          mx={'2'}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}>
          <Text color={data?.metadata.hasNextPage ? 'black' : 'warmGray.400'}>
            Siguiente
          </Text>
          <Icon
            as={Evil}
            name={'chevron-right'}
            size={'md'}
            color={data?.metadata.hasNextPage ? 'black' : 'warmGray.400'}
          />
        </Pressable>
      </HStack>
    </Box>
  );
};

export default HotelScreen;
