import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/global.css"
import ClassManagement from './pages/instructor/ClassManagement'
import ListStudents from './pages/instructor/ListStudents'
import CreateClass from './pages/instructor/CreateClass'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <RouterProvider router={mainRoutes}></RouterProvider> */}
    <CreateClass/>
  </React.StrictMode>,
)
