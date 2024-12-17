import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import SignUp from '../components/signup-page/SignUp';
import SignIn from '../components/sign-in/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // {
      //   path: 'signup',
      //   element: <SignUp />,
      // },
    ],
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
]);

export default router;
