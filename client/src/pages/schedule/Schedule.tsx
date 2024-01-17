import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // needs additional webpack config!
// import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import { useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actionSelector } from "../../features/actions/eventSlice";
import { getUserEventsAPI } from "../../API/userApi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";



const Schedule = () => {
 const dispatch = useAppDispatch();
 const events = useAppSelector(actionSelector);

 useEffect(()=>{
  dispatch(getUserEventsAPI(userId));
 },[dispatch]);


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




