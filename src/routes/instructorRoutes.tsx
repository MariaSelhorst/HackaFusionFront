import Home from "../pages/shared/Home";
import ListClasses from "../pages/management/ListClasses";
import CalendarManagement from "../pages/management/CalendarManagement";
import ClassManagement from "../pages/management/ClassManagement";
import { RouteObject } from "react-router-dom";

const instructorRoutes:RouteObject[] = [
    {
        path: "/calendar",
        element: <CalendarManagement/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/classes",
        element: <ListClasses/>
    },
    {
        path: "/classes/:id",
        element: <ClassManagement/>
    },
]

export default instructorRoutes