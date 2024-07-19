import { Grid, Stack } from "@mui/material"
import Sidebar from "../../../components/Sidebar"
import CardLink from "../../../components/CardLink"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"

const Home = () => {

    const { user } = useContext(UserContext)

    return(
        <Sidebar pageName="Home">
            <Stack alignItems="center" justifyContent="center">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <CardLink link="create-class" title="Criar Turma"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <CardLink link="/calendar" title="Calendário"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <CardLink link="instructors" title="Instrutores"/>
                    </Grid>
                </Grid>
            </Stack>
        </Sidebar>
    )
}

export default Home