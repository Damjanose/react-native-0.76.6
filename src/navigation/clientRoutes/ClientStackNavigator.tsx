import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerInterpolateScreen from './drawerInterpolate/DrawerInterpolateScreen';

const ClientStack = createNativeStackNavigator();

const ClientStackNavigator = () => {
  return (
    <ClientStack.Navigator
      initialRouteName="DrawerInterpolateScreen"
      screenOptions={{ headerShown: false, animation: 'fade' }}>
      <ClientStack.Screen name="DrawerInterpolateScreen" component={DrawerInterpolateScreen} />
    </ClientStack.Navigator>
  );
};

export default ClientStackNavigator;
