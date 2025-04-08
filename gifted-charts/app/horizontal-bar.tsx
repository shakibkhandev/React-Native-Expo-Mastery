import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const HorizontalBarChartScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const barData = [
    { value: 250, label: "M" },
    { value: 500, label: "T", frontColor: "#177AD5" },
    { value: 745, label: "W", frontColor: "#177AD5" },
    { value: 320, label: "T" },
    { value: 600, label: "F", frontColor: "#177AD5" },
    { value: 256, label: "S" },
    { value: 300, label: "S" },
  ];

  const handleBarPress = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Weekly Performance</Text>
        <Text style={styles.subtitle}>Daily Activity Overview</Text>
      </View>

      <View style={styles.chartContainer}>
        <BarChart
          data={barData}
          horizontal
          barWidth={16}
          barBorderRadius={4}
          frontColor="lightgray"
          yAxisThickness={0}
          xAxisThickness={0}
          hideRules
          yAxisTextStyle={{ color: "#A0A0A0" }}
          xAxisLabelTextStyle={{ color: "#A0A0A0", textAlign: "center" }}
          labelWidth={30}
          rotateLabel
          isAnimated
          animationDuration={1000}
          onPress={(item: any, index: number) => handleBarPress(index)}
          barStyle={{
            opacity: (index: number) => (selectedIndex === index ? 1 : 0.7),
          }}
          height={200}
          width={280}
        />
      </View>

      {selectedIndex !== -1 && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Selected Day Details</Text>
          <Text style={styles.infoText}>
            {barData[selectedIndex].label}: {barData[selectedIndex].value}
          </Text>
          <Text style={styles.infoSubtext}>
            This represents the activity level for{" "}
            {barData[selectedIndex].label}
          </Text>
        </View>
      )}

      <View style={styles.descriptionContainer}>
        <Text style={styles.sectionTitle}>Chart Analysis</Text>
        <Text style={styles.description}>
          This horizontal bar chart provides a clear visualization of daily
          activity levels throughout the week. The horizontal orientation makes
          it easy to compare performance across different days.
        </Text>

        <Text style={styles.sectionTitle}>Key Insights</Text>
        <Text style={styles.description}>
          • Wednesday shows the highest activity level with 745 units • Tuesday
          and Friday demonstrate strong performance with 500 and 600 units
          respectively • The horizontal layout makes it easy to read day labels
          • The bars represent the activity levels for each day • The chart
          helps identify peak and low activity days
        </Text>

        <Text style={styles.sectionTitle}>How to Use</Text>
        <Text style={styles.description}>
          • Tap on any bar to view detailed information for that specific day •
          The highlighted bar indicates the currently selected day • The length
          of each bar represents the activity level • Use this data to identify
          patterns in daily activity and plan accordingly
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
    flexGrow: 1,
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
    fontSize: 16,
    color: "#A0A0A0",
    marginBottom: 16,
  },
  chartContainer: {
    backgroundColor: "#2A2A2A",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  infoContainer: {
    backgroundColor: "#2A2A2A",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  infoTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  infoText: {
    color: "#4ABFF4",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  infoSubtext: {
    color: "#A0A0A0",
    fontSize: 14,
  },
  descriptionContainer: {
    backgroundColor: "#2A2A2A",
    padding: 16,
    borderRadius: 12,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 12,
  },
  description: {
    color: "#A0A0A0",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
});

export default HorizontalBarChartScreen;
