
import { users, User } from "./usersModel";


export const login = async (req: any, res: any) => {
  try {
    const user = req.body;
    if (!user.userName || !user.password)
      throw new Error(
        `User ${user.username} and ${user.password} is not fount`
      );
    if (user) res.send({ process: "OK" });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const register = async (req: any, res: any) => {
  try {
    console.log("hi")
    const {user} = req.body;
    console.log("userName,password:", user.userName, user.password);

    if (!user.userName || !user.password ||!user.email ||!user.birthday ||!user.phone||!user.name) {
      throw new Error("Please fill all fileds");
    }
    console.log("user:", user);

    const userExist = users.find((user) => user.userName === user.userName);
    if (userExist) {
      throw new Error("User already exist");
    }
    users.push(user);
    res.send({ ok: true });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};
