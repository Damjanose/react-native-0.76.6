import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';
import { FullScreenCard } from '../components/Cards/FullScreenCard';

const HomeScreen = () => {
  const balance = 1000;
  const history = [
    { id: '1', action: 'Deposit', amount: 500 },
    { id: '2', action: 'Withdrawal', amount: 200 },
    { id: '3', action: 'Deposit', amount: 700 },
  ];

  const totalDeposits = history.filter(item => item.action === 'Deposit').reduce((sum, item) => sum + item.amount, 0);
  const totalWithdrawals = history
    .filter(item => item.action === 'Withdrawal')
    .reduce((sum, item) => sum + item.amount, 0);
  const transactionsCount = history.length;

  return (
    <FullScreenCard>
      <ScrollView style={styles.container}>
        <View style={[styles.card, styles.balanceCard]}>
          <Text style={styles.cardTitle}>Current Balance</Text>
          <Text style={styles.balanceAmount}>${balance}</Text>
        </View>

        <View style={[styles.card, styles.summaryCard]}>
          <Text style={styles.cardTitle}>Account Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Deposits:</Text>
            <Text style={[styles.summaryValue, styles.depositValue]}>${totalDeposits}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Withdrawals:</Text>
            <Text style={[styles.summaryValue, styles.withdrawalValue]}>${totalWithdrawals}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Transactions:</Text>
            <Text style={styles.summaryValue}>{transactionsCount}</Text>
          </View>
        </View>

        <View style={[styles.card, styles.historyCard]}>
          <Text style={styles.cardTitle}>Transaction History</Text>
          <FlatList
            data={history}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.historyItem}>
                <Text
                  style={[
                    styles.historyAction,
                    item.action === 'Deposit' ? styles.depositText : styles.withdrawalText,
                  ]}>
                  {item.action}
                </Text>
                <Text
                  style={[
                    styles.historyAmount,
                    item.action === 'Deposit' ? styles.depositText : styles.withdrawalText,
                  ]}>
                  ${item.amount}
                </Text>
              </View>
            )}
            scrollEnabled={false}
          />
        </View>

        <View style={[styles.card, styles.historyCard]}>
          <Text style={styles.cardTitle}>Transaction History1</Text>
          <FlatList
            data={history}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.historyItem}>
                <Text
                  style={[
                    styles.historyAction,
                    item.action === 'Deposit' ? styles.depositText : styles.withdrawalText,
                  ]}>
                  {item.action}
                </Text>
                <Text
                  style={[
                    styles.historyAmount,
                    item.action === 'Deposit' ? styles.depositText : styles.withdrawalText,
                  ]}>
                  ${item.amount}
                </Text>
              </View>
            )}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </FullScreenCard>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  balanceCard: {
    borderLeftWidth: 5,
    borderLeftColor: colors.primary,
  },
  summaryCard: {
    borderLeftWidth: 5,
    borderLeftColor: colors.secondary,
  },
  historyCard: {
    borderLeftWidth: 5,
    borderLeftColor: colors.accent,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: colors.primary,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  summaryLabel: {
    fontSize: 16,
    color: colors.text,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  depositValue: {
    color: colors.green,
  },
  withdrawalValue: {
    color: colors.red,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    paddingVertical: 10,
  },
  historyAction: {
    fontSize: 16,
  },
  historyAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  depositText: {
    color: colors.green,
  },
  withdrawalText: {
    color: colors.red,
  },
});
