import { RouteObject } from "react-router-dom";
import Home from "../pages/shared/Home";
import StudentCalendar from "../pages/student/StudentCalendar";
import StudentDashboard from "../pages/student/StudentDashboard";

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
        path: "/dashboard",
        element: <StudentDashboard/>
    }
]

export default studentRoutes