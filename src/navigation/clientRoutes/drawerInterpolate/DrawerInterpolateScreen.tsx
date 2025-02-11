import { Text, TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator, useDrawerProgress } from '@react-navigation/drawer';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
// @ts-ignore
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerTypes, TDrawerList } from './types';
import DrawerContent from './DrawerContent';
import { MAX_FONT_UPSCALE_FACTOR } from '../../../utils/device';
import { styles } from './DrawerContent.styles';
import SettingsScreen from '../../../screens/SettingsScreen.tsx';
import ProfileScreen from '../../../screens/ProfileScreen.tsx';
import HomeScreen from '../../../screens/HomeScreen.tsx';
import ClientBottomTabNavigator from '../bottomTabsNavigator/ClientBottomTabNavigator.tsx';

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
          {props => (
            <DrawerInterpolate {...props}>
              <ClientBottomTabNavigator />
            </DrawerInterpolate>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Home">
          {props => (
            <DrawerInterpolate {...props}>
              <HomeScreen />
            </DrawerInterpolate>
          )}
        </Drawer.Screen>

        <Drawer.Screen
          name="Settings"
          options={{
            swipeEnabled: false,
          }}>
          {() => (
            <View style={styles.container}>
              <SettingsScreen />
            </View>
          )}
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

const DrawerInterpolate = ({
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
        <Entypo name="menu" size={26} />
        <Text style={styles.label} maxFontSizeMultiplier={MAX_FONT_UPSCALE_FACTOR}>
          Menu
        </Text>
      </TouchableOpacity>
      {children}
    </Animated.View>
  );
};

export default DrawerInterpolateScreen;
