import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  return (
    <GestureHandlerRootView>
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        className={`${isDark ? "bg-gray-900" : "bg-white"}`}
      />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="explore" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
