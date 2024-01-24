import  { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"; 
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { EventClickArg, EventInput } from "@fullcalendar/core";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import { formateEventToCalendar, getThisDate } from "../../assets/functions";
import "./managerPaseStyle.scss";
import {
  addEventDb,
  getAllEventsDb,
  removeEventByID,
} from "../../API/eventCtrl";
import "./managerPaseStyle.scss";
import {  fetchEvents } from "../../API/eventCtrl";
import { useDispatch } from "react-redux";
import SearchOptions from "../../components/searchOptions copy/SearchOptions";


const ManagerPage = () => {
  const dispatch = useDispatch();
  const [isRecurClicked, setIsRecurClicked] = useState(false);
  const [events, setEvents] = useState<EventInput[]>([]);

  const getEvents = async () => {
    try {
      const _events = await getAllEventsDb();
      const formattedEvents = formateEventToCalendar(_events);

      setEvents(() => [...formattedEvents]);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

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

        addEventDb(formData)
        .then((data)=>{
          if(data.ok){
            dispatch(fetchEvents() as any);
            getEvents()
          }
        })
        .catch((error)=> console.error(error));
  }
  
  const removeEvent = (info: EventClickArg) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      const eventId = info.event.id;
      removeEventByID(eventId);
      getEvents()
    }
  };
  return (
    <div className="ManagerPageDiv">
      <form className="addEventForm box" onSubmit={(ev) => addEvent(ev)}>
        <h2 style={{color:"#43684d", fontWeight: "bolder",textShadow: "rgb(203 194 156) 1px 0px 10px"}}>Manager Page</h2>
        <SearchOptions />
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
          navLinks={true} 
          editable={true}
          dayHeaderFormat={{ weekday: "short" }}
          initialView="dayGridWeek"
          height="400px"
          aspectRatio={2}
          events={events}
          eventClick={(info) => removeEvent(info)}
        />
      </div>
    </div>
  );
};

export default ManagerPage;
