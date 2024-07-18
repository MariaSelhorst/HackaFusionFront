import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/global.css"
import { RouterProvider } from 'react-router-dom'
import mainRoutes from './routes/mainRoutes'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={mainRoutes}></RouterProvider>
  </React.StrictMode>,
)
