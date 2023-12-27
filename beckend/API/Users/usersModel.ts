export interface _User {
    userName: string;
    password : string;
}

export class User {
    userName: string;
    password : string;
    id:string;
    constructor ({userName, password}:_User){
        this.userName = userName,
        this.password = password
        this.id = Math.random().toString()
    }
}


export const users:User[]= []