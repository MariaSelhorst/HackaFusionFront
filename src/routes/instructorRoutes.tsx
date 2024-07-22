import Home from "../pages/shared/Home";
import ListClasses from "../pages/management/ListClasses";
import CalendarManagement from "../pages/management/CalendarManagement";
import ClassManagement from "../pages/management/ClassManagement";
import { RouteObject } from "react-router-dom";
import CreateClass from "../pages/management/CreateClass";
import StudentDetail from "../pages/instructor/StudentDetail";

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
        path: "*",
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
        path: "/classes/:id",
        element: <ClassManagement/>
    },
    {
        path: "/classes/:id/student/:student_id",
        element: <StudentDetail/>
    }
]

export default instructorRoutes