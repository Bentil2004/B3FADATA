import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileDetails = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({});

  const fetchUserDetails = useCallback(async () => {
    const userId = await AsyncStorage.getItem("userId");
    if (!userId) return;

    const mockData = {
      fname: "John",
      lname: "Doe",
      phonenumber: "123-456-7890",
    };
    setUserDetails(mockData);
  }, []);

  useEffect(() => {
    fetchUserDetails();
    const focusListener = navigation.addListener("focus", () => {
      fetchUserDetails();
    });

    return () => {
      navigation.removeListener("focus", focusListener);
    };
  }, [fetchUserDetails, navigation]);

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.Testing} colors={["#FB6666", "#FFB6B6"]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={15} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Profile Details</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate("EditDetails")}
          >
            <Text style={styles.editText}>Edit</Text>
            <Icon name="pencil" size={16} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileContainer}>
          <View style={styles.profilePicture}>
            <Text style={styles.profileInitials}>
              {userDetails.fname?.[0]}
              {userDetails.lname?.[0]}
            </Text>
          </View>
          <Text style={styles.greeting}>
            {userDetails.fname} {userDetails.lname}
          </Text>
        </View>
      </LinearGradient>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>First Name: Ampoma</Text>
          {userDetails.fname}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Last Name: Bentil</Text>
          {userDetails.lname}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Phone Number: +233 244666344 </Text>
          {userDetails.phonenumber}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E6ED",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 55,
  },
  Testing: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 463,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  editText: {
    marginRight: 5,
    fontSize: 16,
    color: "#fff",
  },
  profileContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  profileInitials: {
    fontSize: 36,
    color: "#00527e",
  },
  greeting: {
    fontSize: 24,
    color: "#fff",
  },
  detailsContainer: {
    marginTop: -70,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 25,
    marginRight: 25,
  },
  detailItem: {
    fontSize: 16,
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: "bold",
  },
});

export default ProfileDetails;
