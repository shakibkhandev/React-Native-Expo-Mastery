import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A React Native mobile app with dark theme",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Web application with modern UI/UX",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Cross-platform desktop application",
  },
  { id: 4, title: "Project 4", description: "AI-powered chatbot interface" },
];

export default function Projects() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Our Projects</Text>
      <View style={styles.grid}>
        {projects.map((project) => (
          <Pressable key={project.id} style={styles.card}>
            <Text style={styles.cardTitle}>{project.title}</Text>
            <Text style={styles.cardDescription}>{project.description}</Text>
          </Pressable>
        ))}
      </View>
      <Link href="/" style={styles.link}>
        <Text style={styles.linkText}>← Back to Home</Text>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 30,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#2c2c2c",
    padding: 20,
    borderRadius: 12,
    width: "45%",
    minHeight: 150,
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: "#cccccc",
    lineHeight: 20,
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
