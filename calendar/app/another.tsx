import { useState } from "react";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function Another() {
  const [selectedDates, setSelectedDates] = useState<{ [key: string]: any }>(
    {}
  );
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const onDayPress = (day: { dateString: string }) => {
    if (!startDate) {
      // First selection - set start date
      setStartDate(day.dateString);
      setSelectedDates({
        [day.dateString]: {
          selected: true,
          startingDay: true,
          color: "#00adf5",
          textColor: "white",
        },
      });
    } else if (!endDate && day.dateString > startDate) {
      // Second selection - set end date
      setEndDate(day.dateString);
      const range: { [key: string]: any } = {};
      let currentDate = new Date(startDate);
      const end = new Date(day.dateString);

      while (currentDate <= end) {
        const dateString = currentDate.toISOString().split("T")[0];
        range[dateString] = {
          selected: true,
          color: "#00adf5",
          textColor: "white",
        };
        currentDate.setDate(currentDate.getDate() + 1);
      }

      range[startDate] = { ...range[startDate], startingDay: true };
      range[day.dateString] = { ...range[day.dateString], endingDay: true };

      setSelectedDates(range);
    } else {
      // Reset selection
      setStartDate(day.dateString);
      setEndDate(null);
      setSelectedDates({
        [day.dateString]: {
          selected: true,
          startingDay: true,
          color: "#00adf5",
          textColor: "white",
        },
      });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
        Select Date Range
      </Text>
      <Calendar
        markingType="period"
        onDayPress={onDayPress}
        markedDates={selectedDates}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "#00adf5",
          monthTextColor: "#00adf5",
          indicatorColor: "#00adf5",
        }}
      />
      {startDate && endDate && (
        <Text style={{ marginTop: 20, fontSize: 16 }}>
          Selected Range: {startDate} to {endDate}
        </Text>
      )}
    </View>
  );
}
