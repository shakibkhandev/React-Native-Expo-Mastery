import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

interface Day {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

export default function CalendarScreen() {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#1a1a1a",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 20,
          color: "#ffffff",
        }}
      >
        Calendar
      </Text>
      <Calendar
        // Initial date
        current={"2025-03-20"}
        // Callback that gets called when the user selects a day
        onDayPress={(day: Day) => {
          console.log("selected day", day);
        }}
        // Mark specific dates as marked
        markedDates={{
          "2024-03-20": {
            selected: true,
            marked: true,
            selectedColor: "#00adf5",
          },
          "2024-03-21": { marked: true },
          "2024-03-22": { marked: true, dotColor: "#00adf5", activeOpacity: 0 },
        }}
        // Customize the appearance of the calendar
        theme={{
          backgroundColor: "#1a1a1a",
          calendarBackground: "#1a1a1a",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#ffffff",
          textDisabledColor: "#4a4a4a",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "#00adf5",
          monthTextColor: "#ffffff",
          indicatorColor: "#00adf5",
        }}
      />
    </View>
  );
}
