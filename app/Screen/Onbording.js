import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const onNextPressed = () => {
    if (firstName === "" || lastName === "") {
      alert("Please fill in both first name and last name.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate("BottomTabNavigator");
    }, 1000);
  };

  const onTermsPressed = () => {
    navigation.navigate("Terms");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <Image
        source={require("../assets/LOGOB3FA.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="First name"
          placeholderTextColor="#888"
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          placeholder="Last name"
          placeholderTextColor="#888"
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.7 }]}
        onPress={onNextPressed}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Processing..." : "Next"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 50,
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: "60%",
    height: 200,
  },
  inputContainer: {
    marginBottom: 30,
  },
  input: {
    width: 336,
    height: 56,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderColor: "#ccc",
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#FB6666",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
