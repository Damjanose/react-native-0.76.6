import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
// @ts-ignore
import { Props } from 'react-native-paper/lib/typescript/components/Button';
import { theme } from '../../theme/paperComponents.ts';

export default function Button(props: Omit<Props, 'theme'>) {
  return (
    <PaperButton {...props} theme={theme}>
      {props.children}
    </PaperButton>
  );
}
