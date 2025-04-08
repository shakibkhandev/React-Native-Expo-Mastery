import { Stack } from "expo-router";
import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"#1a1a1a"}
        translucent
      />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === "dark" ? "#1A1A1A" : "#FFFFFF",
          },
          headerTintColor: colorScheme === "dark" ? "#FFFFFF" : "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {
            backgroundColor: colorScheme === "dark" ? "#1A1A1A" : "#FFFFFF",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Chart Gallery",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="bar"
          options={{
            title: "Bar Chart",
          }}
        />
        <Stack.Screen
          name="line"
          options={{
            title: "Line Chart",
          }}
        />
        <Stack.Screen
          name="horizontal-bar"
          options={{
            title: "Horizontal Bar Chart",
          }}
        />
        <Stack.Screen
          name="stacked-bar"
          options={{
            title: "Stacked Bar Chart",
          }}
        />
        <Stack.Screen
          name="area"
          options={{
            title: "Area Chart",
          }}
        />
        <Stack.Screen
          name="pie"
          options={{
            title: "Pie Chart",
          }}
        />
        <Stack.Screen
          name="donut"
          options={{
            title: "Donut Chart",
          }}
        />
        <Stack.Screen
          name="population-pyramid"
          options={{
            title: "Population Pyramid",
          }}
        />
        <Stack.Screen
          name="radar"
          options={{
            title: "Radar Chart",
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
