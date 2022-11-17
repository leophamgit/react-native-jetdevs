import { ReactNode } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextInput, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
interface IFormInputProps {
  name: string;
  placeholder: string;
  icon?: ReactNode;
  secureTextEntry?: boolean;
  required?: boolean;
}

function FormInput({
  name,
  icon,
  placeholder,
  secureTextEntry,
  required,
}: IFormInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  function getPattern(): { value: RegExp; message: string } | undefined {
    switch (name) {
      case "email":
        return {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: "please enter a valid email",
        };
      default:
        return undefined;
    }
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required ? `${name} is required` : false,
        pattern: getPattern(),
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            {icon}
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
            />
          </View>
          {errors[name] && (
            <Text style={styles.errorText}>{`${errors[name]?.message}`}</Text>
          )}
        </View>
      )}
    />
  );
}

export default FormInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    position: "relative",
  },
  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    alignItems: "center",
    borderBottomColor: "#edeef2",
  },
  input: {
    fontSize: 14,
    color: "#a1a1a1",
    fontWeight: "500",
    height: 30,
    width: "90%",
    marginHorizontal: 10,
  },
  errorText: {
    color: "red",
    position: "absolute",
    bottom: -18,
  },
});
