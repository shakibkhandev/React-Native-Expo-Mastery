# Setting Up Material Top Tabs in Expo App

## Installation

```bash
npx create-expo-app@latest basic-material-topbar
cd basic-material-topbar
npm install @react-navigation/material-top-tabs
npx expo install react-native-pager-view
```

## Project Structure

After installing the dependencies, you'll need to create two important layout files:

1. `app/_layout.tsx` - Main navigation container
2. `app/(tabs)/_layout.tsx` - Material top tabs configuration

## Implementation Steps

### Step 1: Create the Main Layout File

Create `app/_layout.tsx`:

```typescript
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="#000"
        // translucent
      />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </GestureHandlerRootView>
  );
}

```

### Step 2: Create the Tabs Layout File

Create `app/(tabs)/_layout.tsx`:

```typescript
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
```

### Step 3: Create Tab Screen Files

Create each tab file:

- `app/(tabs)/index.tsx`
- `app/(tabs)/following.tsx`



## Running the App

```bash
npx expo start
```

This will launch the Expo development server, allowing you to run your app on a physical device or simulator.