import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/global.css"
import ListInstructor from './pages/admin/ListInstructor'
import ClassManagement from './pages/instructor/ClassManagement'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <RouterProvider router={mainRoutes}></RouterProvider> */}
    <ClassManagement/>
  </React.StrictMode>,
)
