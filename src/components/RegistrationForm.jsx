import { View } from "react-native";
import { Input } from "./Input";

export const RegistrationForm = () => {
  return (
    <View>
      <Input name="login" placeholder="Логін" value="" />
      <Input name="email" placeholder="Адреса електронної пошти" value="" />
      <Input name="password" placeholder="Пароль" value="" />
    </View>
  );
};
