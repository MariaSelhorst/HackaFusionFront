import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/shared/Home";
import StudentCalendar from "../pages/student/StudentCalendar";

const studentRoutes:RouteObject[] = [
    {
        path: "/calendar",
        element: <StudentCalendar/>
    },
    {
        path: "/home",
        element: <Home/>
    }
]

export default studentRoutes