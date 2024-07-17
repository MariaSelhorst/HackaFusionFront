import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom"
import "./styles/global.css"
import Login from './pages/Login'

const router = createBrowserRouter([{
  path: "/",
  element: <Login/>
}])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
