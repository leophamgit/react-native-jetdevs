import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import { MAIN_COLOR } from "../constants/colors";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RootStackNavigator = createNativeStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();

function MainTabNavigator() {
  const navigation = useNavigation();

  return (
    <BottomTabNavigator.Navigator
      screenOptions={({ route }) => {
        return {
          headerTitle: () => {
            return (
              <Ionicons name="ios-logo-react" color={MAIN_COLOR} size={40} />
            );
          },
          headerRight: () => {
            return (
              <Button
                title="Log out"
                onPress={() => {
                  navigation.navigate("Login");
                }}
              />
            );
          },
          tabBarIcon: ({ size, focused, color }) => {
            let iconName: string = "";

            switch (route.name) {
              case "Home":
                iconName = `home${!focused ? "-outline" : ""}`;
                break;
              case "Favorite":
                iconName = `star${!focused ? "-outline" : ""}`;
                break;
              default:
                break;
            }

            return <Ionicons size={size} name={iconName} color={color} />;
          },
          tabBarActiveTintColor: MAIN_COLOR,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
          },
        };
      }}
    >
      <BottomTabNavigator.Screen name="Home" component={HomeScreen} />
      <BottomTabNavigator.Screen name="Favorite" component={FavoriteScreen} />
    </BottomTabNavigator.Navigator>
  );
}

function RootNavigation() {
  return (
    <RootStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStackNavigator.Screen name="Login" component={LoginScreen} />
      <RootStackNavigator.Screen name="Main" component={MainTabNavigator} />
    </RootStackNavigator.Navigator>
  );
}

export default RootNavigation;
