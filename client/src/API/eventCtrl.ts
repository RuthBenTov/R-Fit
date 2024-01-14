import axios  from 'axios';
export async function addEventDb(eventDb: { trainingName: any; trainer: any; date: any; timeStart: any; duration: number; isRecurring: any; }) {
  try {
    const {data} = await axios.post("/API/events/addEvent", {eventDb})
    console.log(data.status) 
    if(data.status == "ok"){
        return data.status
    }
    else throw new Error ("Could not add event to DB")
  } catch (error) {
    console.error(error);
  }
}
