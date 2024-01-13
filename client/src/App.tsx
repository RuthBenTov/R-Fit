import './App.scss'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import Schedule from './pages/schedule/Schedule';

function App() {

  return <RouterProvider router={router} />
  // return(
  //   <>
  //   <Schedule />
  //   </>
  // )

}

export default App
