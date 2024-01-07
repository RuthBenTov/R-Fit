import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Schedule = () => {
  return (
    <>
    <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      {  businessHours: [ // specify an array instead
  {
    daysOfWeek: [ 1, 2, 3 ], // Monday, Tuesday, Wednesday
    startTime: '08:00', // 8am
    endTime: '18:00' // 6pm
  },
  {
    daysOfWeek: [ 4, 5 ], // Thursday, Friday
    startTime: '10:00', // 10am
    endTime: '16:00' // 4pm
  }
]}
      />
    </>
  )
}

export default Schedule