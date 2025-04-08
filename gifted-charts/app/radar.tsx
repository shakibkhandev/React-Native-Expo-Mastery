import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { RadarChart } from "react-native-gifted-charts";

const RadarChartScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const radarData = [
    { value: 80, label: "Performance" },
    { value: 70, label: "Quality" },
    { value: 90, label: "Reliability" },
    { value: 85, label: "Efficiency" },
    { value: 75, label: "Innovation" },
    { value: 95, label: "Support" },
  ];

  const handlePointPress = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Performance Metrics Analysis</Text>
        <Text style={styles.subtitle}>Radar Chart Visualization</Text>
      </View>

      <View style={styles.chartContainer}>
        <RadarChart
          data={radarData.map((item) => item.value)}
          labels={radarData.map((item) => item.label)}
          polygonConfig={{
            stroke: "#4ABFF4",
            strokeWidth: 2,
            fill: "#4ABFF4",
            opacity: 0.3,
            gradientColor: "#1A1A1A",
            showGradient: true,
            gradientOpacity: 0.1,
          }}
          gridConfig={{
            stroke: "#2A2A2A",
            strokeWidth: 1,
            opacity: 0.5,
          }}
          labelConfig={{
            stroke: "#FFFFFF",
            fontSize: 14,
            fontWeight: "600",
          }}
          hideGrid={false}
          isAnimated
          animationDuration={1200}
          noOfSections={5}
          chartSize={300}
        />
      </View>

      {selectedIndex !== -1 && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Selected Metric Details</Text>
          <Text style={styles.infoText}>
            {radarData[selectedIndex].label}: {radarData[selectedIndex].value}%
          </Text>
          <Text style={styles.infoSubtext}>
            This represents the performance score for{" "}
            {radarData[selectedIndex].label}
          </Text>
        </View>
      )}

      <View style={styles.descriptionContainer}>
        <Text style={styles.sectionTitle}>Chart Analysis</Text>
        <Text style={styles.description}>
          This radar chart provides a comprehensive visualization of performance
          metrics across different categories. The spider-web design makes it
          easy to compare multiple metrics simultaneously and identify strengths
          and areas for improvement.
        </Text>

        <Text style={styles.sectionTitle}>Key Insights</Text>
        <Text style={styles.description}>
          • Support shows the highest performance at 95% • Reliability and
          Efficiency follow with 90% and 85% respectively • Performance and
          Quality are at 80% and 70% • Innovation shows room for improvement at
          75% • The filled area helps visualize overall performance
        </Text>

        <Text style={styles.sectionTitle}>How to Use</Text>
        <Text style={styles.description}>
          • Tap on any data point to view detailed information for that metric •
          The highlighted point indicates the currently selected metric • The
          distance from the center represents the performance score • The filled
          area shows the overall performance profile • Use this data to identify
          strengths and areas for improvement
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
    padding: 20,
  },
  headerContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#A0A0A0",
    marginBottom: 24,
  },
  chartContainer: {
    backgroundColor: "#2A2A2A",
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
    alignItems: "center",
  },
  infoContainer: {
    backgroundColor: "#2A2A2A",
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  infoTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  infoText: {
    color: "#4ABFF4",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  infoSubtext: {
    color: "#A0A0A0",
    fontSize: 14,
  },
  descriptionContainer: {
    backgroundColor: "#2A2A2A",
    padding: 20,
    borderRadius: 12,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    marginTop: 16,
  },
  description: {
    color: "#A0A0A0",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
});

export default RadarChartScreen;
