import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PublicRoutes from './publicRoutes/PublicRoutes';
import ClientRoutes from './clientRoutes/ClientStackNavigator';
import useAuth from '../providers/hooks/useAuth';

const RootStack = createNativeStackNavigator<{
  PublicRoutes: undefined;
  ClientRoutes: undefined;
}>();

const noHeader = { headerShown: false };

export default () => {
  const { isSignedIn } = useAuth();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={noHeader}>
        {isSignedIn ? (
          <RootStack.Screen name="ClientRoutes" component={ClientRoutes} options={{ headerShown: false }} />
        ) : (
          <RootStack.Screen name="PublicRoutes" component={PublicRoutes} options={{ headerShown: false }} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
