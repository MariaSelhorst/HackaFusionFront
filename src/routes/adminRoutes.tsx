import Home from "../pages/shared/Home";
import CalendarManagement from "../pages/management/CalendarManagement";
import ClassManagement from "../pages/management/ClassManagement";
import { Navigate, RouteObject } from "react-router-dom";
import ListClasses from "../pages/management/ListClasses";
import ListInstructor from "../pages/admin/ListInstructor";
import CreateClass from "../pages/management/CreateClass";
import ListDisciplines from "../pages/admin/ListDisciplines";
import CreateDiscipline from "../pages/admin/CreateDiscipline";
import StudentDetail from "../pages/shared/StudentDetail";

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
        path: "/instructors",
        element: <ListInstructor/>
    },
    {
        path: "/calendar",
        element: <CalendarManagement/>
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
    
]

export default adminRoutes