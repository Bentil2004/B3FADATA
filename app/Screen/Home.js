import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity, Modal, Button, Linking, Clipboard } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const Home = ({ navigation }) => {
  const carouselItems = [
    { source: require('../assets/VODA.jpg') },
    { source: require('../assets/tn.jpg') },
    { source: require('../assets/AT.jpg') },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);

  const whatsappNumber = "0576639304";
  const callNumber = '0596888116';

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % carouselItems.length;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handleScroll = (event) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.source} style={styles.carouselImage} />
    </View>
  );

  const menuItems = [
    {
      icon: 'bar-chart',
      title: 'Internet Data',
      description: 'Non-expiry data bundle',
      onPress: () => navigation.navigate('InternetData'),
    },
    {
      icon: 'call',
      title: 'MTN AFA BUNDLE',
      description: 'Register for AFA bundle',
      onPress: () => navigation.navigate('Afa'),
    },
    {
      icon: 'headset',
      title: 'Contact Us',
      description: 'Contact us for assistance',
      onPress: () => setModalVisible(true),
    },
  ];

  const copyToClipboard = () => {
    Clipboard.setString(whatsappNumber);
    alert('WhatsApp number copied to clipboard');
  };

  const callAdmin = () => {
    Linking.openURL(`tel:${callNumber}`);
  };

  const onNotificationPress = () => {
    navigation.navigate('Notification');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Bentil Fiifi</Text>
        <Text style={styles.subGreeting}>Enjoy data with a low price!</Text>
        <TouchableOpacity onPress={onNotificationPress}>
        <Ionicons name="notifications-outline" size={24} color="#fff" style={styles.notificationIcon} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={carouselItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        ref={flatListRef}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
        scrollEventThrottle={16}
      />

      <View style={styles.indicatorContainer}>
        {carouselItems.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              { backgroundColor: index === currentIndex ? '#000' : '#C0C0C0' },
            ]}
          />
        ))}
      </View>

      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.menuItem} onPress={item.onPress}>
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon} size={24} color="#000" />
            </View>
            <View>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Contact Us</Text>
            <TouchableOpacity style={styles.contactButton} onPress={copyToClipboard}>
              <Text style={styles.contactText}>Copy WhatsApp Number</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactButton} onPress={callAdmin}>
              <Text style={styles.contactText}>Call Admin</Text>
            </TouchableOpacity>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    backgroundColor: '#F76F6F',
    padding: 20,
    paddingTop: 70,
    position: 'relative',
    height: 150,
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subGreeting: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 5,
  },
  notificationIcon: {
    position: "absolute",
    top: -40,
    right: 0,
    color: "white",
  },
  carouselContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  carouselItem: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselImage: {
    width: '90%',
    height: 150,
    borderRadius: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    elevation: 1,
  },
  iconContainer: {
    backgroundColor: '#FFECB3',
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  menuDescription: {
    fontSize: 14,
    color: '#8E8E8E',
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contactButton: {
    backgroundColor: '#F76F6F',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  contactText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;
