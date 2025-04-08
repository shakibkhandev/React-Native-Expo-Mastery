import FeatherIcon from "@expo/vector-icons/Feather";
import { useCallback, useEffect, useState } from "react";
import { LayoutChangeEvent, Pressable, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function AnimatedBottomTabBar({
  state,
  descriptors,
  navigation,
}: any) {
  const [dimensions, setDimensions] = useState({ height: 20, width: 100 });

  const buttonWidth = dimensions.width / state.routes.length;

  const onTabBarLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setDimensions({ width, height });
  }, []);

  const tabPositionX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  const icon = {
    index: (props: any) => (
      <FeatherIcon name="home" size={24} color={props.color} />
    ),
    explore: (props: any) => (
      <FeatherIcon name="compass" size={24} color={props.color} />
    ),
    profile: (props: any) => (
      <FeatherIcon name="user" size={24} color={props.color} />
    ),
  };
  return (
    <View onLayout={onTabBarLayout} style={styles.tabbar}>
      <Animated.View
        style={[
          animatedStyle,
          {
            position: "absolute",
            backgroundColor: "#7C3AED",
            borderRadius: 30,
            marginHorizontal: 12,
            height: dimensions.height - 15,
            width: buttonWidth - 25,
          },
        ]}
      />

      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(index * buttonWidth, {
            duration: 1500,
          });
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const scale = useSharedValue(0);

        useEffect(() => {
          scale.value = withSpring(isFocused ? 1 : 0, { duration: 350 });
        }, [scale, isFocused]);

        const animatedTextStyle = useAnimatedStyle(() => {
          const opacity = interpolate(scale.value, [0, 1], [1, 0]);
          return {
            opacity,
          };
        });

        const animatedIconStyle = useAnimatedStyle(() => {
          const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);

          const top = interpolate(scale.value, [0, 1], [0, 9]);
          return {
            transform: [{ scale: scaleValue }, { translateY: top }],
          };
        });

        return (
          <Pressable
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            <Animated.View style={animatedIconStyle}>
              {icon[route.name as keyof typeof icon]({
                color: isFocused ? "#FFFFFF" : "#64748B",
              })}
            </Animated.View>
            <Animated.Text
              style={{
                color: isFocused ? "#FFFFFF" : "#64748B",
                fontSize: 12,
                fontWeight: isFocused ? "600" : "400",
                ...animatedTextStyle,
              }}
            >
              {label}
            </Animated.Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
