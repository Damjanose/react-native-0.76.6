import React, { useState } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import colors from '../styles/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { isIOS } from '../utils/device.ts';

const FirstTab = () => (
  <View style={styles.container}>
    <Text>First Tab Content</Text>
  </View>
);

const SecondTab = () => (
  <View style={styles.container}>
    <Text>Second Tab Content</Text>
  </View>
);

const ReservationScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const renderScene = ({ route }: { route: { key: string } }) => {
    switch (route.key) {
      case 'first':
        return <FirstTab />;
      case 'second':
        return <SecondTab />;
      default:
        return null;
    }
  };

  const insets = useSafeAreaInsets();
  const paddingTop = insets.top > 24 ? (isIOS ? insets.top : insets.top + 12) : 32;

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={[styles.tabBar, { paddingTop }]}
          indicatorStyle={styles.indicator}
          activeColor="black"
          inactiveColor="gray"
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  tabBar: {
    backgroundColor: colors.white,
  },
  indicator: {
    backgroundColor: colors.black,
    height: 2,
  },
});

export default ReservationScreen;
