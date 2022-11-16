import { useForm, UseFormReturn, FormProvider } from "react-hook-form";
import { Button, View } from "react-native";
import FormInput from "../../../FormInput";

interface ILoginFormValues {
  email: string;
  password: string;
}

function LoginForm() {
  const methods: UseFormReturn<ILoginFormValues> = useForm<ILoginFormValues>();
  const { handleSubmit } = methods;

  function onSubmit(formData: ILoginFormValues): void {
    console.log({ formData });
  }

  return (
    <FormProvider {...methods}>
      <FormInput />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </FormProvider>
  );
}

export default LoginForm;
