import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerInterpolateScreen from './drawerInterpolate/DrawerInterpolateScreen';
import ClientBottomTabNavigator from './bottomTabsNavigator/ClientBottomTabNavigator';

const ClientStack = createNativeStackNavigator();

const ClientStackNavigator = () => {
  return (
    <ClientStack.Navigator
      initialRouteName="DrawerInterpolateScreen"
      screenOptions={{ headerShown: false, animation: 'fade' }}>
      <ClientStack.Screen name="DrawerInterpolateScreen" component={DrawerInterpolateScreen} />

      <ClientStack.Screen name="ClientBottomTabNavigator" component={ClientBottomTabNavigator} />
    </ClientStack.Navigator>
  );
};

export default ClientStackNavigator;
