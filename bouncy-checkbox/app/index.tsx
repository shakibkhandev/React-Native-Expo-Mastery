import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.title}>Task Manager</Text>
            <Text style={styles.subtitle}>Organize your daily activities</Text>
          </View>
          <View style={styles.profileContainer}>
            <View style={styles.profileIcon}>
              <Text style={styles.profileText}>JD</Text>
            </View>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Total Tasks</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, styles.completedText]}>8</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, styles.pendingText]}>4</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Daily Tasks</Text>
          <View style={styles.checkboxContainer}>
            <BouncyCheckbox
              size={25}
              fillColor="#6C63FF"
              unFillColor="#2A2A2A"
              text="Morning Exercise"
              iconStyle={{ borderColor: "#6C63FF" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={styles.checkboxText}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
            <BouncyCheckbox
              size={25}
              fillColor="#FF6584"
              unFillColor="#2A2A2A"
              text="Read a Book"
              iconStyle={{ borderColor: "#FF6584" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={styles.checkboxText}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Tasks</Text>
          <View style={styles.checkboxContainer}>
            <BouncyCheckbox
              size={25}
              fillColor="#4CAF50"
              unFillColor="#2A2A2A"
              text="Complete Project"
              iconStyle={{ borderColor: "#4CAF50" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={styles.checkboxText}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
            <BouncyCheckbox
              size={25}
              fillColor="#2196F3"
              unFillColor="#2A2A2A"
              text="Team Meeting"
              iconStyle={{ borderColor: "#2196F3" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={styles.checkboxText}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Goals</Text>
          <View style={styles.checkboxContainer}>
            <BouncyCheckbox
              size={25}
              fillColor="#FF9800"
              unFillColor="#2A2A2A"
              text="Learn New Skill"
              iconStyle={{ borderColor: "#FF9800" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={styles.checkboxText}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
            <BouncyCheckbox
              size={25}
              fillColor="#9C27B0"
              unFillColor="#2A2A2A"
              text="Meditation"
              iconStyle={{ borderColor: "#9C27B0" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={styles.checkboxText}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Custom Checkbox Styles</Text>
          <View style={styles.checkboxContainer}>
            <BouncyCheckbox
              size={30}
              fillColor="#E91E63"
              unFillColor="#2A2A2A"
              text="Square Style"
              iconStyle={{ borderColor: "#E91E63", borderRadius: 0 }}
              innerIconStyle={{ borderWidth: 2, borderRadius: 0 }}
              textStyle={styles.checkboxText}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />

            <BouncyCheckbox
              size={40}
              fillColor="#00BCD4"
              unFillColor="#2A2A2A"
              text="Large Size"
              iconStyle={{ borderColor: "#00BCD4" }}
              innerIconStyle={{ borderWidth: 3 }}
              textStyle={[styles.checkboxText, { fontSize: 18 }]}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />

            <BouncyCheckbox
              size={35}
              fillColor="#8BC34A"
              unFillColor="#2A2A2A"
              text="Rounded Style"
              iconStyle={{ borderColor: "#8BC34A", borderRadius: 20 }}
              innerIconStyle={{ borderWidth: 2, borderRadius: 20 }}
              textStyle={styles.checkboxText}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />

            <BouncyCheckbox
              size={30}
              fillColor="#FF6B6B"
              unFillColor="#2A2A2A"
              text="Gradient Style"
              iconStyle={{ borderColor: "#FF6B6B" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={[styles.checkboxText, { color: "#FF6B6B" }]}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />

            <BouncyCheckbox
              size={25}
              fillColor="#607D8B"
              unFillColor="#2A2A2A"
              text="Disabled Style"
              iconStyle={{ borderColor: "#607D8B" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={[styles.checkboxText, { color: "#607D8B" }]}
              isChecked={true}
              useBuiltInState={false}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Health & Fitness</Text>
          <View style={styles.checkboxContainer}>
            <BouncyCheckbox
              size={25}
              fillColor="#FF5252"
              unFillColor="#2A2A2A"
              text="Drink 8 Glasses of Water"
              iconStyle={{ borderColor: "#FF5252" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={styles.checkboxText}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
            <BouncyCheckbox
              size={25}
              fillColor="#FF4081"
              unFillColor="#2A2A2A"
              text="30 Min Cardio"
              iconStyle={{ borderColor: "#FF4081" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={styles.checkboxText}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
            <BouncyCheckbox
              size={25}
              fillColor="#E040FB"
              unFillColor="#2A2A2A"
              text="Take Vitamins"
              iconStyle={{ borderColor: "#E040FB" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={styles.checkboxText}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shopping List</Text>
          <View style={styles.checkboxContainer}>
            <BouncyCheckbox
              size={25}
              fillColor="#7C4DFF"
              unFillColor="#2A2A2A"
              text="Milk & Bread"
              iconStyle={{ borderColor: "#7C4DFF" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={styles.checkboxText}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
            <BouncyCheckbox
              size={25}
              fillColor="#448AFF"
              unFillColor="#2A2A2A"
              text="Fruits & Vegetables"
              iconStyle={{ borderColor: "#448AFF" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={styles.checkboxText}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
            <BouncyCheckbox
              size={25}
              fillColor="#40C4FF"
              unFillColor="#2A2A2A"
              text="Household Items"
              iconStyle={{ borderColor: "#40C4FF" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={styles.checkboxText}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#1E1E1E",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#A0A0A0",
    fontFamily: "JosefinSans-Regular",
  },
  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2A2A2A",
    justifyContent: "center",
    alignItems: "center",
  },
  profileIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#6C63FF",
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2A2A2A",
    padding: 15,
    borderRadius: 12,
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  completedText: {
    color: "#4CAF50",
  },
  pendingText: {
    color: "#FF9800",
  },
  statLabel: {
    fontSize: 12,
    color: "#A0A0A0",
  },
  statDivider: {
    width: 1,
    backgroundColor: "#3A3A3A",
    marginHorizontal: 8,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#2A2A2A",
  },
  checkboxContainer: {
    gap: 15,
  },
  checkboxText: {
    color: "#FFFFFF",
    fontFamily: "JosefinSans-Regular",
    fontSize: 16,
  },
});
