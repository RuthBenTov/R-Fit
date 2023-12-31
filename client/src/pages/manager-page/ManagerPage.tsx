import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const ManagerPage = () => {
  return (
    <div >
      <h2>ManagerPage</h2>
      <FullCalendar plugins={[dayGridPlugin]} dayHeaderFormat={{weekday: 'short' }} initialView="dayGridMonth" />
    </div>
  );
};

export default ManagerPage;
