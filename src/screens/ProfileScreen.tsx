import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FullScreenCard } from '../components/Cards/FullScreenCard';

const settingsOptions = ['Personal Information', 'Update Profile', 'Notifications', 'Actions'];

const supportOptions = ['Frequently Asked Questions', 'Help Section', 'Privacy & Policy', 'Share App'];

const ProfileScreen = () => {
  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity style={styles.button}>
      <Text>{item}</Text>
      <Icon name="chevron-right" size={20} color={colors.darkGray} />
    </TouchableOpacity>
  );

  return (
    <FullScreenCard>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <FlatList data={settingsOptions} renderItem={renderItem} keyExtractor={item => item} scrollEnabled={false} />

        <Text style={[styles.sectionTitle, styles.mt_15]}>Support</Text>
        <FlatList data={supportOptions} renderItem={renderItem} keyExtractor={item => item} scrollEnabled={false} />

        <TouchableOpacity style={[styles.flex, styles.button]}>
          <Text style={styles.logoutText}>Logout</Text>
          <Icon name="logout" size={20} color={colors.error} />
        </TouchableOpacity>
      </View>
    </FullScreenCard>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  mt_15: {
    marginTop: 15,
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
    marginTop: 10,
    color: colors.error,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
