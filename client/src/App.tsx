import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import {disableReactDevTools} from '@fvilers/disable-react-devtools';


// let envoirment = process.env.ENVOIRMENT;
// const SERVER_URL_DEV = process.env.SERVER_URL_DEV;
// const SERVER_URL_PROD = process.env.SERVER_URL_PROD;

// envoirment === "DEV" ? SERVER_URL_DEV : SERVER_URL_PROD
// console.log(envoirment)
// console.log(process.env.REACT_APP_BASE_URL)
disableReactDevTools();

function App() {
  return <RouterProvider router={router} />;
}

export default App;
