import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";


export const register = async(user:{userName:string, password:string, email:string, birthday:string, phone:string, name:string})=>{
    try {
        if(!user) throw new Error("no data from register in client")
        const response =  await axios.post("/API/users/register", {user})
    if(response) return response
    else return undefined
    } catch (error) {
        console.error(error)
    }
}

export const login = async (userName:string, password: string)=>{
    try {
        if(!userName || !password) throw new Error("No data from login in client");
        return await axios.post("/API/users/login", {userName, password});
    } catch (error) {
        console.error(error)
    }
}


export const getUserEventsAPI = createAsyncThunk("events/fetchEvents", async(userId:number)=>{
    try {
        const {data} = await axios.get(`/user/events?userId=${userId}`);
        if(!data) throw new Error("No data in getUserEventsApi");
        return data.events;
    } catch (error) {
        console.error(error);
        throw error;
    }
})


export const fetchUserId = createAsyncThunk("user/fetchUserId", async(_, {dispatch})=>{
    
})