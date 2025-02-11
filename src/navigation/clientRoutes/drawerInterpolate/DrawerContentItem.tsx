import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, TouchableOpacity } from 'react-native';

import { TDrawerContentItem } from './types';
import { MAX_FONT_UPSCALE_FACTOR } from '../../../utils/device';
import { styles } from './DrawerContent.styles';

const DrawerContentItem = ({ label, icon, navigation, route }: TDrawerContentItem) => {
  return (
    <TouchableOpacity style={styles.drawerItemContainer} onPress={() => navigation.navigate(route)}>
      <AntDesign name={icon} color={'white'} size={22} />
      <Text style={styles.drawerItemLabel} maxFontSizeMultiplier={MAX_FONT_UPSCALE_FACTOR}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerContentItem;
