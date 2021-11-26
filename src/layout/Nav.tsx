import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Box,
  HStack,
  HamburgerIcon,
  Pressable,
  Button,
  Text,
  Image,
  Icon,
} from 'native-base';

const Nav = ({state, descriptors, navigation, position}) => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <Box
        roundedBottom={'xl'}
        style={{height: 60}}
        justifyContent={'center'}
        alignItems={'center'}
        overflow={'hidden'}
        position={'relative'}>
        <Box
          w={'full'}
          h={'full'}
          position={'absolute'}
          zIndex={10}
          justifyContent={'center'}
          alignItems={'center'}>
          <HStack w={'full'} justifyContent={'center'} alignItems={'center'}>
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
            <Box alignItems={'flex-end'} justifyContent={'flex-end'}>
              <Pressable onPress={() => navigation.navigate('account')}>
                <Icon
                  size="lg"
                  as={AntDesign}
                  name="user"
                  color="white"
                  mx="2"
                />
              </Pressable>
            </Box>
          </HStack>
        </Box>
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
