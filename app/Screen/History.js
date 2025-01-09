import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const transactionData = [
  { id: '1', date: '2025-01-02', time: '12:00PM', title: '2GB Data', price: 'GHC 12.00', logo: require('../assets/mtn.png') },
  { id: '2', date: '2025-01-01', time: '10:00AM', title: '2GB Data', price: 'GHC 10.00', logo: require('../assets/logotele.png') },
  { id: '3', date: '2024-12-31', time: '08:00PM', title: '100GB Data', price: 'GHC 420.00', logo: require('../assets/logoat.png') },
  { id: '1', date: '2025-01-02', time: '12:00PM', title: '10GB Data', price: 'GHC 52.00', logo: require('../assets/mtn.png') },
];

const HistoryPage = () => {
  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.row}>
        <Image source={item.logo} style={styles.logo} />
        <View style={styles.details}>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <Text style={styles.transactionDate}>{item.date}</Text>
          <Text style={styles.transactionTime}>{item.time}</Text>
        </View>
        <Text style={styles.transactionPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Transaction History</Text>
      <FlatList
        data={transactionData}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#000',
    marginTop: 25,
  },
  transactionItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  details: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  transactionDate: {
    fontSize: 14,
    color: '#999',
  },
  transactionTime: {
    fontSize: 14,
    color: '#999',
  },
  transactionPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff0000',
  },
});

export default HistoryPage;
