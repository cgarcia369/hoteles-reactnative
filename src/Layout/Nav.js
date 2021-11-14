import React, {useState} from 'react';
import {
  Box,
  HStack,
  Slide,
  HamburgerIcon,
  Pressable,
  VStack,
  Button,
  Text,
  Image,
  CloseIcon,
} from 'native-base';
import {Dimensions, TouchableOpacity} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Nav = ({state, descriptors, navigation, position}) => {
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
        <VStack w={'full'} h={'full'} position={'absolute'} zIndex={10}>
          <HStack w={'full'} justifyContent={'center'} alignItems={'center'}>
            <Text
              ml={'5'}
              fontSize={'3xl'}
              color={'white'}
              fontWeight={'light'}>
              Hoteles BB
            </Text>
            <Box
              flexGrow={1}
              alignItems={'flex-end'}
              justifyContent={'flex-end'}>
              <Button
                bgColor={'transparent'}
                onPress={() => setOpenNav(!openNav)}>
                <HamburgerIcon color={'warning.300'} size={'9'} />
              </Button>
            </Box>
          </HStack>
          <HStack
            w={'full'}
            flex={1}
            mb={'2'}
            justifyContent={'center'}
            alignItems={'center'}>
            {state.routes.map((route, index) => {
              const {options} = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;

              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };

              const onLongPress = () => {
                navigation.emit({
                  type: 'tabLongPress',
                  target: route.key,
                });
              };

              return (
                <Pressable
                  onPress={onPress}
                  onLongPress={onLongPress}
                  flex={1}
                  bg={'transparent'}>
                  <Text
                    fontSize={'xl'}
                    color={isFocused ? 'orange.300' : 'white'}
                    textAlign={'center'}>
                    {label}
                  </Text>
                </Pressable>
              );
            })}
          </HStack>
        </VStack>
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
