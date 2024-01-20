import axios  from 'axios';

export async function addEventDb(eventDb: { trainingName: any; trainer: any; date: any; timeStart: any; duration: number; isRecurring: any; }) {
  try {
    console.log(eventDb)
    const {data} = await axios.post("/API/events/addEvent", {eventDb})
    console.log(data.ok) 
    if(data) return data
    else throw new Error ("Could not add event to DB")
  } catch (error) {
    console.error(error);
  }
}
