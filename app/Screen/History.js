import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const transactionData = [
  { id: '1', date: '2025-01-01', time: '10:00AM', title: 'MTN 1GB Data', price: 'GHC 6.00' },
  { id: '2', date: '2025-01-02', time: '12:00PM', title: 'Telecel 2GB Data', price: 'GHC 8.00' },
];

const HistoryPage = () => {
  const navigation = useNavigation();

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionTitle}>{item.title}</Text>
      <Text style={styles.transactionDate}>{item.date}</Text>
      <Text style={styles.transactionPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Transaction History</Text>
      <FlatList
        data={transactionData}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
  },
  transactionItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 1,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionDate: {
    fontSize: 14,
    color: '#555',
  },
  transactionPrice: {
    fontSize: 16,
    color: '#2e8b57',
    marginTop: 5,
  },
});

export default HistoryPage;
