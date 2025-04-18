import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#666666"
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="#666666"
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Your Message"
          placeholderTextColor="#666666"
          multiline
          numberOfLines={4}
        />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Send Message</Text>
        </Pressable>
      </View>
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
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 30,
    textAlign: "center",
  },
  form: {
    gap: 15,
  },
  input: {
    backgroundColor: "#2c2c2c",
    padding: 15,
    borderRadius: 8,
    color: "#ffffff",
    fontSize: 16,
  },
  messageInput: {
    height: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#4f8fff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  link: {
    marginTop: 30,
    alignSelf: "center",
  },
  linkText: {
    color: "#4f8fff",
    fontSize: 16,
  },
});
