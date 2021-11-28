import React from 'react';
import {
  HStack,
  Divider,
  Text,
  VStack,
  Heading,
  Badge,
  Avatar,
  Box,
} from 'native-base';
import {Hotel} from '../interfaces/appInterfaces';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

type HotelItemProps = Hotel;
const HotelItem = ({data}: {data: HotelItemProps}) => {
  return (
    <>
      <Box w="full" bg={'white'} p="3" borderRadius={'xl'} shadow={3} my={'3'}>
        <VStack w="full">
          <Heading textTransform={'capitalize'} textAlign={'center'}>
            {data.name}
          </Heading>
          <Text textAlign={'center'}>{data.country.name}</Text>
          <HStack w="full" justifyContent={'center'} my={'2'}>
            <Badge
              variant={'outline'}
              mx={'2'}
              colorScheme={'success'}>{`${data.rating} Estrellas`}</Badge>
            <Badge variant={'outline'} mx={'2'} colorScheme={'info'}>
              {data.address}
            </Badge>
            <Badge variant={'outline'} mx={'2'} colorScheme={'info'}>
              Hotel
            </Badge>
          </HStack>
        </VStack>
      </Box>
      <Divider />
    </>
  );
};

export default HotelItem;
