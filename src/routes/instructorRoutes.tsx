import Home from "../pages/shared/Home";
import ListClasses from "../pages/management/ListClasses";
import CalendarManagement from "../pages/management/CalendarManagement";
import ClassManagement from "../pages/management/ClassManagement";
import { Navigate, RouteObject } from "react-router-dom";
import CreateClass from "../pages/management/CreateClass";
import ListDisciplines from "../pages/admin/ListDisciplines";
import CreateDiscipline from "../pages/admin/CreateDiscipline";
import StudentDetail from "../pages/shared/StudentDetail";
import InstructorRating from "../pages/instructor/InstructorRating";

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
        element: <Navigate to="/home"/>
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
        path: "/disciplines",
        element: <ListDisciplines/>
    },
    {
        path: "/disciplines/create",
        element: <CreateDiscipline/>
    },
    {
        path: "/classes/:classId/student/:id",
        element: <StudentDetail/>
    },
    {
        path: "/skills",
        element: <InstructorRating/>
    },
]

export default instructorRoutes