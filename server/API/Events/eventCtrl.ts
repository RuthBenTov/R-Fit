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
export async function getAllEvents(req, res) {
  try {
    const query = "SELECT * FROM r_fit.training";

    connection.query(query, (err, result) => {
      try {
        if (err) {
          console.error(err);
          res.status(500).json({ error: "Internal Server Error" });
          return;
        }
        if (!result) {
          console.error("No events found");
          res.status(404).json({ error: "No events found" });
          return;
        }
        res.status(200).json(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const removeEventByID = async (req, res) => {
  try {
    const eventId = req.params.id;
    const query = `DELETE FROM r_fit.training WHERE training_id = ${eventId}`;
    connection.query(query, (err, result) => {
      try {
        if (err) {  
          console.error(err);
          res.status(500).json({ error: "Internal Server Error" });
          return;
        }
        //@ts-ignore
        if (!result.affectedRows) {
          console.error("No events found");
          res.status(404).json({ error: "No events found" });
          return;
        }
        res.status(200).json({ status: true });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export async function getEvents(req,res){
  try {
    const query = "SELECT name_trainer, training_name, date_time FROM r_fit.training";
    connection.query(query,(err,results)=>{
      if(err) throw err;
      //@ts-ignore
      const arr = results.map((result) => {
        return {title : `${result.training_name}\n${result.name_trainer}`, start: result.date_time}
      }) 
      res.send({ok:true, events:arr});
    });
  } catch (error) {
    res.status(500).send({ok:false,error});
  }
}

