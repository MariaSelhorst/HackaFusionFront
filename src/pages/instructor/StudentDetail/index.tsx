import { useEffect } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Sidebar from "../../../components/Sidebar";
import { Stack, InputLabel, MenuItem, Container } from "@mui/material";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import StudentGraphic from "./components/StudentGraphic";
import StudentModal from "./components/StudentModal";

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
            <Typography variant='h6'>Turma</Typography>
            <Button onClick={handleOpen} variant="outlined" >Avaliar aluno</Button>
            <StudentModal open={open} handleClose={handleClose}/>
            <Typography variant='h5'>Desempenho do Aluno</Typography>
            <StudentGraphic data={data}/>
            
        </Sidebar>
    );
}
