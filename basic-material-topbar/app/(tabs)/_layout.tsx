import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function TabsLayout() {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#000", // Dark background
        },
        tabBarIndicatorStyle: {
          backgroundColor: "white", // White bottom border for active tab
        },
        tabBarLabelStyle: {
          color: "white", // White text
        },
        tabBarActiveTintColor: "white", // White text for active tab
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.6)", // Slightly transparent white for inactive tabs
      }}
    >
      <MaterialTopTabs.Screen
        name="index"
        options={{
          title: "For You",
        }}
      />
      <MaterialTopTabs.Screen
        name="following"
        options={{
          title: "Following",
        }}
      />
    </MaterialTopTabs>
  );
}
