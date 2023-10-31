import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorPage from './pages/Error.tsx';
import AlbumesPage from './pages/Albumes.tsx';
import AboutPage from './pages/About.tsx';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AlbumesPage />,
        path: '/albums',
      },
      {
        element: <AboutPage />,
        path: '/about',
      },        
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
