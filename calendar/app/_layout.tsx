import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={"#121212"}
        barStyle="light-content"
        translucent
      />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="calendar" />
        <Stack.Screen name="timeline" />
        <Stack.Screen name="another" />
        <Stack.Screen name="expandable" />
      <Stack.Screen name="calendar-list" />
      <Stack.Screen name="agenda-screen" />
    </Stack>
   </GestureHandlerRootView>
  );
}
