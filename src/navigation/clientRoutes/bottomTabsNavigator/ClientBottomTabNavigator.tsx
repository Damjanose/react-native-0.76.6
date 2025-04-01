import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../screens/HomeScreen';
import Tabbar from './Tabbar';
import { DrawerInterpolate } from '../drawerInterpolate/DrawerInterpolateScreen';
import ReservationScreen from '../../../screens/ReservationScreen.tsx';
import SettingsScreen from '../../../screens/SettingsScreen.tsx';
import TrackDriverScreen from '../../../screens/TrackDriverScreen.tsx';

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Reservation: undefined;
  TrackDriver: undefined;
  Settings: undefined;
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
    <Tab.Screen name="TrackDriver" component={TrackDriverScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export default ClientBottomTabNavigator;
