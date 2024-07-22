import { Container, Typography } from "@mui/material"
import Sidebar from "../../../components/Sidebar"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"

export default function StudentCalendar() {

    const { user } = useContext(UserContext)

    return(
        <Sidebar pageName="Calendário">
            <Container>

            </Container>
        </Sidebar>
    )
}

