import Home from "../pages/shared/Home";
import CalendarManagement from "../pages/management/CalendarManagement";
import ClassManagement from "../pages/management/ClassManagement";
import { RouteObject } from "react-router-dom";
import ListClasses from "../pages/management/ListClasses";
import ListInstructor from "../pages/admin/ListInstructor";
import CreateClass from "../pages/management/CreateClass";

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
        path: "/classes",
        element: <ListClasses/>
    },
    {
        path: "/classes/:id",
        element: <ClassManagement/>
    },
    {
        path: "/classes/create",
        element: <CreateClass/>
    },
    {
        path: "/instructors",
        element: <ListInstructor/>
    }
]

export default adminRoutes