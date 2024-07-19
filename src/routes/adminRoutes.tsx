import Home from "../pages/shared/Home";
import CalendarManagement from "../pages/management/CalendarManagement";
import ClassManagement from "../pages/management/ClassManagement";
import { RouteObject } from "react-router-dom";

const adminRoutes:RouteObject[] = [
    {
        path: "/calendar",
        element: <CalendarManagement/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/classes/:id",
        element: <ClassManagement/>
    },
]

export default adminRoutes