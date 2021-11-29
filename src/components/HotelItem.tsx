import React from 'react';
import {
  HStack,
  Divider,
  Text,
  VStack,
  Heading,
  Badge,
  Pressable,
} from 'native-base';
import {Hotel} from '../interfaces/appInterfaces';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

type HotelItemProps = {
  data: Hotel;
  onPress?: (data: Hotel) => void;
};
const HotelItem = ({data, onPress}: HotelItemProps) => {
  return (
    <>
      <Pressable
        onPress={() => onPress !== undefined && onPress(data)}
        w="full"
        bg={'white'}
        p="3"
        borderRadius={'xl'}
        shadow={3}
        my={'3'}>
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
      </Pressable>
      <Divider />
    </>
  );
};
export default HotelItem;
