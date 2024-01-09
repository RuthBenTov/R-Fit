import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // needs additional webpack config!
// import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { EventInput } from "@fullcalendar/core";

import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import { duration } from "@mui/material";

interface TrainingTable {
  training_id: number;
  traning_name: string;
  date_time: string;
  day: string;
  is_regular: boolean;
  name_trainer: string;
  program_training_id: number;
  duration: number;
}

const ManagerPage = () => {
  const [events, setEvents] = useState<EventInput[]>([
    {
      title: "Ruth And Daniel", // a property!
      start: "2024-01-07T16:00:00", // a property!
      end: "2024-01-07T17:00:00", // a property! ** see important note below about 'end' **
      timeStart: "20:00:00",
      timeEnd: "20:00:00",
      recurring: true,
    },
    {
      title: "Ruth01", // a property!
      start: "2024-01-07T10:00:00", // a property!
      end: "2024-01-07T09:00:00", // a property! ** see important note below about 'end' **
      timeStart: "15:00:00",
      timeEnd: "17:00:00",
    },
  ]);

  function addEvent(event: any) {
    event.preventDefault();
    const formData = {
      trainingName: event.target.trainingName.value,
      trainer: event.target.trainer.value,
      date: event.target.date.value,
      timeStart: event.target.timeStart.value,
      duration: parseInt(event.target.duration.value),
      isRegular: event.target.isRegular.checked,
    };
    const newEvent: EventInput = {
      title: `${formData.trainingName}`,
      start: `${formData.date}T${formData.timeStart}`,
      end: `${formData.date}T${formData.timeStart}`,
      duration: { minutes: formData.duration },
      daysOfWeek: [new Date(formData.date).getDay()],
      recurring: formData.isRegular,
      rrule: {
        freq: "weekly",
      },
    };

    console.log(events);

    setEvents((prev) => [...prev, newEvent]);
  }

  return (
    <div>
      <h2>ManagerPage</h2>
      <form onSubmit={(ev) => addEvent(ev)}>
        <input
          type="text"
          name="trainingName"
          id="trainingName"
          placeholder="Training Name"
        />
        <input type="text" name="trainer" id="trainer" placeholder="Trainer" />
        <input type="date" name="date" id="date" />
        <input type="time" name="timeStart" id="timeStart" />
        <input
          type="number"
          name="duration"
          id="duration"
          placeholder="duration"
        />
        <label htmlFor="isRegular">is regular?</label>
        <input type="checkbox" name="isRegular" id="isRegular"></input>
        <button type="submit">add event</button>
      </form>
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
