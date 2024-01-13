import axios from 'axios';

export const register = async(userName:string,password:string)=>{
    try {
        if(!userName || !password) throw new Error("no data from register in client")
        return await axios.post("/api/v1/users/register", {userName, password})
    } catch (error) {
        console.error(error)
    }
}

export const login = async (userName:string, password: string)=>{
    try {
        if(!userName || !password) throw new Error("No data from login in client");
        return await axios.post("/api/v1/users/login", {userName, password});
    } catch (error) {
        console.error(error)
    }
}
