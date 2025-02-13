import React from 'react';
import { Button } from 'react-native-paper';
// @ts-ignore
import { Props } from 'react-native-paper/lib/typescript/components/Button';
import { theme } from '../../theme/paperCoponents.ts';

export const SubmitButton = (props: Omit<Props, 'theme'>) => (
  <Button {...props} theme={theme} mode={props.mode || 'contained'}>
    {props.children}
  </Button>
);
