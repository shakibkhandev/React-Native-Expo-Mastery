import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.username}>User</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Ionicons name="trending-up" size={24} color="#4CAF50" />
            <Text style={styles.statValue}>245</Text>
            <Text style={styles.statLabel}>Active</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="people" size={24} color="#2196F3" />
            <Text style={styles.statValue}>1.2k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="heart" size={24} color="#F44336" />
            <Text style={styles.statValue}>856</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.gridContainer}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <TouchableOpacity key={item} style={styles.gridItem}>
                <Image
                  source={{ uri: `https://picsum.photos/seed/${item}/400/300` }}
                  style={styles.gridImage}
                />
                <View style={styles.gridContent}>
                  <Text style={styles.gridTitle}>Item {item}</Text>
                  <Text style={styles.gridSubtitle}>Description</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 8,
  },
  greeting: {
    fontSize: 14,
    color: "#B0B0B0",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  notificationButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  statCard: {
    backgroundColor: "#2A2A2A",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#B0B0B0",
  },
  contentContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    backgroundColor: "#2A2A2A",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  gridImage: {
    height: 120,
    width: "100%",
    backgroundColor: "#3A3A3A",
  },
  gridContent: {
    padding: 12,
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  gridSubtitle: {
    fontSize: 12,
    color: "#B0B0B0",
  },
});
