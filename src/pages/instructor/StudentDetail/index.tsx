import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sidebar from "../../../components/Sidebar";
import { Container, Grid } from "@mui/material";

import StudentGraphic from "./components/StudentGraphic";
import StudentModal from "./components/StudentModal";
import StudentSkills from "./components/StudentSkills";
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const data = [
    { name: 'Python', Aluno: 73, Turma: 90 },
    { name: 'SQL', Aluno: 85, Turma: 90 },
    { name: 'Java básico', Aluno: 72, Turma: 87 },
    { name: 'Excel', Aluno: 58, Turma: 74 },
    { name: 'Power BI', Aluno: 60, Turma: 79 },
    { name: 'IoT', Aluno: 70, Turma: 76 },
];


export default function StudentDetail() {

    const { id } = useParams()
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Sidebar pageName="Detalhamento do aluno">
            <StudentModal open={open} handleClose={handleClose} />
            <Container maxWidth="xl">
                <Typography variant='h4'>Nome do aluno</Typography>
                <Typography variant='h6' marginBottom={3}>Turma</Typography>
                <Button onClick={handleOpen} variant="outlined" >Avaliar aluno</Button>
                
                <Typography variant='h5' marginTop={3}>Desempenho do Aluno</Typography>
                
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <StudentGraphic data={data} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <StudentSkills />
                    </Grid>
                </Grid>
            </Container>
        </Sidebar>
    );
}
