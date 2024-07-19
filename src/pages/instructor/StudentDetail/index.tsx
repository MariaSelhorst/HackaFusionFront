import { useEffect } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sidebar from "../../../components/Sidebar";
import { Box, FormControl, Grid, InputLabel, MenuItem, Modal, Select } from "@mui/material";

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
        <Sidebar pageName="Detalhamento do aluno">
            <div>
                <Typography variant='h4'>Nome do aluno</Typography>
                <Typography variant='h6'>Turma</Typography>
                <Button onClick={handleOpen} variant="outlined" >Avaliar aluno</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{}}>
                        <FormControl fullWidth>
                            <InputLabel id="disciplina-label">Disciplina</InputLabel>
                            <Select
                                labelId="disciplina-label"
                                id="disciplina-select"
                                value={2}
                                label="Disciplina"
                                onChange={() => {}}
                            >
                                <MenuItem>Desenvolvimento web</MenuItem>
                                <MenuItem>Redes</MenuItem>
                                <MenuItem>Process mapping</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="competencia-label">Competência</InputLabel>
                            <Select
                                labelId="competencia-label"
                                id="competencia-select"
                                value={2}
                                label="Competência"
                                onChange={() => {}}
                            >
                                <MenuItem>Condicionais</MenuItem>
                                <MenuItem>Funções</MenuItem>
                                <MenuItem>Integração com banco</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="aptidao-label">Aptidão</InputLabel>
                            <Select
                                labelId="aptidao-label"
                                id="aptidao-select"
                                value={2}
                                label="Aptidão"
                                onChange={() => {}}
                            >
                                <MenuItem>Apto</MenuItem>
                                <MenuItem>Desenvolvimento</MenuItem>
                                <MenuItem>Inapto</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="outlined" color="secondary">Salvar avaliação</Button>
                        <StudentGraphic data={[]}></StudentGraphic>
                    </Box>
                </Modal>
            </div>
        </Sidebar>
    );
}
