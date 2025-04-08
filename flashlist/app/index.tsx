import { FlashList } from "@shopify/flash-list";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Index() {
  const [posts, setPosts] = useState<Post[]>([]);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  const renderItem = ({ item }: { item: Post }) => (
    <View style={[styles.card, isDark && styles.darkCard]}>
      <View style={styles.header}>
        <Image
          source={{ uri: `https://i.pravatar.cc/150?u=${item.userId}` }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={[styles.userId, isDark && styles.darkText]}>
            User {item.userId}
          </Text>
          <Text style={[styles.postId, isDark && styles.darkText]}>
            Post #{item.id}
          </Text>
        </View>
      </View>
      <Text style={[styles.title, isDark && styles.darkText]}>
        {item.title}
      </Text>
      <Text style={[styles.body, isDark && styles.darkText]}>{item.body}</Text>
    </View>
  );

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      <StatusBar hidden />
      <FlashList
        data={posts}
        renderItem={renderItem}
        estimatedItemSize={200}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  darkCard: {
    backgroundColor: "#1e1e1e",
    shadowColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userId: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  postId: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  darkText: {
    color: "#fff",
  },
});
