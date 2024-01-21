import bcrypt from "bcrypt";
import connection from "../../DB/database";
import jwt from "jwt-simple";
import { User } from "./usersModel";

const saltRounds = 10;
const secret = process.env.SECRET;

export async function registerUser(req, res) {
  try {
    const { user } = req.body;
    if (
      !user.userName ||
      !user.password ||
      !user.email ||
      !user.birthday ||
      !user.phone ||
      !user.name
    )
      throw new Error("No data found in register user");

    if (!secret) throw new Error("No secret");
    const hash = await bcrypt.hash(user.password, saltRounds);

    const query = `INSERT INTO r_fit.users (user_name, password, name, date_of_birth, phone_number, email) VALUES ('${user.userName}', '${hash}', '${user.name}', '${user.birthday}', '${user.phone}', '${user.email}');`;
    connection.query(query, (err, resultsAdd) => {
      try {
        if (err) throw err;
        //@ts-ignore
        if (resultsAdd.affectedRows) {
          //@ts-ignore
          const queryUser = `SELECT * FROM r_fit.users WHERE user_id = ${resultsAdd.insertId}`;
          connection.query(queryUser, (err2, results) => {
            if (err2) throw err2;
            //@ts-ignore
            const cookie = { userID: resultsAdd.insertId };
            const token = jwt.encode(cookie, secret);

            res.cookie("user", token, {
              httpOnly: true,
              maxAge: 1000 * 60 * 60,
            });
            res.send({ ok: true, results });
          });
        }
      } catch (error) {
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    res.status(500).send({ ok: false, error });
  }
}

export async function loginUser(req, res) {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) throw new Error("No data found in login user");

    const query = `SELECT * FROM r_fit.users WHERE user_name = '${userName}'`;
    connection.query(query, async (err, results: User[]) => {
      try {
        if (err) throw err;
        if (results.length > 0) {
          const { user_id, password: hashedPassword } = results[0];
          const passwordMatch = await bcrypt.compare(password, hashedPassword);
          if (passwordMatch) {
            const cookie = { userID: user_id };
            const token = jwt.encode(cookie, secret);
            res.cookie("user", token, {
              httpOnly: true,
              maxAge: 1000 * 60 * 60,
            });
            res.send({ ok: true, user: { user_id, userName } });
          } else {
            res.status(401).send({ ok: false, error: "Invalid credentials" });
          }
        } else {
          res.status(404).send({ ok: false, error: "User not found" });
        }
      } catch (error) {
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    res.status(500).send({ ok: false, error });
  }
}

export async function getUserIdFromCookie(req, res) {
  try {
    const token = req.cookies.user;
    if (!token) throw new Error("no token provided");
    const cookie = jwt.decode(token, secret);
    console.log(cookie)
    const query = `SELECT * FROM r_fit.users WHERE user_id=${cookie.userID}`;
    connection.query(query, (err, results: User[]) => {
      try {
        if (err) throw err;
        res.send({ ok: true, user: results[0]});
      } catch (error) {
        res.status(500).send({ ok: false, error });
      }
    });
    // res.send(cookie);
  } catch (error) {
    console.error(error);
  }
}


export const getUserEvents = async(req,res)=>{
  try {
    const userId = req.query.userId;
    const query = `SELECT * FROM r_fit.training WHERE user_id = ${userId}`;

    connection.query(query, (err,results)=>{
      if(err) throw err
      res.send({ ok:true, events:results })
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ok:false,error});
  }
}