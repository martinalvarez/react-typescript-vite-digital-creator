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

### Install Redux
I used redux and react-redux to create the store, reducer and actions to test them. In next iteration I'll use Redux Toolkit
  npm install redux react-redux @types/react-redux
redux-devtools-extension is useful to use the Redux tool in the Dev Tools and avoid Typescript warnings.  
  npm install --save-dev redux-devtools-extension

#### Steps
Create a reducer function that receives the state and the action. The state can have an initial state.
```
function reducer(state=initialState, action) { .... }
```

Create the store passing the reducer function:
```
const store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 
``` 

Create actions, functions that return an object with the action type and the payload
```
function addUser() { return { type: 'ADD', payload: {userId: 1, .... } } }
```

Wraped the component that will use the the store using with the redux Provider component.
The actions are triggered using dispatch, that olds useDispatch();
The content of the store can be queried using store.getState().

### TODO: use types in store, reducer and actions
### TODO: install npm install @reduxjs/toolkit
### TODO: research using redux dev tool only in development
```
const store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    store = configureStore({
      // Configuraciones del store
      enhancers: [window.__REDUX_DEVTOOLS_EXTENSION__()],
    });
}
```