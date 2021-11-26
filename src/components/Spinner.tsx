import React, {useEffect} from 'react';

import {
  useSharedValue,
  withTiming,
  Easing,
  cancelAnimation,
  withRepeat,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {Icon, Box} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Spinner = () => {
  const rotation = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  }, [rotation.value]);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      200,
    );
    return () => cancelAnimation(rotation);
  }, []);
  return (
    <Box
      w="full"
      h="full"
      display="flex"
      justifyContent="center"
      alignItems="center">
      <Icon
        size="lg"
        as={MaterialCommunityIcons}
        name="loading"
        color="white"
        mx="2"
        style={animatedStyles}
      />
    </Box>
  );
};

export default Spinner;
