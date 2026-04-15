import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import TimeLine from './pages/TimeLine.jsx'
import Stats from './pages/Stats.jsx'




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
        path: "/timeline",
        element: <TimeLine/>
      },
      {
        path: "/stats",
        element: <Stats/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)