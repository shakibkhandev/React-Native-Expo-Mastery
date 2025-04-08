import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
    <StatusBar hidden/>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
    </>
  );
}
