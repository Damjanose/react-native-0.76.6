import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Settings: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const withTabs = (WrappedComponent: React.ComponentType<any>, screenName: keyof BottomTabNavigatorParamList) => {
  return (props: any) => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconMapping = {
              Home: 'home',
              Settings: 'cog',
              Profile: 'account',
            };
            const iconName = iconMapping[route.name] || 'help-circle';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name={screenName}>{() => <WrappedComponent {...props} />}</Tab.Screen>
      </Tab.Navigator>
    );
  };
};

export default withTabs;
