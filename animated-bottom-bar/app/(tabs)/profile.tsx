import { Feather } from "@expo/vector-icons";
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://i.pravatar.cc/150?img=4",
  enrolledCourses: 12,
  completedCourses: 8,
  points: 1250,
};

const enrolledCourses = [
  {
    id: 1,
    title: "React Native Advanced",
    progress: 75,
    image: "https://picsum.photos/400/300?random=10",
  },
  {
    id: 2,
    title: "UI/UX Design",
    progress: 45,
    image: "https://picsum.photos/400/300?random=11",
  },
  {
    id: 3,
    title: "Digital Marketing",
    progress: 30,
    image: "https://picsum.photos/400/300?random=12",
  },
];

const settings = [
  { id: 1, title: "Account Settings", icon: "user" },
  { id: 2, title: "Notification Settings", icon: "bell" },
  { id: 3, title: "Payment Methods", icon: "credit-card" },
  { id: 4, title: "Help & Support", icon: "help-circle" },
  { id: 5, title: "About", icon: "info" },
];

export default function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.profileHeader}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userEmail}>{user.email}</Text>
            </View>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.enrolledCourses}</Text>
              <Text style={styles.statLabel}>Enrolled</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.completedCourses}</Text>
              <Text style={styles.statLabel}>Completed</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.points}</Text>
              <Text style={styles.statLabel}>Points</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Courses</Text>
          {enrolledCourses.map((course) => (
            <View key={course.id} style={styles.courseItem}>
              <Image
                source={{ uri: course.image }}
                style={styles.courseImage}
              />
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View
                      style={[
                        styles.progressFill,
                        { width: `${course.progress}%` },
                      ]}
                    />
                  </View>
                  <Text style={styles.progressText}>{course.progress}%</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          {settings.map((setting) => (
            <TouchableOpacity
              key={setting.id}
              style={styles.settingItem}
              onPress={() => {}}
            >
              <View style={styles.settingLeft}>
                <Feather name={setting.icon as any} size={24} color="#7C3AED" />
                <Text style={styles.settingText}>{setting.title}</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#666666" />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: "#666666",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 15,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  statLabel: {
    fontSize: 12,
    color: "#666666",
    marginTop: 5,
  },
  section: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 15,
  },
  courseItem: {
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    overflow: "hidden",
  },
  courseImage: {
    width: 100,
    height: 80,
  },
  courseInfo: {
    flex: 1,
    padding: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 10,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 3,
    marginRight: 10,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#7C3AED",
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: "#666666",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingText: {
    fontSize: 16,
    color: "#1A1A1A",
    marginLeft: 15,
  },
  bottomSpacing: {
    height: 100,
  },
});
