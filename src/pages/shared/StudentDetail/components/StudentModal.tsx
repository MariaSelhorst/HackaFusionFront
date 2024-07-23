import { alertClasses, Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, SelectChangeEvent } from "@mui/material"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../providers/UserContext";
import API from "../../../../service/API";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface IStudentModalProps {
    open: boolean,
    handleClose: () => void,
    render: boolean,
    setRender: (value: boolean) => void
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #c352e8',
    boxShadow: 24,
    p: 4,
};

export default function StudentModal({ open, handleClose, render, setRender }:IStudentModalProps){
    const { user, token } = useContext(UserContext);
    const { classId, id } = useParams();

    const [ discipline, setDiscipline ] = useState<number>();
    const [ competence, setCompetence ] = useState<number>();
    const [ status, setStatus ] = useState<any>();
    
    const [ disciplines, setDisciplines ] = useState<any[]>([]);
    const [ competences, setCompetences ] = useState<any[]>([]);

    useEffect(() => {
        (async () => {
            const res = await API.get(`/discipline/gang/${classId}`, {headers: {Authorization: `Bearer ${token}`}});

            setDisciplines(res.data)
        })();
    }, [])

    useEffect(() => {
        (async() => {
            if (!discipline) {
                return;
            }

            const res = await API.get(`competence/discipline/${discipline}`, {headers: {Authorization: `Bearer ${token}`}})

            setCompetences(res.data);
        })()
    }, [discipline])

    const saveInfo = async () => {
        if (!discipline || !competence || !status) {
            toast.error("Please fill the form accordly!")
        }

        try {
            const res = await API.post(`/avaliation`, {
                status: status,
                competenceId: competence,
                userId: id
            }, {headers: {Authorization: `Bearer ${token}`}})
    
            handleClose();
            setRender(!render)
    
            toast.success("Created!")

        } catch (e:any) {
            toast.error(e.response!.data.message || "Something went wrong.");
        }
    }

    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="disciplina-label">Disciplina</InputLabel>
                    <Select
                        labelId="disciplina-label"
                        id="disciplina-select"
                        label="Disciplina"
                        onChange={(event) => {setDiscipline(Number(event.target.value))}}
                    >
                        {disciplines.map((value, index) => 
                            <MenuItem key={index} value={value.id}>
                                {value.name}
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="competencia-label">Competência</InputLabel>
                    <Select
                        labelId="competencia-label"
                        id="competencia-select"
                        label="Competência"
                        onChange={(event) => {setCompetence(Number(event.target.value))}}
                    >

                        {competences.map((value, index) => 
                            <MenuItem key={index} value={value.id}>
                                {value.name}
                            </MenuItem>
                        )}

                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="aptidao-label">Aptidão</InputLabel>
                    <Select
                        labelId="aptidao-label"
                        id="aptidao-select"
                        label="Aptidão"
                        onChange={(event) => {setStatus(event.target.value)}}
                    >
                        <MenuItem value="QUALIFIED">Apto</MenuItem>
                        <MenuItem value="LEARNING">Desenvolvimento</MenuItem>
                        <MenuItem value="UNQUALIFIED">Inapto</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{ textAlign: 'right' }}>
                    <Button variant="outlined" color="secondary" onClick={() => {saveInfo()}}>Salvar avaliação</Button>
                </Box>
            </Box>
        </Modal>
    )    
}
