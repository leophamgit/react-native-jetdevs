import * as React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LoginForm from "../components/screens/Login/LoginForm";

function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <Icon name="rocket" size={30} color="#900" />

      <LoginForm />
    </View>
  );
}

export default LoginScreen;
