import { useForm, UseFormReturn, FormProvider } from "react-hook-form";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import FormInput from "../../../FormInput";

interface ILoginFormValues {
  email: string;
  password: string;
}

function LoginForm() {
  const methods: UseFormReturn<ILoginFormValues> = useForm<ILoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;

  function onSubmit(formData: ILoginFormValues): void {
    console.log({ formData });
  }

  return (
    <FormProvider {...methods}>
      <FormInput
        name="email"
        placeholder="Email"
        icon={<FontistoIcon name="email" size={20} color="#a1a1a1" />}
      />
      <FormInput
        name="password"
        placeholder="Password"
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
    backgroundColor: "#e0337a",
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
