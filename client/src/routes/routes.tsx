import { createBrowserRouter } from 'react-router-dom';
import SignUp from '../pages/signUp/SignUp';
import SignIn from '../pages/signIn/SignIn';

export const router = createBrowserRouter([

  { path: "/", element: <SignUp /> },
  { path: "/add-user", element: <SignIn /> }

]);