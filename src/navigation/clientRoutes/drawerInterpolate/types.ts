// @ts-ignore
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/module/src/types';

export type TDrawerList = {
  DrawerInterpolateNested: undefined;
  Home: undefined;
  Settings: undefined;
  Profile: undefined;
};

export type TDrawerContentItem = {
  label: string;
  icon: string;
  navigation: DrawerNavigationHelpers;
  route: string;
};

export type DrawerTypes = 'front' | 'back' | 'slide' | 'permanent';
