import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutPage from './pages/About.tsx';
import AlbumsPage from './pages/Albums.tsx';
import App from './App.tsx';
import ErrorPage from './pages/Error.tsx';
import LoginPage from './pages/Login.tsx';
import PostsPage from './pages/Posts.tsx';
import UsersPage from './pages/Users';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

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
      {
        element: <UsersPage />,
        path: '/users',
      },
      {
        element: <PostsPage />,
        path: '/posts',
      }      
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
