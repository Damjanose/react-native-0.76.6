import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { Props } from 'react-native-paper/lib/typescript/components/ActivityIndicator';
import { theme } from '../../../theme/paperComponents.ts';

export const SpinnerActivityIndicator = (props: Omit<Props, 'theme'>) => (
  <>{props.animating ? <ActivityIndicator {...props} theme={theme} /> : null}</>
);
