import { Feather } from "@expo/vector-icons";
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const categories = [
  { id: 1, name: "All", icon: "grid" },
  { id: 2, name: "Development", icon: "code" },
  { id: 3, name: "Design", icon: "pen-tool" },
  { id: 4, name: "Business", icon: "briefcase" },
  { id: 5, name: "Marketing", icon: "trending-up" },
];

const popularCourses = [
  {
    id: 1,
    title: "Advanced React Native",
    category: "Development",
    image: "https://picsum.photos/400/300?random=4",
    rating: 4.9,
    students: 2500,
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    category: "Design",
    image: "https://picsum.photos/400/300?random=5",
    rating: 4.8,
    students: 1800,
  },
  {
    id: 3,
    title: "Digital Marketing 101",
    category: "Marketing",
    image: "https://picsum.photos/400/300?random=6",
    rating: 4.7,
    students: 3200,
  },
];

const newCourses = [
  {
    id: 1,
    title: "Swift for Beginners",
    category: "Development",
    image: "https://picsum.photos/400/300?random=7",
    rating: 4.6,
    students: 800,
  },
  {
    id: 2,
    title: "Figma Essentials",
    category: "Design",
    image: "https://picsum.photos/400/300?random=8",
    rating: 4.5,
    students: 1200,
  },
  {
    id: 3,
    title: "Business Analytics",
    category: "Business",
    image: "https://picsum.photos/400/300?random=9",
    rating: 4.7,
    students: 950,
  },
];

export default function Explore() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Explore</Text>
          <View style={styles.searchContainer}>
            <Feather name="search" size={20} color="#666666" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search courses..."
              placeholderTextColor="#666666"
            />
          </View>
        </View>

        <View style={styles.categoriesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <View key={category.id} style={styles.categoryItem}>
                <Feather
                  name={category.icon as any}
                  size={20}
                  color="#7C3AED"
                />
                <Text style={styles.categoryText}>{category.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Courses</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popularCourses.map((course) => (
              <View key={course.id} style={styles.courseCard}>
                <Image
                  source={{ uri: course.image }}
                  style={styles.courseImage}
                />
                <View style={styles.courseInfo}>
                  <Text style={styles.courseCategory}>{course.category}</Text>
                  <Text style={styles.courseTitle}>{course.title}</Text>
                  <View style={styles.courseStats}>
                    <Text style={styles.rating}>⭐ {course.rating}</Text>
                    <Text style={styles.students}>👥 {course.students}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New Courses</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {newCourses.map((course) => (
              <View key={course.id} style={styles.courseCard}>
                <Image
                  source={{ uri: course.image }}
                  style={styles.courseImage}
                />
                <View style={styles.courseInfo}>
                  <Text style={styles.courseCategory}>{course.category}</Text>
                  <Text style={styles.courseTitle}>{course.title}</Text>
                  <View style={styles.courseStats}>
                    <Text style={styles.rating}>⭐ {course.rating}</Text>
                    <Text style={styles.students}>👥 {course.students}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
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
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#1A1A1A",
  },
  categoriesContainer: {
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginLeft: 15,
  },
  categoryText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#1A1A1A",
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginBottom: 15,
    color: "#1A1A1A",
  },
  courseCard: {
    width: 280,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    marginLeft: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseImage: {
    width: "100%",
    height: 160,
  },
  courseInfo: {
    padding: 15,
  },
  courseCategory: {
    fontSize: 12,
    color: "#7C3AED",
    marginBottom: 5,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 10,
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
