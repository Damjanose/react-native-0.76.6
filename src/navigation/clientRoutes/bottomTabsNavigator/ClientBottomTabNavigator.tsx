import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../screens/HomeScreen';
import ProfileScreen from '../../../screens/ProfileScreen';
import Tabbar from './Tabbar';
import { DrawerInterpolate } from '../drawerInterpolate/DrawerInterpolateScreen';
import ReservationScreen from '../../../screens/ReservationScreen.tsx';

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Reservation: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const ClientBottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false, animation: 'shift', lazy: true }}
    tabBar={props => <Tabbar {...props} />}>
    <Tab.Screen name="Home">
      {props => (
        <DrawerInterpolate {...props}>
          <HomeScreen />
        </DrawerInterpolate>
      )}
    </Tab.Screen>

    <Tab.Screen name="Reservation" component={ReservationScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default ClientBottomTabNavigator;
