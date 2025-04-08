import { Drawer } from "expo-router/drawer";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar hidden />
      <Drawer
        screenOptions={{
          swipeEnabled: true,
          swipeEdgeWidth: 200,
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerStyle: {
            backgroundColor: "#121212",
          },
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#B0B0B0",
        }}
      >
        <Drawer.Screen name="index" options={{ title: "Home" }} />
        <Drawer.Screen name="explore" options={{ title: "Explore" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
