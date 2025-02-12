import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';

import ReservationScreen from '../../../screens/ReservationScreen.tsx';
import TopTabsHeader from './TopTabsHeader.tsx';

const Stack = createNativeStackNavigator();

export type TInnerStackList = {
  ReservationScreen1: undefined;
  ReservationScreen2: undefined;
};

export type TScheduleNavigationProps = NativeStackNavigationProp<TInnerStackList, 'ReservationScreen1'>;

const ScreenTransitionScheduleStack = () => {
  return (
    <>
      <TopTabsHeader />
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
        <Stack.Screen name="ReservationScreen1" component={ReservationScreen} />
        <Stack.Screen name="ReservationScreen2" component={ReservationScreen} />
      </Stack.Navigator>
    </>
  );
};

export default ScreenTransitionScheduleStack;
