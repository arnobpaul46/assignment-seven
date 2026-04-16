import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Page/Home.jsx'
import TimeLine from './Page/TimeLine.jsx'
import Stats from './Page/Stats.jsx'
import FriendDetails from './Component/FriendDetails/FriendDetails.jsx'
import NotFound from './Page/NotFound.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/friend/:id",
        element: <FriendDetails />
      },
      {
        path: "/timeline",
        element: <TimeLine />
      },
      {
        path: "/stats",
        element: <Stats />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)