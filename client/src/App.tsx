import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
// import SignIn from './pages/signIn/SignIn'

function App() {

  return <RouterProvider router={router} />
  // return (
  //   <>
  //    <SignIn/>
   
  //   </>
  // )
}

export default App
