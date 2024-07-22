import { useContext, useEffect, useState } from "react"
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom"
import { UserContext } from "../providers/UserContext"
import openRoutes from "./openRoutes"
import studentRoutes from "./studentRoutes"
import adminRoutes from "./adminRoutes"
import instructorRoutes from "./instructorRoutes"


const Routes = () => {

    const [routes, setRoutes] = useState<RouteObject[]>(openRoutes)
    const { user } = useContext(UserContext)

    useEffect(() => {
        if(user) {
            switch(user.role) {
                case 'ADMIN':
                    setRoutes([...adminRoutes, ...openRoutes])
                    break;
                case 'INSTRUCTOR':
                    setRoutes([...instructorRoutes, ...openRoutes])
                    break;
                case 'STUDENT':
                    setRoutes([...studentRoutes, ...openRoutes])
                    break;
                default:
                    setRoutes(openRoutes)
                    break;
            }
        } else {
            setRoutes(openRoutes)
        }
    }, [user])

    return <RouterProvider router={createBrowserRouter(routes)}/>
}

export default Routes