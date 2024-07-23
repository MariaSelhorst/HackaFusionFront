import { Navigate, RouteObject } from "react-router-dom";
import Home from "../pages/shared/Home";
import StudentCalendar from "../pages/student/StudentCalendar";
import StudentDetail from "../pages/shared/StudentDetail";

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
        element: <Navigate to="/home"/>
    },
    {
        path: "/dashboard/:id",
        element: <StudentDetail/>
    },
]

export default studentRoutes