import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  {
    id: '1',
    title: 'MTN Internet Data Package',
    image: require('../assets/tn.jpg'),
    bundles: [
      { id: '1', size: '1GB', price: 'GHC 6.00' },
      { id: '2', size: '2GB', price: 'GHC 12.00' },
      { id: '3', size: '3GB', price: 'GHC 17.00' },
      { id: '4', size: '4GB', price: 'GHC 21.00' },
      { id: '5', size: '5GB', price: 'GHC 25.50' },
      { id: '6', size: '6GB', price: 'GHC 32.00' },
      { id: '7', size: '8GB', price: 'GHC 42.00' },
      { id: '8', size: '10GB', price: 'GHC 52.00' },
      { id: '9', size: '15GB', price: 'GHC 74.00' },
      { id: '10', size: '20GB', price: 'GHC 92.00' },
      { id: '11', size: '30GB', price: 'GHC 135.00' },
      { id: '12', size: '40GB', price: 'GHC 195.00' },
      { id: '13', size: '50GB', price: 'GHC 225.00' },
      { id: '14', size: '100GB', price: 'GHC 420.00' },
    ],
    logo: require('../assets/mtn.png'),
  },
  {
    id: '2',
    title: 'Telecel Internet Data Package',
    image: require('../assets/VODA.jpg'),
    bundles: [
        { id: '1', size: '1GB', price: 'GHC 6.00' },
        { id: '2', size: '2GB', price: 'GHC 12.00' },
        { id: '3', size: '3GB', price: 'GHC 17.00' },
        { id: '4', size: '4GB', price: 'GHC 21.00' },
        { id: '5', size: '5GB', price: 'GHC 25.50' },
        { id: '6', size: '6GB', price: 'GHC 32.00' },
        { id: '7', size: '8GB', price: 'GHC 42.00' },
        { id: '8', size: '10GB', price: 'GHC 52.00' },
        { id: '9', size: '15GB', price: 'GHC 74.00' },
        { id: '10', size: '20GB', price: 'GHC 92.00' },
        { id: '11', size: '30GB', price: 'GHC 135.00' },
        { id: '12', size: '40GB', price: 'GHC 195.00' },
        { id: '13', size: '50GB', price: 'GHC 225.00' },
        { id: '14', size: '100GB', price: 'GHC 420.00' },
    ],
    logo: require('../assets/logotele.png'),
  },
  {
    id: '3',
    title: 'AirtelTigo Internet Data Package',
    image: require('../assets/AT.jpg'),
    bundles: [
        { id: '1', size: '1GB', price: 'GHC 5.00' },
        { id: '2', size: '2GB', price: 'GHC 10.50' },
        { id: '3', size: '3GB', price: 'GHC 16.00' },
        { id: '4', size: '4GB', price: 'GHC 21.00' },
        { id: '5', size: '5GB', price: 'GHC 25.50' },
        { id: '6', size: '6GB', price: 'GHC 31.00' },
        {id: '7', size: '7GB', price: 'GHC36.00' },
        { id: '8', size: '8GB', price: 'GHC 43.00' },
        { id: '9', size: '10GB', price: 'GHC 52.00' },
        { id: '10', size: '12GB', price: 'GHC 61.00' },
        { id: '11', size: '15GB', price: 'GHC 73.00' },
        { id: '12', size: '20GB', price: 'GHC 92.00' },
        { id: '13', size: '30GB', price: 'GHC 135.00' },
        { id: '14', size: '40GB', price: 'GHC 180.00' },
        { id: '15', size: '50GB', price: 'GHC 225.00' },
        { id: '16', size: '100GB', price: 'GHC 420.00' }
    ],
    logo: require('../assets/logoat.png'),
  },
];

const InternetData = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ListBundles', { bundles: item.bundles, title: item.title, logo: item.logo })}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Internet Bundles</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default InternetData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  backButton: {
    padding: 5,
    marginRight: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    right: 10,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 30,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    padding: 10,
    color: '#000',
  },
});
