import { useOnBoardingState } from "@/context/zustand";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import React from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const { width, height } = Dimensions.get("window");

export default function OnBoarding() {
  const { setIsOnBoarding } = useOnBoardingState();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <LinearGradient colors={["#1a1a1a", "#000000"]} style={styles.gradient} />
      <Onboarding
        onDone={() => setIsOnBoarding(false)}
        onSkip={() => setIsOnBoarding(false)}
        DoneButtonComponent={() => (
          <TouchableOpacity
            onPress={() => setIsOnBoarding(false)}
            style={styles.doneButton}
          >
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        )}
        pages={[
          {
            backgroundColor: "transparent",
            image: (
              <View style={styles.lottieContainer}>
                <LottieView
                  source={require("../assets/animations/lottie1.json")}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
            title: "Welcome to Our App",
            subtitle:
              "Discover amazing features that will make your life easier",
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
          {
            backgroundColor: "transparent",
            image: (
              <View style={styles.lottieContainer}>
                <LottieView
                  source={require("../assets/animations/lottie2.json")}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
            title: "Get Started",
            subtitle:
              "Join thousands of users who are already enjoying our app",
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
        ]}
        containerStyles={styles.onboardingContainer}
        imageContainerStyles={styles.imageContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  onboardingContainer: {
    flex: 1,
  },
  imageContainer: {
    paddingBottom: 20,
  },
  lottieContainer: {
    width: width * 0.8,
    height: height * 0.4,
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        shadowColor: "#007AFF",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  lottie: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
    ...Platform.select({
      ios: {
        fontFamily: "System",
      },
      android: {
        fontFamily: "sans-serif-medium",
      },
    }),
  },
  subtitle: {
    fontSize: 16,
    color: "#ffffff99",
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 24,
    ...Platform.select({
      ios: {
        fontFamily: "System",
      },
      android: {
        fontFamily: "sans-serif",
      },
    }),
  },
  doneButton: {
    padding: 12,
    borderRadius: 8,
    marginRight: 16,
  },
  doneButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
