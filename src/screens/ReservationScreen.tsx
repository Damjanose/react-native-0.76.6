import React, { useState } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { FullScreenCard } from '../components/Cards/FullScreenCard';

const FirstTab = () => (
  <View style={styles.container}>
    <Text>First Tab</Text>
  </View>
);

const SecondTab = () => (
  <View style={styles.container}>
    <Text>Second Tab</Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstTab,
  second: SecondTab,
});

const ReservationScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <FullScreenCard>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => <TabBar {...props} style={styles.tabBar} />}
      />
    </FullScreenCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: 'white',
  },
});

export default ReservationScreen;
