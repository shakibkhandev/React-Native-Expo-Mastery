import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const DonutChartScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const donutData = [
    { value: 54, color: "#177AD5", text: "54%" },
    { value: 40, color: "#79D2DE", text: "40%" },
    { value: 20, color: "#ED6665", text: "20%" },
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
        <Text style={styles.title}>Performance Metrics</Text>
        <Text style={styles.subtitle}>Interactive Donut Chart</Text>
      </View>

      <View style={styles.chartContainer}>
        <PieChart
          data={donutData}
          donut
          isThreeD
          showText
          innerCircleBorderWidth={6}
          innerCircleBorderColor="lightgray"
          textColor="black"
          radius={170}
          textSize={20}
          showTextBackground
          textBackgroundRadius={26}
          focusOnPress
          onPress={(item: any, index: number) => handleSlicePress(index)}
          centerLabelComponent={() => (
            <View style={styles.centerLabelContainer}>
              <Text style={styles.centerLabelText}>Total</Text>
              <Text style={styles.centerLabelValue}>
                {donutData.reduce((sum, item) => sum + item.value, 0)}%
              </Text>
            </View>
          )}
        />
      </View>

      {selectedIndex !== -1 && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Selected Metric Details</Text>
          <Text
            style={[styles.infoText, { color: donutData[selectedIndex].color }]}
          >
            {donutData[selectedIndex].text}
          </Text>
          <Text style={styles.infoSubtext}>
            This represents the performance metric for this category
          </Text>
        </View>
      )}

      <View style={styles.descriptionContainer}>
        <Text style={styles.sectionTitle}>Chart Analysis</Text>
        <Text style={styles.description}>
          This modern donut chart provides an interactive visualization of
          performance metrics. The 3D effect and text backgrounds enhance
          readability, while the inner circle border adds a sophisticated touch
          to the design.
        </Text>

        <Text style={styles.sectionTitle}>Key Features</Text>
        <Text style={styles.description}>
          • Interactive segments with press feedback • 3D visualization effect •
          Clear percentage labels with background • Modern color scheme •
          Responsive design that works across devices
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
    borderRadius: 16,
    marginBottom: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
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
    fontSize: 24,
    fontWeight: "bold",
  },
  infoContainer: {
    backgroundColor: "#2A2A2A",
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  infoTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 24,
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
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
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

export default DonutChartScreen;
