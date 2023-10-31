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

### Create about, albumes and a generic error page. 