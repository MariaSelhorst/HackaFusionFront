import { Grid, Stack } from "@mui/material";
import Sidebar from "../../../components/Sidebar";
import CardLink from "../../../components/CardLink";

export default function InstructorHome () {
    return(
        <Sidebar>
            <Stack alignItems="center" justifyContent="center">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <CardLink link="classes" title="Turmas"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <CardLink link="/calendar" title="Calendário"/>
                    </Grid>
                </Grid>
            </Stack>
        </Sidebar>
    )
}