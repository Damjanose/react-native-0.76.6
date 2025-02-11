import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../styles/colors';
import { useDrawerProgress } from '@react-navigation/drawer';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

const settingsOptions = ['Personal Information', 'Update Profile', 'Notifications', 'Actions'];

const supportOptions = ['Frequently Asked Questions', 'Help Section', 'Privacy & Policy', 'Share App'];

const ProfileScreen = () => {
  const drawerProgress = useDrawerProgress();

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8]);
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 34]);

    return {
      borderRadius,
      transform: [{ scale }],
    };
  });

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity style={styles.button}>
      <Text>{item}</Text>
      <Icon name="chevron-right" size={20} color={colors.darkGray} />
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.container, animatedStyles]}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <FlatList data={settingsOptions} renderItem={renderItem} keyExtractor={item => item} scrollEnabled={false} />

        <Text style={[styles.sectionTitle]}>Support</Text>
        <FlatList data={supportOptions} renderItem={renderItem} keyExtractor={item => item} scrollEnabled={false} />

        <TouchableOpacity>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoutText: {
    color: colors.error,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
