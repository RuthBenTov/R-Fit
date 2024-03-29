import axios  from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { calendarEvent } from './eventModel';

export async function addEventDb(eventDb: {
  trainingName: any;
  trainer: any;
  date: any;
  timeStart: any;
  duration: number;
  isRecurring: any;
}) {
  try {
    const { data } = await axios.post("/API/events/addEvent", { eventDb });
    if (data) return data;
    else throw new Error("Could not add event to DB");
  } catch (error) {
    console.error(error);
  }
}

export async function getAllEventsDb() {
  try {
    const { data } = await axios.get("/API/events");
    if (data) return data;
    else throw new Error("Could not get data from DB");
  } catch (error) {
    console.error(error);
  }
}

export async function removeEventByID(id: string) {
  try {
    const { data } = await axios.delete(`/API/events/removeEventByID/${id}`);

    if (data.status) {
      return true;
    } else throw new Error("Could not delete event");
  } catch (error) {
    console.error(error);
  }
}

export const fetchEvents = createAsyncThunk('events/fetchEvents',async()=>{
  try {
    const {data} = await axios.get("/API/events/getEvents")
    if(!data) throw new Error("No data found in getEvents")

    const formattedEvents:calendarEvent[] = data.events.map((event:any)=>({
      title: event.title,
      start: new Date(event.start)
    }));

    return formattedEvents;
  } catch (error) {
    console.error(error);
    throw error;
  }

});


