import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        We are a team of passionate developers creating amazing experiences with
        React Native and Expo.
      </Text>
      <Link href="/" style={styles.link}>
        <Text style={styles.linkText}>← Back to Home</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#cccccc",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: "#4f8fff",
    fontSize: 16,
  },
});
