import { ImageBackground, StyleSheet } from "react-native";
import image from "../../assets/images/photo-bg.png";

export const Background = ({ children }) => {
  return (
    <>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {children}
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
});
