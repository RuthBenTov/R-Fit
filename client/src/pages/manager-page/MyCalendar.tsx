import React, { useRef, useState } from 'react';
import FullCalendar, { DateSelectArg, EventInput } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Form, Button } from 'react-bootstrap'; // ייתכן שיהיה צורך להתאים את הספריות המשתמשות

const MyCalendar: React.FC = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const [event, setEvent] = useState<EventInput>({
    title: '',
    start: '',
    end: '',
    allDay: true,
  });

  const handleEventDrop = (info: any) => {
    // 'info' contains information about the dropped event
    const { event, start, end, allDay } = info;
    console.log(info)
    // Handle the event change as needed
 
    console.log('Event dropped:', event.title, event.start, event.end, event.id ,allDay);
    
    // You can make an API call or update your state here
    // For example, if you have an array of events in your component state, you can update it like this:
    // const updatedEvents = yourEvents.map((item) => (item.id === event.id ? { ...item, start, end, allDay } : item));
    // setYourEvents(updatedEvents);
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    setEvent({
      title: '',
      start: selectInfo.startStr,
      duration: 60,
      // end: selectInfo.endStr,
      allDay: false,
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (calendarRef.current) {
      calendarRef.current.getApi().addEvent(event);
    }
    setEvent({
      title: '',
      start: '',
      end: '',
      allDay: true,
    });
  };

  return (
    <>
      <h1>Create Event by Clicking on the Calendar</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="eventName">
          <Form.Label>Event Name:</Form.Label>
          <Form.Control
            type="text"
            value={event.title}
            onChange={(e) => setEvent({ ...event, title: e.target.value })}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Event
        </Button>
      </Form>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        select={handleDateSelect}
        eventDrop={handleEventDrop}
        eventClick={(info) => {
          if (
            window.confirm('Are you sure you want to delete this event?')
          ) {
            console.log(info)
            info.event.remove();
          }
        }}
      />
    </>
  );
};

export default MyCalendar;
