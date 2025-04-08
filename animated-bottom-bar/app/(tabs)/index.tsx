import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const courses = [
  {
    id: 1,
    title: "React Native Fundamentals",
    instructor: "Sarah Johnson",
    image: "https://picsum.photos/400/300?random=1",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 4.8,
    students: 1200,
  },
  {
    id: 2,
    title: "Advanced UI Design",
    instructor: "Michael Chen",
    image: "https://picsum.photos/400/300?random=2",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 4.9,
    students: 850,
  },
  {
    id: 3,
    title: "Mobile App Development",
    instructor: "Emma Wilson",
    image: "https://picsum.photos/400/300?random=3",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 4.7,
    students: 1500,
  },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Welcome back!</Text>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=4" }}
            style={styles.profileImage}
          />
        </View>

        <Text style={styles.sectionTitle}>Featured Courses</Text>
        <View style={styles.coursesContainer}>
          {courses.map((course) => (
            <View key={course.id} style={styles.courseCard}>
              <Image
                source={{ uri: course.image }}
                style={styles.courseImage}
              />
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <View style={styles.instructorContainer}>
                  <Image
                    source={{ uri: course.avatar }}
                    style={styles.instructorAvatar}
                  />
                  <Text style={styles.instructorName}>{course.instructor}</Text>
                </View>
                <View style={styles.courseStats}>
                  <Text style={styles.rating}>⭐ {course.rating}</Text>
                  <Text style={styles.students}>👥 {course.students}</Text>
                </View>
              </View>
            </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginBottom: 15,
    color: "#1A1A1A",
  },
  coursesContainer: {
    paddingHorizontal: 20,
    gap: 20,
    paddingBottom: 20,
  },
  courseCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseImage: {
    width: "100%",
    height: 200,
  },
  courseInfo: {
    padding: 15,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 10,
  },
  instructorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  instructorAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  instructorName: {
    fontSize: 14,
    color: "#666666",
  },
  courseStats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rating: {
    fontSize: 14,
    color: "#666666",
  },
  students: {
    fontSize: 14,
    color: "#666666",
  },
  bottomSpacing: {
    height: 100,
  },
});
