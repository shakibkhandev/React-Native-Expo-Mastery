import LottieView from "lottie-react-native";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

export default function Index() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const windowWidth = Dimensions.get("window").width;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#1a1a1a" : "#ffffff" },
      ]}
    >
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={isDark ? "#1a1a1a" : "#ffffff"}
      />
      <LottieView
        source={require("../assets/animations/lottie1.json")}
        autoPlay
        loop
        style={[styles.animation, { width: windowWidth }]}
      />
      <Text style={[styles.text, { color: isDark ? "#ffffff" : "#000000" }]}>
        Welcome to Lottie Animation
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    height: 300,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "600",
  },
});
