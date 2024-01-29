// import mySql from "mysql2";
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
    res.status(500).send({ ok: false, error });
  }
};

export const createTrainingTable = (req, res) => {
  try {
    const { adminReq } = req.body;
    if (adminReq != process.env.AdminPassword)
      throw new Error("you may not have permission to create tables");
    if (adminReq === process.env.AdminPassword) {
      const query =
        " CREATE TABLE `r_fit`.`training` (`training_id` INT NOT NULL AUTO_INCREMENT,`traning_name` VARCHAR(45) NOT NULL,`date_time` DATETIME NOT NULL,`day` VARCHAR(45) NULL,`is_regular` TINYINT NOT NULL,`name_trainer` VARCHAR(45) NOT NULL,`program_training_id` VARCHAR(45) NOT NULL,`duration` VARCHAR(45) NOT NULL,PRIMARY KEY (`training_id`),UNIQUE INDEX `training_id_UNIQUE` (`training_id` ASC) VISIBLE) ";
      connection.query(query, (err, results) => {
        try {
          if (err) throw err;
          res.send({ ok: true, message: "tables created successfully!" });
        } catch (error) {
          res.status(500).send({ ok: false, err });
        }
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ ok: false, error });
  }
};

export const createUsersTable = (req, res) => {
  try {
    const { adminReq } = req.body;
    if (adminReq != process.env.AdminPassword)
      throw new Error("you may not have permission to create tables");
    if (adminReq === process.env.AdminPassword) {
      const query =
        "CREATE TABLE `r_fit`.`users` ( `user_id` INT NOT NULL AUTO_INCREMENT, `username` VARCHAR(45) NOT NULL, `password` VARCHAR(45) NOT NULL, `name` VARCHAR(45) NOT NULL, `date_of_birth` DATE NOT NULL, `phone_number` VARCHAR(45) NOT NULL, `email` VARCHAR(45) NOT NULL, PRIMARY KEY (`user_id`, `email`), UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE, UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)";
      connection.query(query, (err, results) => {
        try {
          if (err) throw err;
          res.send({ ok: true, message: "tables created successfully!" });
        } catch (error) {
          res.status(500).send({ ok: false, err });
        }
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ ok: false, error });
  }
};
