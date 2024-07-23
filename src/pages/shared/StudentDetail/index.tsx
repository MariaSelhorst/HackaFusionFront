import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sidebar from "../../../components/Sidebar";
import { Container, Grid } from "@mui/material";

import StudentGraphic from "./components/StudentGraphic";
import StudentModal from "./components/StudentModal";
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../../service/API';
import { UserContext } from '../../../providers/UserContext';
import PyAPI from '../../../service/PyAPI';
import { toast } from 'react-toastify';

interface UserInfo {
    username: string,
    fullname: string,
    className: string
}

export default function StudentDetail() {
    const [ render, setRender ] = useState(false)
    const [open, setOpen] = useState(false);
    const { user, token } = useContext(UserContext);
    const { classId, id } = useParams()
    const [userInfo, setUserInfo] = useState<UserInfo>();
    const [avaliations, setAvaliations] = useState<any[]>([])

    if (user?.role !== "STUDENT") {
        useEffect(() => {
            const getData = async () => {
                if (user?.role === "STUDENT")
                    return;

                const apiRes = await API.get(`/competence/gang/${classId}`, {headers: {Authorization: `Bearer ${token}`}})
                const rawData = apiRes.data;


                const currentUser = rawData.filter((x: any) => x.user.id === Number(id))[0].user;

                setUserInfo({fullname: currentUser.fullname, username: currentUser.username, className: currentUser.studentGang.name})

                const pyRes = await PyAPI.post(`/instructor/${id}`, rawData)

                const tmpData: any[] = [];

                Object.entries(pyRes.data).forEach(x => {
                    tmpData.push({
                        name: x[0],
                        ...Object(x[1])
                    })
                })

                setAvaliations(tmpData)
            }

            getData();
        }, [render])
    }
    else {
        useEffect(() => {
            (async () => {
                try {
                    const res = await API.get(`/competence/student/${id}`, {headers: {Authorization: `Bearer ${token}`}});
                    const pyRes = await PyAPI.post(`/student`, res.data);
                    const tmpData: any[] = [];
                    Object.entries(pyRes.data).forEach(x => {
                        tmpData.push({
                            name: x[0],
                            ...Object(x[1])
                        })
                    })

                    setAvaliations(tmpData)

                } catch (e:any) {
                    toast.error(e.response!.data.message || "Something went wrong.")
                }
            })();
        }, []);
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Sidebar pageName={user?.role === 'STUDENT' ? "Competencias e Avaliações" : "Detalhes do aluno"}>
            {user?.role !== 'STUDENT' &&
                <StudentModal open={open} render={render} setRender={setRender} handleClose={handleClose} />
            }            
            <Container maxWidth="xl">
                <Typography variant='h4'>{userInfo?.fullname}</Typography>
                <Typography variant='h6' marginBottom={3}>{userInfo?.className}</Typography>
                
                {user?.role !== 'STUDENT' && 
                <Button onClick={handleOpen} variant="outlined" >Avaliar aluno</Button> 
                }
                
                <Typography variant='h5' marginTop={3}>{ user?.role !== "STUDENT" ? "Desempenho do aluno" : "Grafico de desempenho"}</Typography>
                
                <Container>
                        <StudentGraphic data={avaliations} />
                </Container>
            </Container>
        </Sidebar>
    );
}
