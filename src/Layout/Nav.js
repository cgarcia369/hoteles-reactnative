import React, {useState} from 'react';
import {
  Box,
  HStack,
  Slide,
  HamburgerIcon,
  ArrowBackIcon,
  VStack,
  Button,
  Text,
  Image,
  CloseIcon,
} from 'native-base';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <Box zIndex={999}>
        <Slide in={openNav} placement={'right'}>
          <VStack
            h={windowHeight}
            w={windowWidth}
            bgColor={'gray.800'}
            p={'3'}
            justifyContent={'center'}>
            <Button
              position={'absolute'}
              top={0}
              right={0}
              m={'4'}
              bgColor={'transparent'}
              onPress={() => setOpenNav(!openNav)}>
              <CloseIcon color={'warning.300'} size={'8'} />
            </Button>
            <Box my={'4'}>
              <Text
                color={'white'}
                fontSize={'2xl'}
                fontAlign={'center'}
                mx={'auto'}>
                Hoteles
              </Text>
            </Box>
            <Box my={'4'}>
              <Text
                color={'white'}
                fontSize={'2xl'}
                fontAlign={'center'}
                mx={'auto'}>
                Cuenta
              </Text>
            </Box>
          </VStack>
        </Slide>
      </Box>
      <Box
        roundedBottom={'xl'}
        style={{height: 90}}
        justifyContent={'center'}
        alignItems={'center'}
        overflow={'hidden'}
        position={'relative'}>
        <HStack
          justifyContent={'center'}
          alignItems={'center'}
          w={'full'}
          h={'full'}
          position={'absolute'}
          zIndex={10}>
          <Text ml={'5'} fontSize={'3xl'} color={'white'} fontWeight={'light'}>
            Hoteles BB
          </Text>
          <Box flexGrow={1} alignItems={'flex-end'} justifyContent={'flex-end'}>
            <Button
              bgColor={'transparent'}
              onPress={() => setOpenNav(!openNav)}>
              <HamburgerIcon color={'warning.300'} size={'10'} />
            </Button>
          </Box>
        </HStack>
        <Image
          position={'absolute'}
          w={'full'}
          h={'full'}
          zIndex={5}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg',
          }}
          alt="test"
        />
        <Box
          position={'absolute'}
          w={'full'}
          h={'full'}
          zIndex={6}
          bgColor={'black'}
          opacity={'60'}
        />
      </Box>
    </>
  );
};

export default Nav;
