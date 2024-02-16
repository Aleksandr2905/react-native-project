import {
  ActivityIndicator,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { posts } from "../data/posts";
import { ButtonForm } from "../components/ButtonForm";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const CreatePostsScreen = () => {
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [locate, setLocate] = useState("");
  const disable = !(title || locate);
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getLocation = async () => {
    let { status } = await Location.requestBackgroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setLocation(coords);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
    getLocation();
  }, []);

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
    }
  };

  const deletePhoto = () => {
    setPhoto("");
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  //==============================
  // const getLocation = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== "granted") {
  //     console.log("Permission to access location was denied");
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   const coords = {
  //     latitude: location.coords.latitude,
  //     longitude: location.coords.longitude,
  //   };
  //   setLocation(coords);
  // };

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     await MediaLibrary.requestPermissionsAsync();

  //     setHasPermission(status === "granted");
  //   })();
  //   getLocation();
  // }, []);

  // const getLocationName = async () => {
  //   try {
  //     if (location) {
  //       const locationInfo = await Location.reverseGeocodeAsync({
  //         latitude: location.latitude,
  //         longitude: location.longitude,
  //       });
  //       if (locationInfo && locationInfo.length > 0) {
  //         const { city, country } = locationInfo[0];
  //         const locationString = `${city}, ${country}`;
  //         setLocate(locationString);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error fetching location:", error);
  //   }
  // };

  // useEffect(() => {
  //   getLocationName();
  // }, [location]);

  //============================================================================

  const addPost = () => {
    const newPost = {
      id: Math.random(),
      photo: { uri: photo },
      title,
      comments: 0,
      likes: 0,
      country: locate,
      location,
    };
    posts.push(newPost);
    deleteAll();

    navigation.navigate("PostsScreen", { newPost });
  };

  const deleteAll = () => {
    setPhoto("");
    setTitle("");
    setLocate("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.generalWrapper}>
          <View style={styles.photoWrapper}>
            {photo ? (
              <ImageBackground source={{ uri: photo }} style={styles.camera}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonDelete]}
                  onPress={deletePhoto}
                >
                  <MaterialIcons
                    name="delete-forever"
                    size={24}
                    style={styles.iconCamera}
                  />
                </TouchableOpacity>
              </ImageBackground>
            ) : (
              <Camera style={styles.camera} type={type} ref={setCameraRef}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    isLoading && { pointerEvents: "none" },
                  ]}
                  onPress={takePhoto}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <ActivityIndicator size="large" color="#bdbdbd" />
                  ) : (
                    <FontAwesome
                      name="camera"
                      size={24}
                      style={styles.iconCamera}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.flipContainer}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <MaterialIcons
                    name="flip-camera-android"
                    size={24}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
              </Camera>
            )}
          </View>
          <Text style={styles.text}>
            {photo ? "Редагувати фото" : "Завантажте фото"}
          </Text>

          <TextInput
            style={styles.input}
            name="name"
            placeholder="Назва..."
            placeholderTextColor={"#bdbdbd"}
            value={title}
            onChangeText={setTitle}
          />
          <View>
            <TextInput
              style={styles.inputLocation}
              name="location"
              placeholder="Місцевість..."
              placeholderTextColor={"#bdbdbd"}
              value={locate}
              onChangeText={setLocate}
            />
            <Feather
              name="map-pin"
              size={24}
              color={"#BDBDBD"}
              style={styles.mapPin}
            />
          </View>
          <ButtonForm
            title="Опубліковати"
            onPress={addPost}
            disabled={disable}
          />
          <TouchableOpacity style={styles.btnDelete}>
            <Feather name="trash-2" size={24} style={styles.iconDelete} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
  },
  generalWrapper: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  photoWrapper: {
    height: 240,
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
  },
  camera: {
    flex: 1,
    justifyContent: "center",
  },
  photo: {
    backgroundColor: "#f6f6f6",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    // color: "#BDBDBD",
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    // padding: 18,
    width: 60,
    height: 60,
  },
  buttonDelete: {
    backgroundColor: "#FFFFFF30",
  },
  iconCamera: {
    // justifyContent: "center",
    // alignSelf: "center",
    color: "#BDBDBD",
    // borderRadius: 50,
    // backgroundColor: "#FFFFFF",
    // padding: 18,
    // width: 60,
    // height: 60,
  },
  flipContainer: {
    // flex: 0.1,
    position: "absolute",
    right: 30,
    bottom: "45%",
  },
  text: {
    paddingTop: 8,
    fontSize: 16,
    color: "#bdbdbd",
  },
  input: {
    height: 50,
    marginTop: 32,
    borderBottomWidth: 1,
    fontSize: 16,
    borderBottomColor: "#e8e8e8",
  },
  inputLocation: {
    height: 50,
    marginTop: 16,
    marginBottom: 32,
    borderBottomWidth: 1,
    paddingLeft: 28,
    fontSize: 16,
    borderBottomColor: "#e8e8e8",
  },
  mapPin: {
    position: "absolute",
    top: 30,
  },
  btnDelete: {
    width: 70,
    height: 40,
    alignSelf: "center",
    marginTop: 120,
    marginBottom: 34,
    borderRadius: 20,
    paddingHorizontal: 23,
    paddingVertical: 8,
    backgroundColor: "#f6f6f6",
  },
  iconDelete: {
    color: "#BDBDBD",
  },
});
