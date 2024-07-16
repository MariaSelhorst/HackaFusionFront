import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login/index.jsx'
import "./styles/global.css"
import { element } from 'prop-types'
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom"

const router = createBrowserRouter([{
  path: "/",
  element: <Login/>
}])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
