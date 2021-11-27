import React, {useEffect} from 'react';

import Animated, {
  withSequence,
  useSharedValue,
  withTiming,
  Easing,
  cancelAnimation,
  withRepeat,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {Icon, Box} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Spinner = () => {
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withRepeat(
            withSequence(
              withTiming(360 + 'deg', {duration: 1000}),
              withTiming(0 + 'deg', {duration: 1000}),
            ),
            -1,
            false,
          ) as unknown as string,
        },
      ],
    };
  });
  return (
    <Animated.View style={[stylesLoader.box,style]}>
      <Icon
        size="4xl"
        as={MaterialCommunityIcons}
        name="loading"
        color="orange.400"
        mx="2"
      />
    </Animated.View>
  );
};
const stylesLoader = StyleSheet.create({
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    flex: 1,
  },
});
export default Spinner;
