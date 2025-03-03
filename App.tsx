import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import QueryProvider from './src/providers/QueryProvider';
import { PaperProvider } from 'react-native-paper';
import { SnackBarProvider } from './src/providers/SnackBarProvider';
import { StatusBarProvider } from './src/providers/StatusBarProvider';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { AuthProvider } from './src/providers/AuthProvider';
import { LocationProvider } from './src/providers/LocationProvider';

export default () => (
  <QueryProvider>
    <PaperProvider>
      <SnackBarProvider>
        <StatusBarProvider>
          <AuthProvider>
            <LocationProvider>
              <RootNavigation />
            </LocationProvider>
          </AuthProvider>
        </StatusBarProvider>
      </SnackBarProvider>
    </PaperProvider>
  </QueryProvider>
);
