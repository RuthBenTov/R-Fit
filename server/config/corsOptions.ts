import { allowedOrigins } from "./allowedOrigin";

export const corsOptions = {
    origin: (origin, callback) =>{
        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null,true);
        }else{
            callback(new Error("not Allowed By CORS"));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
}