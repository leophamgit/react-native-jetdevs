import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import LoginForm from "../components/screens/Login/components/LoginForm";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MAIN_COLOR } from "../constants/colors";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Ionicons name="ios-logo-react" color={MAIN_COLOR} size={40} />
        </View>

        <Text style={styles.heading}>login</Text>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 120,
    paddingHorizontal: 20,
    backgroundColor: "#f6f6fb",
  },
  content: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 10,
    position: "relative",
  },
  logoContainer: {
    height: 70,
    width: 70,
    backgroundColor: "white",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -30,
  },
  heading: {
    textTransform: "uppercase",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 100,
  },
  formContainer: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
  },
});
