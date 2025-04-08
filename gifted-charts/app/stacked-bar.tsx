import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const StackedBarChartScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const stackData = [
    {
      stacks: [
        { value: 10, color: "orange" },
        { value: 20, color: "#4ABFF4", marginBottom: 2 },
      ],
      label: "Jan",
    },
    {
      stacks: [
        { value: 10, color: "#4ABFF4" },
        { value: 11, color: "orange", marginBottom: 2 },
        { value: 15, color: "#28B2B3", marginBottom: 2 },
      ],
      label: "Mar",
    },
    {
      stacks: [
        { value: 14, color: "orange" },
        { value: 18, color: "#4ABFF4", marginBottom: 2 },
      ],
      label: "Feb",
    },
    {
      stacks: [
        { value: 7, color: "#4ABFF4" },
        { value: 11, color: "orange", marginBottom: 2 },
        { value: 10, color: "#28B2B3", marginBottom: 2 },
      ],
      label: "Mar",
    },
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
        <Text style={styles.title}>Stacked Bar Chart Example</Text>
        <Text style={styles.subtitle}>Interactive Data Visualization</Text>
      </View>

      <View style={styles.chartContainer}>
        <BarChart
          width={340}
          rotateLabel
          noOfSections={4}
          stackData={stackData}
          onPress={(item: any, index: number) => handleBarPress(index)}
          spacing={24}
          barWidth={22}
          hideRules
          xAxisThickness={1}
          yAxisThickness={1}
          yAxisTextStyle={{ color: "#A0A0A0" }}
          xAxisLabelTextStyle={{ color: "#A0A0A0", textAlign: "center" }}
          labelWidth={40}
          isAnimated
          animationDuration={1000}
        />
      </View>

      {selectedIndex !== -1 && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Selected Bar Details</Text>
          <Text style={styles.infoText}>{stackData[selectedIndex].label}</Text>
          <Text style={styles.infoSubtext}>
            Stack Values:
            {stackData[selectedIndex].stacks.map((stack, i) => (
              <Text key={i} style={{ color: stack.color }}>
                {"\n"}• Stack {i + 1}: {stack.value}
              </Text>
            ))}
          </Text>
        </View>
      )}

      <View style={styles.descriptionContainer}>
        <Text style={styles.sectionTitle}>Chart Information</Text>
        <Text style={styles.description}>
          This stacked bar chart provides a comprehensive visualization of data
          distribution across different categories. Each bar represents a month,
          and the stacks within each bar show the proportional contribution of
          each category to the total value. The chart is designed to help users
          quickly identify patterns, trends, and relative proportions between
          different data categories.
        </Text>

        <Text style={styles.sectionTitle}>Color Legend</Text>
        <Text style={styles.description}>
          • Orange: Category 1 - Represents the first data category in each
          stack
          {"\n"}• Blue (#4ABFF4): Category 2 - Represents the second data
          category
          {"\n"}• Teal (#28B2B3): Category 3 - Represents the third data
          category where applicable
        </Text>

        <Text style={styles.sectionTitle}>How to Use</Text>
        <Text style={styles.description}>
          • Tap on any bar to view detailed information about that specific data
          point
          {"\n"}• The total height of each bar represents the sum of all stack
          values
          {"\n"}• Use the color-coded segments to compare category contributions
          across different months
          {"\n"}• The spacing between bars helps in distinguishing individual
          data points
          {"\n"}• The y-axis shows the scale of values, while the x-axis
          displays the time periods
        </Text>

        <Text style={styles.sectionTitle}>Key Features</Text>
        <Text style={styles.description}>
          • Interactive bars that respond to user touch
          {"\n"}• Smooth animations when the chart loads or updates
          {"\n"}• Clear labeling for easy data interpretation
          {"\n"}• Responsive design that adapts to different screen sizes
          {"\n"}• Detailed information panel that updates based on user
          interaction
          {"\n"}• Color-coded segments for quick visual analysis
        </Text>

        <Text style={styles.sectionTitle}>Data Interpretation</Text>
        <Text style={styles.description}>
          • The stacked format allows for easy comparison of both individual
          categories and total values
          {"\n"}• The relative height of each color segment shows the proportion
          of that category
          {"\n"}• Trends can be identified by comparing the same color segments
          across different months
          {"\n"}• The total height of each bar provides a quick overview of
          overall performance
          {"\n"}• Missing segments in some bars indicate that certain categories
          may not be applicable for that period
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

export default StackedBarChartScreen;
