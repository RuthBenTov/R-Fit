import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // needs additional webpack config!
// import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { DatePicker } from '@mui/x-date-pickers';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Paper, Tab, Tabs, Typography } from "@mui/material";


// const Schedule = () => {
//   const [value, setValue] = React.useState(0);
//   const [selectedHour, setSelectedHour] = React.useState(null);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     setSelectedHour(null);
//   };

//   const handleHourClick = (hour) => {
//     setSelectedHour(hour);
//   };

//   const renderHourTool = () => (
//     <Paper style={{ padding: '10px' }}>
//       <Typography variant="h6"></Typography>
//       {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((hour) => (
//         <Typography key={hour} onClick={() => handleHourClick(hour)}>
//           {hour}:00
//         </Typography>
//       ))}
//     </Paper>
//   );

//   const renderHourCard = () => (
//     <Card>
//       <CardContent>
//         <Typography variant="h6">{selectedHour}:00 - {selectedHour + 1}:00</Typography>
//         <Typography>Coach: John Doe</Typography>
//         <Typography>Participants: 5</Typography>
//       </CardContent>
//     </Card>
//   );

//   return (
//     <div>
//       <Tabs value={value} onChange={handleChange}>
//         <Tab label="Sunday" />
//         <Tab label="Monday" />
//         <Tab label="Tuesday" />
//         <Tab label="Wednesday" />
//         <Tab label="Thursday" />
//         <Tab label="Friday" />
//         <Tab label="Saturday" />
//       </Tabs>

//       <Grid container spacing={2}>
//         <Grid item xs={2}>
//           {renderHourTool()}
//         </Grid>

//         <Grid item xs={10}>
//           <Paper style={{ padding: '10px' }}>
//             <Typography variant="h6">Selected Day: {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][value]}</Typography>
//             {selectedHour && renderHourCard()}
//           </Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default Schedule

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




