import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { PopulationPyramid } from "react-native-gifted-charts";

const PopulationPyramidScreen = () => {
  const data = [
    { left: 15, right: 17, leftBarLabel: "0-9", rightBarLabel: "0-9" },
    { left: 30, right: 27, leftBarLabel: "10-19", rightBarLabel: "10-19" },
    { left: 26, right: 25, leftBarLabel: "20-29", rightBarLabel: "20-29" },
    { left: 40, right: 44, leftBarLabel: "30-39", rightBarLabel: "30-39" },
    { left: 35, right: 38, leftBarLabel: "40-49", rightBarLabel: "40-49" },
    { left: 28, right: 32, leftBarLabel: "50-59", rightBarLabel: "50-59" },
    { left: 20, right: 25, leftBarLabel: "60-69", rightBarLabel: "60-69" },
    { left: 12, right: 18, leftBarLabel: "70+", rightBarLabel: "70+" },
  ];

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Population Distribution</Text>
        <Text style={styles.subtitle}>Age and Gender Analysis (2023)</Text>
      </View>

      <View style={styles.chartContainer}>
        <View style={styles.chartWrapper}>
          <PopulationPyramid
            data={data}
            showValuesAsBarLabels
            showXAxisIndices
            showYAxisIndices
            xAxisColor="#FFFFFF"
            yAxisColor="#FFFFFF"
            leftBarColor="#4ABFF4"
            rightBarColor="#F29C6E"
            leftBarLabelColor="#FFFFFF"
            rightBarLabelColor="#FFFFFF"
            xAxisLabelColor="#FFFFFF"
            yAxisLabelColor="#FFFFFF"
            width={Dimensions.get("window").width - 52}
          />
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>215M</Text>
          <Text style={styles.statLabel}>Total Population</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>105M</Text>
          <Text style={styles.statLabel}>Male Population</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>110M</Text>
          <Text style={styles.statLabel}>Female Population</Text>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.sectionTitle}>About This Chart</Text>
        <Text style={styles.description}>
          This population pyramid visualizes the age and gender distribution of
          a population. The back-to-back horizontal bars show the proportion of
          males and females in each age group, helping to understand demographic
          patterns and trends.
        </Text>

        <Text style={styles.sectionTitle}>Key Insights</Text>
        <View style={styles.insightsContainer}>
          <View style={styles.insightItem}>
            <View
              style={[styles.insightIndicator, { backgroundColor: "#4ABFF4" }]}
            />
            <Text style={styles.insightText}>
              • Peak male population in 30-39 age group
            </Text>
          </View>
          <View style={styles.insightItem}>
            <View
              style={[styles.insightIndicator, { backgroundColor: "#F29C6E" }]}
            />
            <Text style={styles.insightText}>
              • Higher female population in older age groups
            </Text>
          </View>
          <View style={styles.insightItem}>
            <View
              style={[styles.insightIndicator, { backgroundColor: "#4ABFF4" }]}
            />
            <Text style={styles.insightText}>
              • Balanced gender distribution in younger age groups
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Demographic Trends</Text>
        <Text style={styles.description}>
          The population pyramid reveals several important demographic trends:
          {"\n\n"}• The 30-39 age group shows the highest population
          concentration
          {"\n"}• There is a gradual decrease in population with increasing age
          {"\n"}• The female population slightly outnumbers males in older age
          groups
          {"\n"}• Younger age groups show a more balanced gender distribution
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  contentContainer: {
    padding: 16,
  },
  headerContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#A0A0A0",
  },
  chartContainer: {
    backgroundColor: "#2A2A2A",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  chartWrapper: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2A2A2A",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statValue: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  statLabel: {
    color: "#A0A0A0",
    fontSize: 12,
    textAlign: "center",
  },
  descriptionContainer: {
    backgroundColor: "#2A2A2A",
    padding: 12,
    borderRadius: 12,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 16,
  },
  description: {
    color: "#A0A0A0",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  insightsContainer: {
    marginTop: 8,
    marginBottom: 16,
  },
  insightItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  insightIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  insightText: {
    color: "#A0A0A0",
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },
});

export default PopulationPyramidScreen;
