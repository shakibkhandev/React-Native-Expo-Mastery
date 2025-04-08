import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const BarChartScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const barData = [
    {
      value: 2500,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Jan",
    },
    { value: 2400, frontColor: "#3BE9DE", gradientColor: "#93FCF8" },

    {
      value: 3500,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Feb",
    },
    { value: 3000, frontColor: "#3BE9DE", gradientColor: "#93FCF8" },

    {
      value: 4500,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Mar",
    },
    { value: 4000, frontColor: "#3BE9DE", gradientColor: "#93FCF8" },

    {
      value: 5200,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Apr",
    },
    { value: 4900, frontColor: "#3BE9DE", gradientColor: "#93FCF8" },

    {
      value: 3000,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "May",
    },
    { value: 2800, frontColor: "#3BE9DE", gradientColor: "#93FCF8" },
  ];

  const handleBarPress = (item: any, index: number) => {
    setSelectedIndex(index);
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Monthly Sales Performance Analysis</Text>
        <Text style={styles.subtitle}>
          Interactive Data Visualization Dashboard
        </Text>
      </View>

      <View style={styles.chartContainer}>
        <BarChart
          data={barData}
          barWidth={16}
          initialSpacing={10}
          spacing={14}
          barBorderRadius={4}
          showGradient
          yAxisThickness={0}
          xAxisType={"dashed"}
          xAxisColor={"lightgray"}
          yAxisTextStyle={{ color: "lightgray" }}
          stepValue={1000}
          maxValue={6000}
          noOfSections={6}
          yAxisLabelTexts={["0", "1k", "2k", "3k", "4k", "5k", "6k"]}
          labelWidth={40}
          xAxisLabelTextStyle={{ color: "lightgray", textAlign: "center" }}
          showLine
          lineConfig={{
            color: "#F29C6E",
            thickness: 3,
            curved: true,
            hideDataPoints: true,
            shiftY: 20,
            initialSpacing: -30,
          }}
          isAnimated
          animationDuration={1000}
          onPress={handleBarPress}
          barStyle={{
            opacity: (index: number) => (selectedIndex === index ? 1 : 0.7),
          }}
        />
      </View>

      {selectedIndex !== -1 && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Selected Month Details</Text>
          <Text style={styles.infoText}>
            {barData[selectedIndex].label}: ${barData[selectedIndex].value}
          </Text>
          <Text style={styles.infoSubtext}>
            This represents the total sales revenue for the month of{" "}
            {barData[selectedIndex].label}
          </Text>
        </View>
      )}

      <View style={styles.descriptionContainer}>
        <Text style={styles.sectionTitle}>Chart Analysis</Text>
        <Text style={styles.description}>
          This interactive bar chart provides a comprehensive visualization of
          our company's monthly sales performance over the first half of 2024.
          The blue bars represent the actual sales figures, while the orange
          trend line helps identify patterns and growth trajectories in our
          business performance.
        </Text>

        <Text style={styles.sectionTitle}>Key Insights</Text>
        <Text style={styles.description}>
          • March shows the highest sales performance with $745 in revenue •
          February and May demonstrate strong performance with $500 and $600
          respectively • The trend line indicates overall positive growth
          despite some monthly fluctuations • January and June show lower
          performance, suggesting potential seasonal patterns
        </Text>

        <Text style={styles.sectionTitle}>How to Use</Text>
        <Text style={styles.description}>
          • Tap on any bar to view detailed information for that specific month
          • The highlighted bar indicates the currently selected month • The
          trend line helps visualize the overall sales trajectory • Use this
          data to identify patterns and make informed business decisions
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

export default BarChartScreen;
