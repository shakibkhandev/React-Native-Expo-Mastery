import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const LineChartScreen = () => {
  const dPoint = () => {
    return (
      <View
        style={{
          width: 14,
          height: 14,
          backgroundColor: "white",
          borderWidth: 3,
          borderRadius: 7,
          borderColor: "#07BAD1",
        }}
      />
    );
  };

  const lcomp = (label: string) => {
    return (
      <Text style={{ color: "lightgray", fontSize: 12, marginTop: 4 }}>
        {label}
      </Text>
    );
  };

  const latestData = [
    {
      value: 100,
      labelComponent: () => lcomp("22 Nov"),
      customDataPoint: dPoint,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 210,
      customDataPoint: dPoint,
    },
    {
      value: 250,
      hideDataPoint: true,
    },
    {
      value: 320,
      labelComponent: () => lcomp("24 Nov"),
      customDataPoint: dPoint,
    },
    {
      value: 310,
      hideDataPoint: true,
    },
    {
      value: 270,
      customDataPoint: dPoint,
    },
    {
      value: 240,
      hideDataPoint: true,
    },
    {
      value: 130,
      labelComponent: () => lcomp("26 Nov"),
      customDataPoint: dPoint,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: dPoint,
    },
    {
      value: 210,
      hideDataPoint: true,
    },
    {
      value: 270,
      labelComponent: () => lcomp("28 Nov"),
      customDataPoint: dPoint,
    },
    {
      value: 240,
      hideDataPoint: true,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: dPoint,
    },
    {
      value: 210,
      labelComponent: () => lcomp("28 Nov"),
      customDataPoint: dPoint,
    },
    {
      value: 20,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: dPoint,
    },
  ];

  const [currentData, setCurrentData] = useState(latestData);

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Advanced Line Chart</Text>
        <Text style={styles.subtitle}>
          Interactive Data Visualization with Custom Points
        </Text>
      </View>

      <View style={styles.chartContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chartScrollContent}
        >
          <LineChart
            isAnimated
            thickness={3}
            color="#07BAD1"
            maxValue={600}
            noOfSections={3}
            animateOnDataChange
            animationDuration={1000}
            onDataChangeAnimationDuration={300}
            areaChart
            yAxisTextStyle={{ color: "lightgray" }}
            data={currentData}
            hideDataPoints
            startFillColor={"rgb(84,219,234)"}
            endFillColor={"rgb(84,219,234)"}
            startOpacity={0.4}
            endOpacity={0.1}
            spacing={22}
            backgroundColor="#414141"
            rulesColor="gray"
            rulesType="solid"
            initialSpacing={10}
            yAxisColor="lightgray"
            xAxisColor="lightgray"
          />
        </ScrollView>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.sectionTitle}>Chart Features</Text>
        <Text style={styles.description}>
          • Animated line chart with custom data points • Area chart with
          gradient fill • Custom date labels • Interactive data visualization •
          Smooth animations on data changes
        </Text>

        <Text style={styles.sectionTitle}>Detailed Analysis</Text>
        <Text style={styles.description}>
          This advanced line chart visualization provides a comprehensive view
          of data trends over time. The chart features: • Custom data points
          with white circles and blue borders for better visibility •
          Gradient-filled area below the line to emphasize the data trend • Date
          labels at strategic intervals (22 Nov, 24 Nov, 26 Nov, 28 Nov) •
          Smooth animations with a 1-second duration for data changes •
          Horizontal scrolling to view the complete dataset • Gray rules and
          axes for improved readability • Maximum value of 600 with 3 sections
          for clear value representation
        </Text>

        <Text style={styles.sectionTitle}>Data Points</Text>
        <Text style={styles.description}>
          The chart displays 19 data points showing value fluctuations over
          time: • Peak values around 320-270 range • Lowest point at 20 •
          Regular intervals of data collection • Strategic placement of date
          labels for time reference • Alternating visible and hidden data points
          for cleaner visualization
        </Text>

        <Text style={styles.sectionTitle}>Technical Specifications</Text>
        <Text style={styles.description}>
          • Chart Type: Area Line Chart • Animation Duration: 1000ms • Data
          Change Animation: 300ms • Line Thickness: 3px • Data Point Size:
          14x14px • Spacing Between Points: 22px • Initial Spacing: 10px • Color
          Scheme: Blue (#07BAD1) with gradient fill • Background: Dark theme
          (#414141)
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
    width: "100%",
    overflow: "hidden",
  },
  chartScrollContent: {
    paddingRight: 20,
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

export default LineChartScreen;
