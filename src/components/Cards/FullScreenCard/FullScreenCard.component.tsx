import React from 'react';
import { Card } from 'react-native-paper';
import { Props as CardProps } from 'react-native-paper/lib/typescript/components/Card/Card';
import { SafeAreaView, StyleSheet } from 'react-native';
import { fullHeight } from './FullScreenCard.styles';
import GoBackHeader from '../../GoBackHeader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = Omit<CardProps & { stickyHeader?: boolean }, 'theme'> & { mode?: 'elevated'; title?: string };
export const { container } = StyleSheet.create({ container: { height: '100%', borderRadius: 0 } });
export const FullScreenCard = (props: Props) => (
  <SafeAreaView>
    <KeyboardAwareScrollView
      stickyHeaderIndices={props.stickyHeader ? [0] : []}
      bounces={false}
      nestedScrollEnabled
      style={fullHeight}
      showsVerticalScrollIndicator={false}>
      {props.title && <GoBackHeader title={props.title} />}
      {props.children}
    </KeyboardAwareScrollView>
  </SafeAreaView>
);
export const CardTitle = Card.Title;
export const CardContent = Card.Content;
export const CardActions = Card.Actions;
