import axios from "axios";

export async function addEventDb(eventDb: {
  trainingName: any;
  trainer: any;
  date: any;
  timeStart: any;
  duration: number;
  isRecurring: any;
}) {
  try {
    console.log(eventDb);
    const { data } = await axios.post("/API/events/addEvent", { eventDb });
    console.log(data.ok);
    if (data) return data;
    else throw new Error("Could not add event to DB");
  } catch (error) {
    console.error(error);
  }
}

export async function gatAllEventsDb() {
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
      console.log("its work!");
      return true;
    } else throw new Error("Could not delete event");
  } catch (error) {
    console.error(error);
  }
}
