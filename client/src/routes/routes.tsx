
import { createBrowserRouter } from 'react-router-dom';
import SignUp from '../pages/signUp/SignUp';
import SignIn from '../pages/signIn/SignIn';
import Logbook from '../pages/logbook/Logbook';
import ProfilePage from '../pages/profile/ProfilePage';
import ManagerPage from '../pages/manager-page/ManagerPage';
import Main from '../pages/main/Main';
import MyCalendar from '../pages/manager-page/MyCalendar';
import Schedule from '../pages/schedule/Schedule';

export const router = createBrowserRouter([

  { path: "/", element: <Main /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },

  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  

  { path: "/schedule", element: <Schedule /> },
  { path: "/manager-calender", element: <ManagerPage /> },
  { path: "/myCalendar", element: <MyCalendar /> },
  { path: "/profile", element: <ProfilePage /> },
]);
