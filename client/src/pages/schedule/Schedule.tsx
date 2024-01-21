import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"; 
import { useEffect } from 'react'
import { CalendarEvent, actionSelector } from "../../features/actions/eventSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchEvents } from "../../API/eventCtrl";
import Fullcalendar from "../../components/fullcalendar/Fullcalendar";
import './scss/schedule.scss'


const Schedule = () => {
 const dispatch = useAppDispatch();
 const events = useAppSelector(actionSelector);

 useEffect(()=>{
  dispatch(fetchEvents());
 },[dispatch]);


  return (
    <div className="schedule-container">
    <Fullcalendar calendarEvents={events as CalendarEvent[]}/>
    </div>
  )
}

export default Schedule




