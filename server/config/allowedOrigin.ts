import dotenv from "dotenv";

dotenv.config();

const urlPROD = process.env.CLIENT_PROD_URL 
const urlDEV = process.env.CLIENT_DEV_URL 
export const allowedOrigins = [urlDEV,urlPROD];
