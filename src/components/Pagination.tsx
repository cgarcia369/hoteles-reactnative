import React from 'react';
import {HStack, Icon, Pressable, Text} from 'native-base';
import Evil from 'react-native-vector-icons/EvilIcons';

type PaginationProps = {
  onPageChange: (page: number) => void;
  page: number;
  hasPreviousPage: boolean | undefined;
  hasNextPage: boolean | undefined;
  isLoading: boolean;
};
const Pagination = ({
  onPageChange,
  page,
  hasPreviousPage,
  hasNextPage,
  isLoading,
}: PaginationProps) => {
  return (
    <HStack w={'full'} justifyContent={'center'} alignItems={'center'} mt={'4'}>
      <Pressable
        onPress={() => onPageChange(page - 1)}
        pl={'2'}
        pr={'4'}
        borderRadius={'xl'}
        bg={'orange.100'}
        disabled={!hasPreviousPage || isLoading}
        mx={'2'}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}>
        <Icon
          as={Evil}
          name={'chevron-left'}
          size={'md'}
          color={hasPreviousPage ? 'black' : 'warmGray.400'}
        />
        <Text color={hasPreviousPage ? 'black' : 'warmGray.400'}>Anterior</Text>
      </Pressable>
      <Pressable
        onPress={() => onPageChange(page + 1)}
        pl={'4'}
        pr={'2'}
        borderRadius={'xl'}
        bg={'orange.100'}
        disabled={!hasNextPage || isLoading}
        mx={'2'}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}>
        <Text color={hasNextPage ? 'black' : 'warmGray.400'}>Siguiente</Text>
        <Icon
          as={Evil}
          name={'chevron-right'}
          size={'md'}
          color={hasNextPage ? 'black' : 'warmGray.400'}
        />
      </Pressable>
    </HStack>
  );
};

export default Pagination;
