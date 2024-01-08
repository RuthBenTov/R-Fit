import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // needs additional webpack config!
// import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Schedule = () => {
  const events = [
    {
      title: "WOD", 
      start: "2024-01-07T06:00:00"  

    },
    {
      title: "WOD", 
      start: "2024-01-07T07:00:00",     
    },
  
    {
      title: "WOD", 
      start: "2024-01-07T16:00:00", 
    },
    {
      title: "WOD", 
      start: "2024-01-07T17:00:00", 
    },
    {
      title: "WOD", 
      start: "2024-01-07T18:00:00", 
    },
    {
      title: "WOD", 
      start: "2024-01-07T19:00:00", 
    },
    {
      title: "WOD", 
      start: "2024-01-07T20:00:00", 
    },
  ];
  return (
    <>
    <div style={{ width:"90%"}}>
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
          left: "prev,next, today",
          center: "title",
          right: "timeGridWeek,timeGridDay",
        }}
        initialDate="2018-01-12"
        navLinks={true} 
        editable={true}
        dayHeaderFormat={{ weekday: "short" }}
        initialView="timeGridWeek"
        events={events}
        allDaySlot={false}
        slotMinTime= "06:00:00"
        slotMaxTime="21:00:00"
        displayEventTime={false} 
        height="auto"
      />
    </div>
  
    </>
  )
}

export default Schedule




