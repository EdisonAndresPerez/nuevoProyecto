import { createRoot } from 'react-dom/client';
import Login from './Components/Login/Login.jsx';
import ErrorPage from './Error-page.jsx';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Overview from './pages/overview/Overview.jsx';
import Contacs from './pages/contacts/Contacts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/overview", 
    element: <Overview />, 
  },
  {
    path: "/contacts", 
    element: <Contacs />, 
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
