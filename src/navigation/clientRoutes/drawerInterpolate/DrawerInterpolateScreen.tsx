import { TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator, useDrawerProgress } from '@react-navigation/drawer';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
// @ts-ignore
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerTypes, TDrawerList } from './types';
import DrawerContent from './DrawerContent';
import { styles } from './DrawerContent.styles';
import ProfileScreen from '../../../screens/ProfileScreen';
import ClientBottomTabNavigator from '../bottomTabsNavigator/ClientBottomTabNavigator';

const Drawer = createDrawerNavigator<TDrawerList>();

const DrawerInterpolateScreen = () => {
  const screenOptions = {
    headerShown: false,
    drawerType: 'slide' as DrawerTypes,
    overlayColor: 'transparent',
    sceneContainerStyle: styles.sceneContainerStyle,
    drawerStyle: styles.drawerStyle,
  };

  return (
    <View style={styles.navigatorContainer}>
      <Drawer.Navigator
        screenOptions={screenOptions}
        drawerContent={props => <DrawerContent navigation={props.navigation} />}>
        <Drawer.Screen name="ClientBottomTabNavigator">
          {props => <ClientBottomTabNavigator navigation={...props.navigation} />}
        </Drawer.Screen>
        <Drawer.Screen
          name="Profile"
          options={{
            swipeEnabled: false,
          }}>
          {() => (
            <View style={styles.container}>
              <ProfileScreen />
            </View>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export const DrawerInterpolate = ({
  navigation,
  children,
}: {
  navigation: DrawerNavigationHelpers;
  children?: React.ReactNode;
}) => {
  const insets = useSafeAreaInsets();
  const drawerProgress = useDrawerProgress();

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8]);
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 34]);

    return {
      borderRadius,
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={[
          styles.menuContainer,
          {
            paddingTop: insets.top > 0 ? insets.top + 8 : 28,
          },
        ]}>
        <AntDesign name="menuunfold" size={26} />
      </TouchableOpacity>
      {children}
    </Animated.View>
  );
};

export default DrawerInterpolateScreen;
