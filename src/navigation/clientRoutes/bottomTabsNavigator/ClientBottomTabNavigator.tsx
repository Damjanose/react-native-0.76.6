import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from '../../../screens/SettingsScreen';
import ProfileScreen from '../../../screens/ProfileScreen';

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Settings: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const ClientBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = route.name === 'Profile' ? 'home' : 'cog';
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default ClientBottomTabNavigator;
