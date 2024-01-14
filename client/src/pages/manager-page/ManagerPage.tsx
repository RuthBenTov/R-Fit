import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import "bootstrap";
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
import { getThisDate } from "../../assets/functions";
import "./managerPaseStyle.scss";
import { addEventDb } from "../../API/eventCtrl";

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
  const [isRecurClicked, setIsRecurClicked] = useState(false);
  const [events, setEvents] = useState<EventInput[]>([
    {
      title: "Ruth And Daniel", // a property!
      start: "2024-01-07T16:00:00", // a property!
      end: "2024-01-07T17:00:00", // a property! ** see important note below about 'end' **
      recurring: true,
    },
    {
      title: "Ruth01", // a property!
      start: "2024-01-07T10:00:00", // a property!
      end: "2024-01-07T09:00:00", // a property! ** see important note below about 'end' **
    },
    {
      title: "Meeting",
      start: "2024-01-09T09:00:00", // תאריך ושעת התחלה
    },
    {
      title: "אירוע 45 דקות",
      start: "2024-01-23T09:00:00",
      duration: "00:45:00",
    },
  ]);

  function addEvent(event: any) {
    event.preventDefault();
    const formData = {
      trainingName: event.target.trainingName.value,
      trainer: event.target.trainer.value,
      date: event.target.date.value,
      timeStart: event.target.timeStart.value,
      duration: parseInt(event.target.duration?.value),
      isRecurring: event.target.isRecurring.checked,
    };

    const newEvent: EventInput = !isRecurClicked
      ? {
          title: `${formData.trainingName}`,
          start: `${formData.date}T${formData.timeStart}:00`,
          duration: { minutes: formData.duration },
        }
      : {
          title: `${formData.trainingName}`,
          start: `${formData.date}T${formData.timeStart}:00`,
          startTime: `${formData.timeStart}:00`,
          endTime: `${formData.timeStart}:00`,
          duration: { minutes: formData.duration },
          allDay: false,
          daysOfWeek: [new Date(formData.date).getDay()],
          recurring: formData.isRecurring,
        };

        addEventDb(formData);
    setEvents((prev) => [...prev, newEvent]);
  }
  return (
    <div className="ManagerPageDiv">
      <form className="addEventForm box" onSubmit={(ev) => addEvent(ev)}>
      <h2>Manager Page</h2>
        <input
          type="text"
          name="trainingName"
          id="trainingName"
          placeholder="Training Name"
        />
        <input type="text" name="trainer" id="trainer" placeholder="Trainer" />
        <input type="date" name="date" id="date" />
        <input type="time" name="timeStart" id="timeStart" />
        <label htmlFor="isRecurring">is recurring?</label>
        <input
          type="checkbox"
          name="isRecurring"
          id="isRecurring"
          onChange={() => {
            setIsRecurClicked(!isRecurClicked);
          }}
        ></input>
        {isRecurClicked ? (
          <input
            type="number"
            name="duration"
            id="duration"
            placeholder="min duration"
          />
        ) : (
          <></>
        )}
        <button type="submit">add event</button>
      </form>
      <div className="calendar">
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
          initialDate={getThisDate()}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          dayHeaderFormat={{ weekday: "short" }}
          initialView="dayGridWeek"
          height="400px"
          aspectRatio={2}
          events={events}
        />
      </div>
    </div>
  );
};

export default ManagerPage;
