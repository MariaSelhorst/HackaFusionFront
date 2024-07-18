import { useEffect } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Sidebar from "../../../components/Sidebar";
import { Stack, InputLabel, MenuItem } from "@mui/material";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const data = [
    { name: 'Python', Aluno: 73, Turma: 90 },
    { name: 'SQL', Aluno: 85, Turma: 90 },
    { name: 'Java básico', Aluno: 72, Turma: 87 },
    { name: 'Excel', Aluno: 58, Turma: 74 },
    { name: 'Power BI', Aluno: 60, Turma: 79 },
    { name: 'IoT', Aluno: 70, Turma: 76 },
];

export default function StudentDetail() {
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Sidebar name="Detalhamento do aluno">
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
                    <Box sx={style}>
                        <FormControl fullWidth>
                            <InputLabel id="disciplina-label">Disciplina</InputLabel>
                            <Select
                                labelId="disciplina-label"
                                id="disciplina-select"
                                value={age}
                                label="Disciplina"
                                onChange={handleChange}
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
                                value={age}
                                label="Competência"
                                onChange={handleChange}
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
                                value={age}
                                label="Aptidão"
                                onChange={handleChange}
                            >
                                <MenuItem>Apto</MenuItem>
                                <MenuItem>Desenvolvimento</MenuItem>
                                <MenuItem>Inapto</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="outlined" color="secondary">Salvar avaliação</Button>
                    </Box>
                </Modal>

                <Box sx={{ marginTop: 4 }}>
                    <Typography variant='h5'>Desempenho do Aluno</Typography>
                    <ResponsiveContainer width="85%" height={300}>
                        <BarChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {/* <Bar dataKey="Turma" fill="#5880de" activeBar={<Rectangle fill="#759ce8" stroke="#214bad" />} />
                            <Bar dataKey="Aluno" fill="#7db895" activeBar={<Rectangle fill="#67d085" stroke="#176b30" />} /> */}
                            <Bar dataKey="Turma" fill="#b064cb" activeBar={<Rectangle fill="#bd7ed6" stroke="#784d88" />} />
                            <Bar dataKey="Aluno" fill="#637bc1" activeBar={<Rectangle fill="#8499d7" stroke="#475c96" />} />
                        </BarChart>
                    </ResponsiveContainer>
                </Box>
            </div>
        </Sidebar>
    );
}
