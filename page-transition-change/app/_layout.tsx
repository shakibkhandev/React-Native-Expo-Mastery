import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <StatusBar hidden />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
            animation: "flip",
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            title: "About",
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="contact"
          options={{
            title: "Contact",
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="projects"
          options={{
            title: "Projects",
            animation: "slide_from_bottom",
          }}
        />
        <Stack.Screen
          name="settings"
          options={{
            title: "Settings",
            animation: "simple_push",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
