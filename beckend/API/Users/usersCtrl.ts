
import { users, User } from "./usersModel";


export const login = async (req: any, res: any) => {
  try {
    console.log("getUserName from client");
    const user = req.body;
    if (!user.username || !user.password)
      throw new Error(
        `User ${user.username} and ${user.password} is not fount`
      );
    if (user) res.send({ process: "Success" });
  } catch (error) {
    console.error(error);
  }
};

export const register = async (req: any, res: any) => {
  try {
    const { userName, password } = req.body;
    console.log("userName,password:", userName, password);

    if (!userName || !password) {
      throw new Error("Please fill all fileds");
    }
    const user = new User({ userName, password });
    console.log("user:", user);

    const userExist = users.find((user) => user.userName === userName);
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
