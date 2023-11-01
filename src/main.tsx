import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorPage from './pages/Error.tsx';
import AlbumsPage from './pages/Albums.tsx';
import AboutPage from './pages/About.tsx';
import LoginPage from './pages/Login.tsx';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AlbumsPage />,
        path: '/albums',
      },
      {
        element: <AboutPage />,
        path: '/about',
      },        
    ],
  },
  {
    element: <LoginPage />,
    path: '/login',
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
