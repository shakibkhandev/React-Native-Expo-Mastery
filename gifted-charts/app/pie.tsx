import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const PieChartScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const pieData = [
    { value: 30, color: "#4ABFF4", text: "Product A" },
    { value: 20, color: "#F29C6E", text: "Product B" },
    { value: 25, color: "#6C5CE7", text: "Product C" },
    { value: 15, color: "#00B894", text: "Product D" },
    { value: 10, color: "#E84393", text: "Product E" },
  ];

  const handleSlicePress = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Market Share Analysis</Text>
        <Text style={styles.subtitle}>Pie Chart Visualization</Text>
      </View>

      <View style={styles.chartContainer}>
        <PieChart
          data={pieData}
          donut
          showText
          textColor="white"
          radius={120}
          textSize={12}
          focusOnPress
          onPress={(item: any, index: number) => handleSlicePress(index)}
          centerLabelComponent={() => (
            <View style={styles.centerLabelContainer}>
              <Text style={styles.centerLabelText}>Total</Text>
              <Text style={styles.centerLabelValue}>
                {pieData.reduce((sum, item) => sum + item.value, 0)}%
              </Text>
            </View>
          )}
        />
      </View>

      {selectedIndex !== -1 && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Selected Product Details</Text>
          <Text
            style={[styles.infoText, { color: pieData[selectedIndex].color }]}
          >
            {pieData[selectedIndex].text}: {pieData[selectedIndex].value}%
          </Text>
          <Text style={styles.infoSubtext}>
            This represents the market share percentage for{" "}
            {pieData[selectedIndex].text}
          </Text>
        </View>
      )}

      <View style={styles.descriptionContainer}>
        <Text style={styles.sectionTitle}>Chart Analysis</Text>
        <Text style={styles.description}>
          This pie chart provides a clear visualization of market share
          distribution across different products. The circular representation
          makes it easy to understand the relative proportions of each product's
          contribution to the total market.
        </Text>

        <Text style={styles.sectionTitle}>Key Insights</Text>
        <Text style={styles.description}>
          • Product A has the largest market share at 30% • Product B and C
          follow with 20% and 25% respectively • Product D and E have smaller
          shares at 15% and 10% • The donut chart design emphasizes the relative
          proportions • The center label shows the total market coverage
        </Text>

        <Text style={styles.sectionTitle}>How to Use</Text>
        <Text style={styles.description}>
          • Tap on any slice to view detailed information for that product • The
          highlighted slice indicates the currently selected product • The size
          of each slice represents its market share percentage • The center
          shows the total market coverage • Use this data to understand product
          distribution and market dynamics
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
  centerLabelContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  centerLabelText: {
    color: "#A0A0A0",
    fontSize: 14,
  },
  centerLabelValue: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
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

export default PieChartScreen;
