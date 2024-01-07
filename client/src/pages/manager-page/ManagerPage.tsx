import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Calendar } from "@fullcalendar/core/index.js";

const ManagerPage = () => {
  const events = [
    {
      title: "Ruth And Daniel", // a property!
      start: "2024-01-07T16:00:00", // a property!
      end: "2024-01-07T17:00:00", // a property! ** see important note below about 'end' **
      timeStart: "20:00:00",
      timeEnd: "20:00:00"
    },
    {
      title: "Ruth01", // a property!
      start: "2024-01-07T10:00:00", // a property!
      end: "2024-01-07T09:00:00", // a property! ** see important note below about 'end' **
      timeStart: "15:00:00",
      timeEnd: "17:00:00"
    },
  ];

  return (
    <div>
      <h2>ManagerPage</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        dayHeaderFormat={{ weekday: "short" }}
        initialView="dayGridWeek"
        events={events}
      />
    </div>
  );
};

export default ManagerPage;
