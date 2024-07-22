import { RouteObject } from "react-router-dom";
import Home from "../pages/shared/Home";
import StudentCalendar from "../pages/student/StudentCalendar";
import StudentDetail from "../pages/instructor/StudentDetail";

const studentRoutes:RouteObject[] = [
    {
        path: "/calendar",
        element: <StudentCalendar/>
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
        path: "/dashboard/:id",
        element: <StudentDetail/>
    },
]

export default studentRoutes