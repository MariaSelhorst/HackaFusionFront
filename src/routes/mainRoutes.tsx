import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/shared/Login"
import PreRegister from "../pages/shared/PreRegister"
import Register from "../pages/shared/Register"
import InstructorHome from "../pages/instructor/InstructorHome"
import ListClasses from "../pages/instructor/ListClasses"
import ClassManagement from "../pages/instructor/ClassManagement"
import CreateClass from "../pages/admin/CreateClass"
import { Typography } from "@mui/material"
import AdminHome from "../pages/admin/AdminHome"


const mainRoutes = createBrowserRouter([
    {
        path: "*",
        element: <Login/>
    },
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/preregister",
        element: <PreRegister/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/calendar",
        element: <Typography>Calendar</Typography>
    },
    {
        path: "/instructor",
        element: <InstructorHome/>
    },
    {
        path: "/instructor/classes",
        element: <ListClasses/>
    },
    {
        path: "/instructor/classes/:id",
        element: <ClassManagement/>
    },
    {
        path: "/admin",
        element: <AdminHome/>
    },
    {
        path: "/admin/create-class",
        element: <CreateClass/>
    },
    {
        path: "/admin/instructors",
        element: <CreateClass/>
    },
])

export default mainRoutes