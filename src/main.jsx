import { createRoot } from 'react-dom/client';
import Login from './Components/Login/Login.jsx';
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Error-page.jsx';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home", 
    element: <Home />, 
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
