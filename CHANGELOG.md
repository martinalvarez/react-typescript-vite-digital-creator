# Steps

## Create a project using vite
    npm create vite@latest . -- --template react-ts

## Install packages and check if everything is working properly
    npm install
    npm run dev

## Create a Gallery (loop) that uses a Card (album)
Gallery and Card uses CSS modules.
The Gallery uses a grid to show images.

## Add media queries to consider different resolutions
- phones: < 480px
- tables (vertical mode): > 481 and < 768
- tables (wide mode) and desktops: > 768

## Install react router
    npm install react-router-dom

## Steps for routing
### choose a router
```
const router = createBrowserRouter([....]);
```

### wrap content into a RouterProvider
```
    <RouterProvider router={router}>
    <RouterProvider />
```

### Create about, albums and a generic error page. 
```
const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    errorElement: <ErrorPage />,
  },
  {
    element: <AboutPage />,
    path: '/about',
  },
  {
    element: <AlbumsPage />,
    path: '/albums',
  }
]);
```

### Update root component to create a layout
The router cointains children now. 
```
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
]);
```

### Create a nav bar
Used inline style (just to practice!)

### Create Users page using Class components and the external API: https://jsonplaceholder.typicode.com
Just to practice, Users page is built using Class component. It inherits from React.Component
  constructor receives props and set the state using this.state = {....}
  componentDidMount fetches the API with users and set the state using this.setState({ .... })

