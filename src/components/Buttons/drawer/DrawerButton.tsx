import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type DrawerNavigatorParamList = {
  Home: undefined;
  Settings: undefined;
};

type NavigationProps = DrawerNavigationProp<DrawerNavigatorParamList>;

const drawerButton = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return function WithDrawerButton(props: P) {
    const navigation = useNavigation<NavigationProps>();

    return (
      <View style={styles.container}>
        <IconButton icon="menu" size={24} onPress={() => navigation.openDrawer()} style={styles.iconButton} />
        <View style={styles.content}>
          <WrappedComponent {...props} />
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 10,
  },
  content: {
    flex: 1,
    marginTop: 60,
  },
});

export default drawerButton;
