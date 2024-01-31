import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import {disableReactDevTools} from '@fvilers/disable-react-devtools';



disableReactDevTools()

function App() {
  return <RouterProvider router={router} />;
}

export default App;
