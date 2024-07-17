import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom"
import "./styles/global.css"
import Login from './pages/Login'
import Home from './pages/ClassManagement'
import ClassCalendar from './pages/ClassCalendar'
import ListClasses from './pages/ListClasses'
import ListStudents from './pages/ListStudents'
import ListInstructor from './pages/ListInstructor'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/class",
    element: <Home/>
  },
  {
    path: "/class/calendar",
    element: <ClassCalendar/>
  },
  {
    path: "/class/list",
    element: <ListClasses/>
  },
  {
    path: "/students/list",
    element: <ListStudents/>
  },
  {
    path: "/instructor/list",
    element: <ListInstructor/>
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
