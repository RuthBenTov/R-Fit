import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"; 
import { useEffect } from 'react'
import { CalendarEvent, actionSelector } from "../../features/actions/eventSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchEvents } from "../../API/eventCtrl";
import Fullcalendar from "../../components/fullcalendar/Fullcalendar";


const Schedule = () => {
 const dispatch = useAppDispatch();
 const events = useAppSelector(actionSelector);

 useEffect(()=>{
  dispatch(fetchEvents());
 },[dispatch]);


  return (
    <>
    <Fullcalendar calendarEvents={events as CalendarEvent[]}/>
    </>
  )
}

export default Schedule




