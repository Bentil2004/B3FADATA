import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ListBundles = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { bundles, title, logo } = route.params;

  const [selectedBundle, setSelectedBundle] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [recipientNumber, setRecipientNumber] = useState('');
  const [showReviewPage, setShowReviewPage] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleBuy = (bundle) => {
    setSelectedBundle(bundle);
    setModalVisible(true);
  };

  const handleProceed = () => {
    setModalVisible(false);
    setShowReviewPage(true);
  };

  const handlePay = () => {
    console.log('Proceeding with payment via Mobile Money');
  };

  const handleEdit = () => {
    setIsEditing(true); 
  };

  const handleCancelEdit = () => {
    setIsEditing(false); 
    setRecipientNumber(''); 
  };

  const renderItem = ({ item }) => (
    <View style={styles.bundleCard}>
      <Text style={styles.bundleText}>{item.size}</Text>
      <Text style={styles.bundlePrice}>{item.price}</Text>
      <TouchableOpacity style={styles.buyButton} onPress={() => handleBuy(item)}>
        <Text style={styles.buyButtonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  );

  if (showReviewPage) {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{title}</Text>
        </View>

        <ScrollView contentContainerStyle={styles.reviewScrollContainer}>
          <View style={styles.reviewContent}>
            <Image source={logo} style={styles.reviewLogo} />

            {selectedBundle && (
              <View style={styles.bundleDetails}>
                <Text style={styles.selectedBundleText}>
                  You have selected {selectedBundle.size} for {selectedBundle.price}
                </Text>
              </View>
            )}

            {/* Show recipient number input field or the "Edit" button */}
            {!isEditing ? (
              <View style={styles.recipientContainer}>
                <Text style={styles.recipientText}>Recipient Number: {recipientNumber}</Text>
                <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter recipient's number"
                  keyboardType="numeric"
                  value={recipientNumber}
                  onChangeText={setRecipientNumber}
                  maxLength={10}
                />
                <View style={styles.editButtons}>
                  <TouchableOpacity style={styles.cancelButton} onPress={handleCancelEdit}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.saveButton, recipientNumber ? {} : styles.disabledButton]}
                    onPress={() => setIsEditing(false)}
                    disabled={!recipientNumber}
                  >
                    <Text style={styles.saveButtonText}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            <Text style={styles.checkNumberText}>
              Please check the recipient's number before proceeding with payment.
            </Text>

            <TouchableOpacity style={styles.payButton} onPress={handlePay}>
              <Text style={styles.payButtonText}>Pay with Mobile Money</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
      </View>

      <FlatList
        data={bundles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            <Image source={logo} style={styles.logo} />
            {selectedBundle && (
              <>
                <Text style={styles.modalText}>You have selected:</Text>
                <Text style={styles.modalText}>
                  {selectedBundle.size} for {selectedBundle.price}
                </Text>
              </>
            )}
            <TextInput
              style={styles.input}
              placeholder="Enter recipient's number"
              keyboardType="numeric"
              value={recipientNumber}
              onChangeText={setRecipientNumber}
              maxLength={10}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.proceedButton, recipientNumber ? {} : styles.disabledButton]}
                onPress={handleProceed}
                disabled={!recipientNumber}
              >
                <Text style={styles.proceedButtonText}>Proceed</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default ListBundles;

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
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    right: 10,
  },
  list: {
    paddingBottom: 20,
  },
  bundleCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    elevation: 2,
  },
  bundleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  bundlePrice: {
    fontSize: 16,
    color: 'red',
  },
  buyButton: {
    backgroundColor: '#FB6666',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  logo: {
    width: 100,
    height: 80,
    marginBottom: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  closeButton: {
    flex: 1,
    marginRight: 5,
    backgroundColor: '#FB6666',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  proceedButton: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  reviewScrollContainer: {
    flexGrow: 1,
  },
  reviewContent: {
    padding: 20,
    alignItems: 'center',
  },
  reviewLogo: {
    width: 120,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  bundleDetails: {
    marginBottom: 20,
    alignItems: 'center',
  },
  selectedBundleText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  recipientContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  recipientText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#FF9900',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  editButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#FF6666',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 5,
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  checkNumberText: {
    fontSize: 16,
    color: '#000',
    marginVertical: 10,
    textAlign: 'center',
  },
  payButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
