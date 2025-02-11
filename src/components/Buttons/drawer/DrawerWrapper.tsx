import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type RootDrawerParamList = {
  Home: undefined;
  Settings: undefined;
};

type NavigationProps = DrawerNavigationProp<RootDrawerParamList>;

const DrawerWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <IconButton icon="menu" size={24} onPress={() => navigation.openDrawer()} style={styles.iconButton} />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
  content: {
    flex: 1,
    marginTop: 50,
  },
});

export default DrawerWrapper;
