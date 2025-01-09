import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./app/Screen/SplashScreen";
import PhoneNumberVerificationScreen from "./app/Screen/Verification";
import PhoneVerification from "./app/Screen/PhoneVerification";
import Onbording from "./app/Screen/Onbording";
import BottomTabNavigator from "./BottomTabNavigator";
import Home from "./app/Screen/Home";
import History from "./app/Screen/History";
import Settings from "./app/Screen/Settings";
import InternetData from "./app/Screen/InternetData";
import Afa from "./app/Screen/Afa";
import List_Bundles from "./app/Screen/List_Bundles";
import Terms from "./app/Screen/Terms";
import DeleteAccount from "./app/Screen/DeleteAccount";
import About from "./app/Screen/About";
import Language from "./app/Screen/Language";
import Notification from "./app/Screen/Notification";
import Profile from "./app/Screen/Profile";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Verification"
          component={PhoneNumberVerificationScreen}
        />
        <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
        <Stack.Screen name="Onbording" component={Onbording} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="InternetData" component={InternetData} />
        <Stack.Screen name="Afa" component={Afa} />
        <Stack.Screen name="ListBundles" component={List_Bundles} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
