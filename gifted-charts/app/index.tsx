import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type ChartRoute =
  | "/bar"
  | "/line"
  | "/horizontal-bar"
  | "/stacked-bar"
  | "/area"
  | "/pie"
  | "/donut"
  | "/population-pyramid"
  | "/radar";

const charts: {
  title: string;
  description: string;
  icon: string;
  route: ChartRoute;
}[] = [
  {
    title: "Bar Chart",
    description: "Visualize data with vertical bars",
    icon: "bar-chart",
    route: "/bar",
  },
  {
    title: "Line Chart",
    description: "Track trends over time",
    icon: "trending-up",
    route: "/line",
  },
  {
    title: "Horizontal Bar",
    description: "Compare categories horizontally",
    icon: "swap-horizontal",
    route: "/horizontal-bar",
  },
  {
    title: "Stacked Bar",
    description: "Show part-to-whole relationships",
    icon: "layers",
    route: "/stacked-bar",
  },
  {
    title: "Area Chart",
    description: "Emphasize volume of change",
    icon: "analytics",
    route: "/area",
  },
  {
    title: "Pie Chart",
    description: "Display proportions of a whole",
    icon: "pie-chart",
    route: "/pie",
  },
  {
    title: "Donut Chart",
    description: "Show proportions with a hole",
    icon: "disc",
    route: "/donut",
  },
  {
    title: "Population Pyramid",
    description: "Compare age and gender distribution",
    icon: "people",
    route: "/population-pyramid",
  },
  {
    title: "Radar Chart",
    description: "Compare multiple variables",
    icon: "navigate",
    route: "/radar",
  },
];

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chart Gallery</Text>
        <Text style={styles.subtitle}>
          Explore different types of data visualizations
        </Text>
      </View>

      <View style={styles.grid}>
        {charts.map((chart, index) => (
          <Link key={index} href={chart.route} asChild>
            <Pressable style={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.iconContainer}>
                  <Ionicons
                    name={chart.icon as any}
                    size={24}
                    color="#4ABFF4"
                  />
                </View>
                <Text style={styles.cardTitle}>{chart.title}</Text>
                <Text style={styles.cardDescription}>{chart.description}</Text>
              </View>
            </Pressable>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    padding: 20,
    paddingTop: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#A0A0A0",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  card: {
    width: "50%",
    padding: 10,
  },
  cardContent: {
    backgroundColor: "#2A2A2A",
    borderRadius: 12,
    padding: 16,
    height: 160,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(74, 191, 244, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#A0A0A0",
    lineHeight: 20,
  },
});
