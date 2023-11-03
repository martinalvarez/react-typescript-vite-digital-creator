import ReactDOM from 'react-dom/client';
import AboutPage from './pages/About.tsx';
import AlbumsPage from './pages/Albums.tsx';
import App from './App.tsx';
import ErrorPage from './pages/Error.tsx';
import FavoritesPage from './pages/Favorites.tsx';
import LayoutProvider from './context/LayoutProvider.tsx';
import LoginPage from './pages/Login.tsx';
import PostsPage from './pages/Posts.tsx';
import UsersPage from './pages/Users';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

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
      },
      {
        element: <FavoritesPage />,
        path: 'favorites',
      },
    ],
  },
  {
    element: <LoginPage />,
    path: '/login',
  }
]);

// <React.StrictMode>
// </React.StrictMode>,

ReactDOM.createRoot(document.getElementById('root')!).render(
    <LayoutProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </LayoutProvider>
);