import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Dark Theme Demo</Text>
      <View style={styles.linksContainer}>
        <Link href="/about" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>About</Text>
          </Pressable>
        </Link>
        <Link href="/contact" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact</Text>
          </Pressable>
        </Link>
        <Link href="/projects" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Projects</Text>
          </Pressable>
        </Link>
        <Link href="/settings" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Settings</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 30,
  },
  linksContainer: {
    gap: 15,
  },
  button: {
    backgroundColor: "#2c2c2c",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
