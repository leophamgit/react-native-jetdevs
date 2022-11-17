import { useForm, UseFormReturn, FormProvider } from "react-hook-form";
import { StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { MAIN_COLOR } from "../../../../../constants/colors";
import FormInput from "../../../../FormInput";
import { MOCK_LOGIN_USER } from "./constants";
import { useEffect } from "react";

interface ILoginFormValues {
  email: string;
  password: string;
}

function LoginForm() {
  const navigation = useNavigation();
  const methods: UseFormReturn<ILoginFormValues> = useForm<ILoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    formState: { isDirty },
    reset,
  } = methods;

  function onSubmit(formData: ILoginFormValues): void {
    const { email, password } = MOCK_LOGIN_USER;

    if (formData?.email === email && formData?.password === password) {
      reset({
        email: "",
        password: "",
      });
      return navigation.navigate("Main");
    }

    Alert.alert("Login Failed", "Email or password invalid");
  }

  return (
    <FormProvider {...methods}>
      <FormInput
        name="email"
        placeholder="Email"
        required
        icon={<FontistoIcon name="email" size={20} color="#a1a1a1" />}
      />
      <FormInput
        name="password"
        placeholder="Password"
        required
        icon={
          <Ionicons name="md-lock-closed-outline" size={20} color="#a1a1a1" />
        }
        secureTextEntry
      />
      <TouchableOpacity
        style={[
          styles.submitButton,
          isDirty ? styles.activeButton : styles.disabledSubmitButton,
        ]}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.submitText}>login</Text>
      </TouchableOpacity>
    </FormProvider>
  );
}

export default LoginForm;

const styles = StyleSheet.create({
  submitButton: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    height: 36,
    borderRadius: 4,
    marginTop: 40,
  },
  activeButton: {
    backgroundColor: MAIN_COLOR,
  },
  disabledSubmitButton: {
    backgroundColor: "#d7d9e0",
  },
  submitText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "700",
  },
});
