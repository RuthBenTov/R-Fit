import React from "react";
import FullCalendar from "@fullcalendar/react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // needs additional webpack config!
// import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import bootstrap5Plugin from "@fullcalendar/bootstrap5";

const ManagerPage = () => {
  const events = [
    {
      title: "Ruth And Daniel", // a property!
      start: "2024-01-07T16:00:00", // a property!
      end: "2024-01-07T17:00:00", // a property! ** see important note below about 'end' **
      timeStart: "20:00:00",
      timeEnd: "20:00:00",
    },
    {
      title: "Ruth01", // a property!
      start: "2024-01-07T10:00:00", // a property!
      end: "2024-01-07T09:00:00", // a property! ** see important note below about 'end' **
      timeStart: "15:00:00",
      timeEnd: "17:00:00",
    },
  ];

  return (
    <div>
      <h2>ManagerPage</h2>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin,
          listPlugin,
          bootstrap5Plugin,
        ]}
        themeSystem="bootstrap5"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        initialDate="2018-01-12"
        navLinks={true} // can click day/week names to navigate views
        editable={true}
        dayMaxEvents={true} // allow "more" link when too many events
        dayHeaderFormat={{ weekday: "short" }}
        initialView="dayGridWeek"
        events={events}
      />
    </div>
  );
};

export default ManagerPage;
