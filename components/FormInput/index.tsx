import { useFormContext, Controller } from "react-hook-form";
import { TextInput } from "react-native";

function FormInput() {
  const { control } = useFormContext();

  return (
    <Controller
      name="test"
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
      )}
    />
  );
}

export default FormInput;
