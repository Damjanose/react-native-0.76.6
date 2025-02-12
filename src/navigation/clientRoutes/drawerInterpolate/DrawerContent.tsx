import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DrawerContentScrollView } from '@react-navigation/drawer';
// @ts-ignore
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

import DrawerContentItem from './DrawerContentItem';
import { MAX_FONT_UPSCALE_FACTOR, MED_FONT_UPSCALE_FACTOR } from '../../../utils/device';
import { styles } from './DrawerContent.styles';
import useAuth from '../../../providers/hooks/useAuth';

const DrawerContent = ({ navigation }: { navigation: DrawerNavigationHelpers }) => {
  const { logout } = useAuth();

  return (
    <DrawerContentScrollView scrollEnabled contentContainerStyle={styles.flex}>
      <View style={styles.drawerScroll}>
        <TouchableOpacity
          style={styles.marginBottom}
          onPress={() => {
            StatusBar.setBarStyle('dark-content');
            navigation.closeDrawer();
          }}>
          <AntDesign name="close" size={24} color={'white'} />
        </TouchableOpacity>

        <DrawerContentItem label="Home" icon="home" navigation={navigation} route="Home" />
        <DrawerContentItem label="Reservation" icon="plus" navigation={navigation} route="Reservation" />
        <DrawerContentItem label="Profile" icon="user" navigation={navigation} route="Profile" />

        <TouchableOpacity style={styles.drawerItemContainer} onPress={logout}>
          <AntDesign name={'logout'} color={'white'} size={22} />
          <Text style={styles.drawerItemLabel} maxFontSizeMultiplier={MAX_FONT_UPSCALE_FACTOR}>
            Logout
          </Text>
        </TouchableOpacity>

        <View style={styles.hr} />
        <Text style={styles.implementedWith} maxFontSizeMultiplier={MED_FONT_UPSCALE_FACTOR}>
          {'Developed by:\nDamjano'}
        </Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
