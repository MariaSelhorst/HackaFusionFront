import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sidebar from "../../../components/Sidebar";
import { Container, Grid } from "@mui/material";

import StudentGraphic from "./components/StudentGraphic";
import StudentModal from "./components/StudentModal";
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../providers/UserContext';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import API from '../../../service/API';
import PyAPI from '../../../service/PyAPI';

const data = [
    { name: 'Python', Aluno: 73, Turma: 90 },
    { name: 'SQL', Aluno: 85, Turma: 90 },
    { name: 'Java básico', Aluno: 72, Turma: 87 },
    { name: 'Excel', Aluno: 58, Turma: 74 },
    { name: 'Power BI', Aluno: 60, Turma: 79 },
    { name: 'IoT', Aluno: 70, Turma: 76 },
];


export default function StudentDetail() {
    const { user, token } = useContext(UserContext)
    const { id, student_id } = useParams()
    const [open, setOpen] = useState(false);

    const [studentData, setStudentData] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const raw_data = await API.get(
                    `/competence/gang/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });


                const res = await PyAPI.post("/data/instructor", raw_data.data);
                
                console.log(res.data[user!.username])
            } catch (e) {
                if (e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        }

        getData()
    }, [])

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

                    </Grid>
                </Grid>
            </Container>
        </Sidebar>
    );
}
