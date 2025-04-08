import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const AreaChartScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const data1 = [
    { value: 70 },
    { value: 36 },
    { value: 50 },
    { value: 40 },
    { value: 18 },
    { value: 38 },
  ];

  const data2 = [
    { value: 50 },
    { value: 10 },
    { value: 45 },
    { value: 30 },
    { value: 45 },
    { value: 18 },
  ];

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Dual Area Chart Analysis</Text>
        <Text style={styles.subtitle}>Comparing Two Data Series</Text>
      </View>

      <View style={styles.chartContainer}>
        <LineChart
          areaChart
          curved
          data={data1}
          data2={data2}
          hideDataPoints
          spacing={68}
          color1="#8a56ce"
          color2="#56acce"
          startFillColor1="#8a56ce"
          startFillColor2="#56acce"
          endFillColor1="#8a56ce"
          endFillColor2="#56acce"
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={0}
          noOfSections={4}
          yAxisColor="white"
          yAxisThickness={0}
          rulesType="solid"
          rulesColor="gray"
          yAxisTextStyle={{ color: "gray" }}
          yAxisLabelSuffix="%"
          xAxisColor="lightgray"
          pointerConfig={{
            pointerStripUptoDataPoint: true,
            pointerStripColor: "lightgray",
            pointerStripWidth: 2,
            strokeDashArray: [2, 5],
            pointerColor: "lightgray",
            radius: 4,
            pointerLabelWidth: 100,
            pointerLabelHeight: 120,
            pointerLabelComponent: (items: { value: number }[]) => {
              return (
                <View
                  style={{
                    height: 120,
                    width: 100,
                    backgroundColor: "#282C3E",
                    borderRadius: 4,
                    justifyContent: "center",
                    paddingLeft: 16,
                  }}
                >
                  <Text style={{ color: "lightgray", fontSize: 12 }}>
                    Series 1
                  </Text>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    {items[0].value}
                  </Text>
                  <Text
                    style={{ color: "lightgray", fontSize: 12, marginTop: 12 }}
                  >
                    Series 2
                  </Text>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    {items[1].value}
                  </Text>
                </View>
              );
            },
          }}
        />
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.sectionTitle}>Chart Analysis</Text>
        <Text style={styles.description}>
          This dual area chart visualizes two different data series over time.
          The overlapping areas help in comparing trends and patterns between
          the two datasets. The gradient fills emphasize the magnitude of
          changes in each series.
        </Text>

        <Text style={styles.sectionTitle}>Key Features</Text>
        <Text style={styles.description}>
          • Two distinct data series with different colors • Gradient fills for
          better visualization • Interactive data points with detailed tooltips
          • Curved lines for smooth trend visualization • Percentage-based
          Y-axis with grid lines
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

export default AreaChartScreen;
