import { TimelineEventProps } from "react-native-calendars";

export const getDate = (addDays = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + addDays);
  return date.toISOString().split("T")[0];
};

export const timelineEvents: TimelineEventProps[] = [
  {
    id: "1",
    start: `${getDate()} 09:00:00`,
    end: `${getDate()} 10:00:00`,
    title: "Meeting with Team",
    color: "lightblue",
  },
  {
    id: "2",
    start: `${getDate()} 11:00:00`,
    end: `${getDate()} 12:00:00`,
    title: "Lunch Break",
    color: "lightgreen",
  },
  {
    id: "3",
    start: `${getDate()} 14:00:00`,
    end: `${getDate()} 15:00:00`,
    title: "Client Call",
    color: "lightpink",
  },
  {
    id: "4",
    start: `${getDate(1)} 10:00:00`,
    end: `${getDate(1)} 11:00:00`,
    title: "Project Review",
    color: "lightyellow",
  },
  {
    id: "5",
    start: `${getDate(1)} 13:00:00`,
    end: `${getDate(1)} 14:00:00`,
    title: "Team Sync",
    color: "lightblue",
  },
];
