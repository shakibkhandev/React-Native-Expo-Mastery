import React, { useCallback, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  AgendaList,
  CalendarProvider,
  ExpandableCalendar,
} from "react-native-calendars";

// Mock data
const ITEMS = [
  {
    title: "2024-04-05",
    data: [
      {
        title: "Meeting with Team",
        description: "Discuss project progress",
        time: "10:00 AM",
      },
      {
        title: "Lunch Break",
        description: "Team lunch at the cafeteria",
        time: "12:30 PM",
      },
    ],
  },
  {
    title: "2024-04-06",
    data: [
      {
        title: "Client Call",
        description: "Weekly sync with client",
        time: "2:00 PM",
      },
    ],
  },
];

const theme = {
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
};

const todayBtnTheme = {
  todayButtonTextColor: "#00adf5",
};

const ExpandableCalendarScreen = () => {
  const marked = useRef({
    "2024-04-05": { marked: true, dotColor: "#00adf5" },
    "2024-04-06": { marked: true, dotColor: "#00adf5" },
  });

  const renderItem = useCallback(({ item }: any) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemContent}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={styles.itemTime}>{item.time}</Text>
        </View>
      </View>
    );
  }, []);

  return (
    <CalendarProvider
      date={ITEMS[0]?.title}
      showTodayButton
      theme={todayBtnTheme}
    >
      <ExpandableCalendar
        theme={theme}
        firstDay={1}
        markedDates={marked.current}
      />
      <AgendaList
        sections={ITEMS}
        renderItem={renderItem}
        sectionStyle={styles.section}
      />
    </CalendarProvider>
  );
};

export default ExpandableCalendarScreen;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ffffff",
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2d4150",
  },
  itemDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  itemTime: {
    fontSize: 12,
    color: "#00adf5",
    marginTop: 5,
  },
  section: {
    backgroundColor: "#f5f5f5",
    color: "grey",
    textTransform: "capitalize",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
