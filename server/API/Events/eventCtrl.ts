import connection from "../../DB/database";
import { Event } from "./eventModel";
export async function addEvent(req, res) {
  try {
    const { eventDb } = req.body;
    console.log(eventDb);
    const query = `INSERT INTO r_fit.training (training_name, date_time, day, is_regular, name_trainer, program_training_id, duration)  VALUES ("${
      eventDb.trainingName
    }", "${eventDb.date} ${eventDb.timeStart}:00", ${new Date(eventDb.date)
      .getDay()
      .toString()}, ${eventDb.isRecurring ? 1 : 0}, "${eventDb.trainer}", 0, "${
      eventDb.duration || 60
    }")`;

    connection.query(query, (err, result) => {
      try {
        if (err) throw err;
        //@ts-ignore
        console.log(result.changedRows);
        //@ts-ignore
        if (result.changedRows) {
        res.send({ ok: true, result });
        } else {
        res.send({ ok: false, result: "no changes found" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ ok: false, error });
  }
}

export async function getEvents(req,res){
  try {
    const query = "SELECT name_trainer, training_name, date_time FROM r_fit.training";
    connection.query(query,(err,results)=>{
      if(err) throw err;
      //@ts-ignore
      const arr = results.map((result) => {
        return {title : `${result.name_trainer}\n${result.training_name}`, start: result.date_time}
      }) 
      res.send({ok:true, events:arr});
    });
  } catch (error) {
    res.status(500).send({ok:false,error});
  }
}

// eventDb: {
//   trainingName: "ruth the qween",
//   trainer: "ruths training",
//   date: "2024-01-11",
//   timeStart: "00:21",
//   duration: 8,
//   isRecurring: true
// }
