import { ReactNode } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextInput, View, StyleSheet } from "react-native";
interface IFormInputProps {
  name: string;
  placeholder: string;
  icon?: ReactNode;
  secureTextEntry?: boolean;
}

function FormInput({
  name,
  icon,
  placeholder,
  secureTextEntry,
}: IFormInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.container}>
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
      )}
    />
  );
}

export default FormInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    alignItems: "center",
    borderBottomColor: "#edeef2",
    marginBottom: 20,
  },
  input: {
    fontSize: 14,
    color: "#a1a1a1",
    fontWeight: "500",
    height: 30,
    width: "90%",
    marginHorizontal: 10,
  },
});
