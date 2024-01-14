import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import Logbook from "../pages/logbook/Logbook";
import ProfilePage from "../pages/profile/ProfilePage";
import ManagerPage from "../pages/manager-page/ManagerPage";
import MyCalendar from "../pages/manager-page/MyCalendar";

export const router = createBrowserRouter([
  { path: "/", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/logbook", element: <Logbook /> },
  { path: "/manager-calender", element: <ManagerPage /> },
  { path: "/myCalendar", element: <MyCalendar /> },
  { path: "/profile", element: <ProfilePage /> },
]);
