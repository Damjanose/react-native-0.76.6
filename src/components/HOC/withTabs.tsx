import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const withBottomTabs = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconName = route.name === 'Home' ? 'home' : 'cog';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Home">{() => <WrappedComponent {...props} />}</Tab.Screen>
        <Tab.Screen name="Settings">{() => <WrappedComponent {...props} />}</Tab.Screen>
      </Tab.Navigator>
    );
  };
};

export default withBottomTabs;
