import { createBrowserRouter } from 'react-router-dom';
import SignUp from '../pages/signUp/SignUp';
import SignIn from '../pages/signIn/SignIn';
import Logbook from '../pages/logbook/Logbook';
import ProfilePage from '../pages/profile/ProfilePage';

export const router = createBrowserRouter([

  { path: "/", element: <SignUp /> },
  { path: "/add-user", element: <SignIn /> },
  {path: "/logbook", element: <Logbook />},
  {path: "/profile", element: <ProfilePage /> }

]);