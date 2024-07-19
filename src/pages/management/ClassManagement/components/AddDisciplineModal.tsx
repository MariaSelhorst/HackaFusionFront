import { Box, Button, Divider, MenuItem, Modal, Paper, Select, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { IDiscipline } from "../../../../interface/discipline";
import API from "../../../../service/API";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../../providers/UserContext";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface IAddDisciplineModalProps {
    handleClose: () => void;
    open: boolean;
}

export default function AddDisciplineModal({ open, handleClose }:IAddDisciplineModalProps) {

    const { id } = useParams()
    const { token } = useContext(UserContext)
    const [disciplineId, setDisciplineId] = useState("");
    const [disciplines, setDisciplines] = useState<IDiscipline[]>([])

    const handleSubmit = async () => {
        try {
            await API.post(
                "/studentDiscipline",
                { gangId: id, disciplineId: disciplineId },
                { headers: { 'Authorization': "Bearer " + token } }
            )
            toast.success("Disciplina adicionada!")
            setDisciplineId("")
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response!.data.message || "Something went wrong.")
        }
    }

    useEffect(() => {
        const getDisciplines = async () => {
            try {
                const response = await API.get("discipline/notgang/" + id, { headers: { 'Authorization': "Bearer " + token } })
                setDisciplines(response.data)
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        }
        getDisciplines()
    }, [disciplineId])

    return (
        <>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
                <Box component={Paper} sx={{ maxWidth: "500px", margin: "20vh auto", p: 3, display: "flex", flexDirection: "column", gap: 3 }}>
                    <Box>
                        <Typography id="modal-title" variant="h4" noWrap>Adicionar disciplina</Typography>
                        <Divider sx={{marginTop: 2, marginBottom: 2}}/>
                    </Box>
                    <Select
                        sx={{ width: "100%" }}
                        value={disciplineId}
                        onChange={(e) => setDisciplineId(e.target.value)}
                    >
                        {
                            disciplines.map((discipline, i) => <MenuItem key={i} value={discipline.id}>{discipline.name}</MenuItem>)
                        }
                    </Select>
                    <Button onClick={handleSubmit} variant="contained" sx={{ alignSelf: "end" }}>Adicionar</Button>
                </Box>
            </Modal>
        </>
    )
}