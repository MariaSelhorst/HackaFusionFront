import { Box, Grid, Stack, Typography } from "@mui/material";
import Sidebar from "../../../components/Sidebar";
import CardLink from "../../../components/CardLink";
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';

export default function AdminHome () {
    return(
        <Sidebar name="Home">
            <Stack alignItems="center" justifyContent="center">
                <Grid container spacing={3} sx={{ maxWidth: 1600 }} justifyContent="center" paddingTop={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <CardLink link="create-class" title="Criar Turma" icon={<CreateTwoToneIcon sx={{ fontSize: '2.2em', color:'white' }}/>} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <CardLink link="/calendar" title="Calendário" icon={<CalendarTodayTwoToneIcon sx={{ fontSize: '2.2em', color:'white' }} />} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <CardLink link="instructors" title="Instrutores" icon={<PeopleAltTwoToneIcon sx={{ fontSize: '2.2em', color:'white' }} />} />
                    </Grid>
                </Grid>
            </Stack>
            <Box>
                <Typography variant="h5"
                    textAlign="center"
                    color={"#757575"}>
                    Fórum perguntas e respostas
                </Typography>

            </Box>   
        </Sidebar>

    )
}