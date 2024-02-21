import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Background } from "../components/Background";
import { Title } from "../components/Title";
import { RegistrationForm } from "../components/RegistrationForm";
import { Avatar } from "../components/Avatar";
import { useState } from "react";

export const RegistrationScreen = () => {
  const [avatar, setAvatar] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-100}
        style={styles.container}
      >
        <Background>
          <View style={styles.wrapper}>
            <Avatar avatar={avatar} setAvatar={setAvatar} />
            <Title title="Реєстрація" />
            <RegistrationForm avatar={avatar} />
          </View>
        </Background>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: "100%",
    paddingTop: 90,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 30,
    backgroundColor: "#fff",
  },
});
