import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import ProfilePage from './pages/profile/ProfilePage';

function App() {
  return(
    <ProfilePage />

  )

  // return <RouterProvider router={router} />

}

export default App
