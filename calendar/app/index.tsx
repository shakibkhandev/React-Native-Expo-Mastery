import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type MenuItem = {
  title: string;
  icon: string;
  route:
    | "/calendar"
    | "/timeline"
    | "/another"
    | "/expandable"
    | "/calendar-list"
    | "/agenda-screen";
};

export default function Index() {
  const router = useRouter();

  const menuItems: MenuItem[] = [
    { title: "Calendar", icon: "calendar", route: "/calendar" },
    { title: "Timeline Calendar", icon: "time", route: "/timeline" },
    {
      title: "Date Range Selector",
      icon: "calendar-number",
      route: "/another",
    },
    { title: "Expandable Calendar", icon: "expand", route: "/expandable" },
    { title: "Calendar List", icon: "list", route: "/calendar-list" },
    { title: "Agenda Calendar", icon: "today", route: "/agenda-screen" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar App</Text>
      <View style={styles.cardsContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(item.route)}
            style={styles.card}
          >
            <View style={styles.cardContent}>
              <Ionicons name={item.icon as any} size={24} color="#00adf5" />
              <Text style={styles.cardText}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
    marginTop: 100,
  },
  cardsContainer: {
    gap: 15,
  },
  card: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
