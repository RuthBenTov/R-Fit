import moment from 'moment';
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrap5Plugin from '@fullcalendar/bootstrap';

interface EventsProps {
    title: string,
    startTimes: string[],
    daysOfWeek: number[]
}

const generateRecurringEvents = (title, startTimes, daysOfWeek):EventsProps=>{
    const recurringEvents = [];

    daysOfWeek.forEach(day => {
        startTimes.forEach(time =>{
            recurringEvents.push({
                title: title,
                start: moment().day(day).set({hour: parseInt(time.split(":")[0]), minute: parseInt(time.split(":")[1])}).format(),
            });
        });
    });
    return recurringEvents;
};











interface Event {
    title: string;
    start: string;
  }
  
  const Schedule = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  
    const events:Event[] = [];
  
    daysOfWeek.forEach(day => {
      events.push(
        {
          title: "WOD", // a property!
          start: `T06:00:00` // a property! 
        },
        {
          title: "WOD", // a property!
          start: `T07:00:00`, // a property!    
        },
      
        {
          title: "WOD", // a property!
          start: `T16:00:00`, // a property!
        },
        {
          title: "WOD", // a property!
          start: `T17:00:00`, // a property!
        },
        {
          title: "WOD", // a property!
          start: `T18:00:00`, // a property!
        },
        {
          title: "WOD", // a property!
          start: `T19:00:00`, // a property!
        },
        {
          title: "WOD", // a property!
          start: `T20:00:00`, // a property!
        }
  
      )
    })
   