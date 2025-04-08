import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import { Text, TouchableOpacity, View } from "react-native";

export default function Explore() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-gray-900">
      <Text className="text-xl font-bold mb-8 text-gray-900 dark:text-white">
        Explore Screen
      </Text>

      <TouchableOpacity
        onPress={() => router.back()}
        className="p-4 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        <Ionicons
          name="arrow-back"
          size={24}
          color={isDark ? "#fbbf24" : "#4b5563"}
        />
      </TouchableOpacity>

      <Text className="mt-8 text-gray-600 dark:text-gray-300">
        Go back to home
      </Text>
    </View>
  );
}
