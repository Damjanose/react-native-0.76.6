import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';

const HomeScreen = () => {
  const balance = 1000;
  const history = [
    { id: '1', action: 'Deposit', amount: 500 },
    { id: '2', action: 'Withdrawal', amount: 200 },
    { id: '3', action: 'Deposit', amount: 700 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.balanceText}>Balance: ${balance}</Text>
      <Text style={styles.historyTitle}>History</Text>
      <FlatList
        data={history}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text>{item.action}</Text>
            <Text>${item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
});

export default HomeScreen;
