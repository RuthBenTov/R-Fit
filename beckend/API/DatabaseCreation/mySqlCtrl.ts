import mySql from "mySql2";
import connection from "../../DB/database";

export const createDB = async (req, res) => {
  try {
    const { adminReq } = req.body;
    if (adminReq != process.env.AdminPassword)
      throw new Error("you may not have permission to create database");
    if (adminReq === process.env.AdminPassword) {
      const query = "CREATE DATABASE R_FIT";
      connection.query(query, (err, results) => {
        try {
          if (err) throw err;
          res.send({ ok: true, message: "DB created successfully!" });
        } catch (error) {
          res.status(500).send({ ok: false, err });
        }
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ ok: false, error})
  }
};
