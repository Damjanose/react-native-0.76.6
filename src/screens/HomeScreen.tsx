import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigatorParamList } from '../navigation/clientRoutes/bottomTabsNavigator/ClientBottomTabNavigator';
import colors from '../styles/colors';

function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<BottomTabNavigatorParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button title="Go to Reservation" onPress={() => navigation.navigate('Reservation')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
