import axios from "axios";
export let environment = "DEV"
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
    return await axios.post(`${environment}/API/users/login`, { userName, password });
  } catch (error) {
    console.error(error);
  }
};

// export const login = async (userName: string, password: string) => {
//   try {
//     if (!userName || !password) throw new Error("No data from login in client");
//     const response = await axios.post(`${environment}/API/users/login`, { userName, password });
//     if (response && response.data && response.data.user) {
//       const token = response.data.user.token; // Adjust based on your API response structure
//       sessionStorage.setItem('user', token);
//     }
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const updateUser = async (id:number, email: string,phone: string,date: string) => {
  try {
    if (!id || !email || !phone || !date) throw new Error("No data from");
    return await axios.put(`${environment}/API/users/update`, {id, email, phone, date });
  } catch (error) {
    console.error(error);
  }
};


export const getUserFromCookie = async () => {
  try {
    const { data } = await axios(`${environment}/API/users/getUserByCookies`,);
    if (!data) throw new Error("Couldn't get user");
    return data.user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// export const getUserFromStorage = async () => {
//   try {
//     const token = sessionStorage.getItem('user');
//     const { data } = await axios(`${environment}/API/users/getUserByStorage`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//     if (!data) throw new Error("Couldn't get user");
//     return data.user;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

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


