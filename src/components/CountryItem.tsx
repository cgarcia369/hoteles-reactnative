import React from 'react';
import {HStack, Divider, VStack, Heading, Badge, Pressable} from 'native-base';
import {Country, Hotel} from '../interfaces/appInterfaces';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

type CountryItemProps = {
  data: Country;
  onPress?: (data: Country) => void;
};
const CountryItem = ({data, onPress}: CountryItemProps) => {
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
          <HStack w="full" justifyContent={'center'} my={'2'}>
            <Badge
              variant={'outline'}
              mx={'2'}
              colorScheme={'success'}>{`${data.shortName}`}</Badge>
            <Badge variant={'outline'} mx={'2'} colorScheme={'info'}>
              Pais
            </Badge>
          </HStack>
        </VStack>
      </Pressable>
      <Divider />
    </>
  );
};
export default CountryItem;
