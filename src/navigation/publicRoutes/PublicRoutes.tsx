import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../../screens/auth/register/RegisterScreen.tsx';
import LoginScreen from '../../screens/auth/login/LoginScreen.tsx';
import OtpScreen from '../../screens/auth/otp/OtpScreen.tsx';

const PublicStack = createNativeStackNavigator<{
  LoginScreen: undefined;
  RegisterScreen: undefined;
  OtpScreen: undefined;
}>();

export default () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <PublicStack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
      <PublicStack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />
    </PublicStack.Navigator>
  );
};
