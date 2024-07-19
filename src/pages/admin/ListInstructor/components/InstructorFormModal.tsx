import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import API from "../../../../service/API";
import { UserContext } from "../../../../providers/UserContext";

interface IInstructorFormModalProps { 
    open: boolean; 
    handleClose: () => void
}

const style = {
    margin: "20vh auto",
    maxWidth: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: 3
};

export default function InstructorFormModal({ open, handleClose }:IInstructorFormModalProps) {

    const [email, setEmail] = useState("")
    const { token } = useContext(UserContext)

    const submit = async () => {
        try {
            await API.post(
                "/register/pre",
                { email: email, role: 1 }, 
                { headers: { 'Authorization': "Bearer " + token } }
            )
            toast.success("Pré-registro efetuado")
            setEmail("")
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response!.data.message || "Something went wrong.")
        }
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    Cadastrar Instrutor
                </Typography>
                <TextField
                    label="E-mail"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                        submit()
                        handleClose()
                    }}
                    sx={{ alignSelf: "end" }}
                >Salvar Pré-registro</Button>
            </Box>
        </Modal>
    )
}