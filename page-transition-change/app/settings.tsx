import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.settingsList}>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: "#3a3a3a", true: "#4f8fff" }}
            thumbColor={notifications ? "#ffffff" : "#f4f3f4"}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: "#3a3a3a", true: "#4f8fff" }}
            thumbColor={darkMode ? "#ffffff" : "#f4f3f4"}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Sound Effects</Text>
          <Switch
            value={soundEnabled}
            onValueChange={setSoundEnabled}
            trackColor={{ false: "#3a3a3a", true: "#4f8fff" }}
            thumbColor={soundEnabled ? "#ffffff" : "#f4f3f4"}
          />
        </View>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </Pressable>
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
  settingsList: {
    backgroundColor: "#2c2c2c",
    borderRadius: 12,
    overflow: "hidden",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#3a3a3a",
  },
  settingLabel: {
    color: "#ffffff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#4f8fff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 30,
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
