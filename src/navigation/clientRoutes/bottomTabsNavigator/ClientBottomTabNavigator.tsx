import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../../../screens/HomeScreen';
import ReservationScreen from '../../../screens/ReservationScreen.tsx';
import ProfileScreen from '../../../screens/ProfileScreen';
import * as Animatable from 'react-native-animatable';

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Reservation: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const ClientBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconMapping = {
            Home: 'home',
            Reservation: 'plus',
            Profile: 'account',
          };
          const iconName = iconMapping[route.name] || 'help-circle';
          return (
            <Animatable.View animation="bounceIn">
              <MaterialCommunityIcons name={iconName} size={size} color={color} />
            </Animatable.View>
          );
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Reservation" component={ReservationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default ClientBottomTabNavigator;
