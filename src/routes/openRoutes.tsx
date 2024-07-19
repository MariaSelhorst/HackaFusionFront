import { Navigate, RouteObject } from "react-router-dom"
import Login from "../pages/shared/Login"
import PreRegister from "../pages/shared/PreRegister"
import Register from "../pages/shared/Register"

const openRoutes:RouteObject[] = [
    {
        path: "*",
        element: <Login/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/preregister",
        element: <PreRegister/>
    },
    {
        path: "/register",
        element: <Register/>
    }
]

export default openRoutes