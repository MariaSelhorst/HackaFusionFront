import { useEffect } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sidebar from "../../../components/Sidebar";
import { Grid } from "@mui/material";

import StudentGraphic from "./components/StudentGraphic";
import StudentModal from "./components/StudentModal";
import StudentSkills from "./components/StudentSkills";

const data = [
    { name: 'Python', Aluno: 73, Turma: 90 },
    { name: 'SQL', Aluno: 85, Turma: 90 },
    { name: 'Java básico', Aluno: 72, Turma: 87 },
    { name: 'Excel', Aluno: 58, Turma: 74 },
    { name: 'Power BI', Aluno: 60, Turma: 79 },
    { name: 'IoT', Aluno: 70, Turma: 76 },
];


export default function StudentDetail() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Sidebar name="Detalhamento do aluno">
            <Typography variant='h4'>Nome do aluno</Typography>
            <Typography variant='h6' marginBottom={3}>Turma</Typography>
            <Button onClick={handleOpen} variant="outlined" >Avaliar aluno</Button>
            <StudentModal open={open} handleClose={handleClose} />
            <Typography variant='h5' marginTop={3}>Desempenho do Aluno</Typography>
            
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <StudentGraphic data={data} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <StudentSkills />
                </Grid>

            </Grid>


        </Sidebar>
    );
}
