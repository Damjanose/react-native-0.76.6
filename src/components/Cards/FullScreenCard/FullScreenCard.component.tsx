import React from 'react';
import { Card } from 'react-native-paper';
import { Props as CardProps } from 'react-native-paper/lib/typescript/components/Card/Card';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { fullHeight } from './FullScreenCard.styles';
import GoBackHeader from '../../GoBackHeader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from '../../../styles/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { isIOS } from '../../../utils/device.ts';

const TAB_BAR_HEIGHT = 60;

type Props = Omit<CardProps & { stickyHeader?: boolean }, 'theme'> & { mode?: 'elevated'; title?: string };
export const { container } = StyleSheet.create({ container: { flex: 1, borderRadius: 0 } });
export const FullScreenCard = (props: Props) => {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top > 24 ? (isIOS ? insets.top : insets.top + 12) : 32;

  return (
    <SafeAreaView style={{ backgroundColor: colors.white, paddingTop, flex: 1 }}>
      <View style={{ flex: 1, paddingBottom: TAB_BAR_HEIGHT }}>
        <KeyboardAwareScrollView
          stickyHeaderIndices={props.stickyHeader ? [0] : []}
          bounces={false}
          nestedScrollEnabled
          style={fullHeight}
          showsVerticalScrollIndicator={false}>
          {props.title && <GoBackHeader title={props.title} />}
          {props.children}
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export const CardTitle = Card.Title;
export const CardContent = Card.Content;
export const CardActions = Card.Actions;
