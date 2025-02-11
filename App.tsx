import React from 'react';
import RootNavigation from './src/navigation/RootNavigation.tsx';
import QueryProvider from './src/providers/QueryProvider.tsx';
import { PaperProvider } from 'react-native-paper';
import { SnackBarProvider } from './src/providers/SnackBarProvider.tsx';
import { StatusBarProvider } from './src/providers/StatusBarProvider.tsx';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { AuthProvider } from './src/providers/AuthProvider.tsx';

export default () => (
  <QueryProvider>
    <PaperProvider>
      <SnackBarProvider>
        <StatusBarProvider>
          <AuthProvider>
            <RootNavigation />
          </AuthProvider>
        </StatusBarProvider>
      </SnackBarProvider>
    </PaperProvider>
  </QueryProvider>
);
