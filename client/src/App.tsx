import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import {disableReactDevTools} from '@fvilers/disable-react-devtools';

let environment = "PROD"
const CLIENT_DEV_URL = "http://localhost:3000";
const CLIENT_PROD_URL = "https://r-fit-client-deploy.onrender.com";

environment === "DEV" ? CLIENT_DEV_URL : CLIENT_PROD_URL

disableReactDevTools()

function App() {
  return <RouterProvider router={router} />;
}

export default App;
