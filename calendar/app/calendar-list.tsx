import React, { useCallback, useMemo, useState } from "react";
import { StyleSheet, Text, TextStyle, View } from "react-native";
import { CalendarList, DateData } from "react-native-calendars";
import testIDs from "./testIDs";

const RANGE = 24;
const initialDate = "2022-07-05";
const nextWeekDate = "2022-07-14";
const nextMonthDate = "2022-08-05";

export default function CalendarListScreen() {
  const [selected, setSelected] = useState(initialDate);
  const marked = useMemo(() => {
    return {
      [nextWeekDate]: {
        selected: selected === nextWeekDate,
        selectedTextColor: "#5E60CE",
        marked: true,
      },
      [nextMonthDate]: {
        selected: selected === nextMonthDate,
        selectedTextColor: "#5E60CE",
        marked: true,
      },
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "#5E60CE",
        selectedTextColor: "white",
      },
    };
  }, [selected]);

  const onDayPress = useCallback((day: DateData) => {
    setSelected(day.dateString);
  }, []);

  return (
    <View style={styles.container}>
      <CalendarList
        testID={testIDs.calendarList.CONTAINER}
        current={initialDate}
        pastScrollRange={RANGE}
        futureScrollRange={RANGE}
        onDayPress={onDayPress}
        markedDates={marked}
        renderHeader={renderCustomHeader}
        calendarHeight={390}
        theme={theme}
      />
    </View>
  );
}

const theme = {
  stylesheet: {
    calendar: {
      header: {
        dayHeader: {
          fontWeight: "600",
          color: "#48BFE3",
        },
      },
    },
  },
  "stylesheet.day.basic": {
    today: {
      borderColor: "#48BFE3",
      borderWidth: 0.8,
    },
    todayText: {
      color: "#5390D9",
      fontWeight: "800",
    },
  },
};

function renderCustomHeader(date: any) {
  const header = date.toString("MMMM yyyy");
  const [month, year] = header.split(" ");
  const textStyle: TextStyle = {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    color: "#5E60CE",
    paddingRight: 5,
  };

  return (
    <View style={styles.header}>
      <Text style={[styles.month, textStyle]}>{`${month}`}</Text>
      <Text style={[styles.year, textStyle]}>{year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  month: {
    marginLeft: 5,
  },
  year: {
    marginRight: 5,
  },
});
