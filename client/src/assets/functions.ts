import axios from "axios";
import { users } from "./../../../server/API/Users/usersModel";
import { User } from "./../../../server/API/usersAPI/usersModel";
import { Cookie } from "@mui/icons-material";

export const getThisDate = () => {
  const today: Date = new Date();

  const year: number = today.getFullYear();
  let month: string | number = today.getMonth() + 1;
  let day: string | number = today.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  const formattedDate: string = `${year}-${month}-${day}`;
  return formattedDate;
};

export const getUserFromCookie = async () => {
  try {
    const { data } = await axios("API/users/getUserByCookies");
    if (!data) throw new Error("Couldn't get user");
    return data.user;
  } catch (error) {
    return null;
    console.error(error);
  }
};
