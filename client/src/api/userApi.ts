import axios from "axios";
// const server = "http://localhost:3000" 

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
    const response = await axios.post(`/APIusers/users/register`, { user });
    // const response = await axios.post(`${server}/APIusers/users/register`, { user });
    if (response) return response;
    else return undefined;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (userName: string, password: string) => {
  try {
    if (!userName || !password) throw new Error("No data from login in client");
    return await axios.post("/API/APIusers/login", { userName, password });
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (id:number, email: string,phone: string,date: string) => {
  try {
    if (!id || !email || !phone || !date) throw new Error("No data from");
    return await axios.put("/API/APIusers/update", {id, email, phone, date });
  } catch (error) {
    console.error(error);
  }
};
