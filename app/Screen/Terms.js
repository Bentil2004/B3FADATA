import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Settings } from 'react-native';

const TermsAndConditions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack(Settings)}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Terms & Conditions</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.updateDate}>Last updated: July 05, 2024</Text>
        <Text style={styles.paragraph}>
          Please read these terms and conditions carefully before using Our Service.
        </Text>

        <Text style={styles.heading}>Interpretation and Definitions</Text>
        
        <Text style={styles.subheading}>Interpretation</Text>
        <Text style={styles.paragraph}>
          The words of which the initial letter is capitalized have meanings defined under the following conditions. 
          The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </Text>
        
        <Text style={styles.subheading}>Definitions</Text>
        <Text style={styles.paragraph}>For the purposes of these Terms and Conditions:</Text>
        <Text style={styles.listItem}>• Application means the software program provided by the Company downloaded by You on any electronic device, named AeroKonnect</Text>
        <Text style={styles.listItem}>• Application Store means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.</Text>
        <Text style={styles.listItem}>• Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</Text>
        <Text style={styles.listItem}>• Country refers to: Ghana</Text>
        <Text style={styles.listItem}>• Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to AeroKonnect.</Text>
        <Text style={styles.listItem}>• Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.</Text>
        <Text style={styles.listItem}>• Service refers to the Application.</Text>
        <Text style={styles.listItem}>• Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</Text>
        <Text style={styles.listItem}>• Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</Text>
        <Text style={styles.listItem}>• You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</Text>

        <Text style={styles.listItem}>• By email: aerokonnect14@gmail.com</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor:  '#FB6666',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    zIndex: 1000,
    padding: -50,
   
  },
  backButton: {
    position: 'absolute',
    right: 150,
    fontSize: 29,
    color: '#fff',
  },
  headerText: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#fff',
  },
  contentContainer: {
    paddingTop: 170,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  updateDate: {
    fontSize: 19,
    color: 'black',
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'justify',
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'justify',
  },
});

export default TermsAndConditions;