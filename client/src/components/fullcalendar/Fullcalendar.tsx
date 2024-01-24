import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import { FullcalendarProps, getBackgroundColor } from "../../pages/schedule/util/modelsUtil";
import PersonIcon from '@mui/icons-material/Person';
import './scss/fullcalendar.scss'

const Fullcalendar = ({calendarEvents}:FullcalendarProps) => {
  
  const currentDate = new Date().toISOString().split('T')[0];

  return (
   
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
      initialDate={currentDate}
      dayHeaderFormat={{ weekday: "short" }}
      initialView="timeGridWeek"
      navLinks={true} 
      events={calendarEvents}
      eventContent={(eventInfo) => (
        <div>
          <div style={{ color:"black", backgroundColor: getBackgroundColor(eventInfo.event.title.split('\n')[1]) }}>
            {eventInfo.event.title.split('\n').map((line, index) => (
              <div key={index} className={index === 0 ? "trainingName" :  "coachName"}>
                {index === 1 && <PersonIcon style={{marginBottom:'5px', fontSize:"15px"}}/>}
                {line}
                {index < eventInfo.event.title.split('\n').length - 1 && <br />}
              </div>
            ))}
          </div>
        </div>
      )}
      allDaySlot={false}
      slotMinTime= "06:00:00"
      slotMaxTime="21:00:00"
      displayEventTime={false} 
      height="auto"
    />
  
  )
}

export default Fullcalendar






