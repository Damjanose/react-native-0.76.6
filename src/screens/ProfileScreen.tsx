import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigatorParamList } from '../navigation/clientRoutes/bottomTabsNavigator/ClientBottomTabNavigator';

function ProfileScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<BottomTabNavigatorParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProfileScreen;
