import React from 'react';
import Animated from 'react-native-reanimated';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import FadeInTransition from './FadeInTransition';
import { typography } from '../../../utils/typography.ts';
import { isIOS, MAX_FONT_UPSCALE_FACTOR } from '../../../utils/device.ts';
import { TInnerStackList, TScheduleNavigationProps } from './TopTabsNavigationStack.tsx';

const TABS = [
  {
    label: 'Reservation',
    screen: 'ReservationScreen1',
  },
  {
    label: 'History',
    screen: 'ReservationScreen2',
  },
];

const AnimTouch = Animated.createAnimatedComponent(Pressable);

const SubjectsHeader = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation<TScheduleNavigationProps>();
  const insets = useSafeAreaInsets();

  const navState = navigation.getState();
  const state = navState?.routes?.[navState.index].state;
  const stackIndex = state?.index || 0;

  const paddingTop = insets.top > 24 ? (isIOS ? insets.top : insets.top + 12) : 32;

  return (
    <View style={{ backgroundColor: 'white' }}>
      <FadeInTransition index={0} direction="left" animate={isFocused}>
        <View style={[styles.container, { paddingTop }]}>
          {TABS.map((tab, index) => (
            <AnimTouch
              key={`tab-${index}`}
              style={styles.tabContainer}
              onPress={() => navigation.navigate(tab.screen as keyof TInnerStackList)}>
              <Text
                maxFontSizeMultiplier={MAX_FONT_UPSCALE_FACTOR}
                style={[styles.tab, stackIndex === index && { color: 'black' }]}>
                {tab.label}
              </Text>
            </AnimTouch>
          ))}
        </View>
      </FadeInTransition>
    </View>
  );
};

export default SubjectsHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  tabContainer: {
    width: '50%',
  },
  tab: {
    paddingVertical: 4,
    textAlign: 'center',
    fontSize: 20,
    color: '#a0a0a0',
    fontFamily: typography.semiBold,
  },
});
