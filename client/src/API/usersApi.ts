import axios from "axios";
let environment = "DEV"
const CLIENT_DEV_URL = "http://localhost:3000";
const CLIENT_PROD_URL = "https://r-fit-server-deploy.onrender.com";

environment = environment === "DEV" ? CLIENT_DEV_URL : CLIENT_PROD_URL;

export const register = async (user: {
  userName: string;
  password: string;
  email: string;
  birthday: string;
  phone: string;
  name: string;
}) => {
  try {
    if (!user) throw new Error("no data from register in client");
    const response = await axios.post(`${environment}/API/users/register`, { user });
    if (response) return response;
    else return undefined;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (userName: string, password: string) => {
  try {
    if (!userName || !password) throw new Error("No data from login in client");
    // const {data} = await axios.post(`${environment}/API/users/login`, { userName, password });
    // const {token} = data
    // const tokenStringify = JSON.stringify(token);
    // sessionStorage.setItem("user", tokenStringify);

    return await axios.post(`${environment}/API/users/login`, { userName, password });
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (id:number, email: string,phone: string,date: string) => {
  try {
    if (!id || !email || !phone || !date) throw new Error("No data from");
    return await axios.put(`${environment}/API/users/update`, {id, email, phone, date });
  } catch (error) {
    console.error(error);
  }
};

// export const getUserFromCookie = async () => {
//   try {
//     const token = sessionStorage.getItem("user")
//     const { data } = await axios.post("API/users/getUserByCookies", {token});
//     if (!data) throw new Error("Couldn't get user");
//     return data.user;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };
