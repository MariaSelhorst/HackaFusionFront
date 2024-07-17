import * as React from 'react';
import { Grid, Box, TextField, Stack, Button, Typography, Modal, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { Add as AddIcon } from '@mui/icons-material';
import Sidebar from "../../components/Sidebar";
import { InstructorContainer, InstructorTextTitle } from "./styles";
import InfoList, { TableInfo } from '../../components/InfoList';

const modalStyle = {
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

const data:TableInfo[]  = [
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
]

function InstructorFormModal({ open, handleClose }: { open: boolean; handleClose: () => void }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
                    Cadastrar Aluno
                </Typography>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > :not(style)': { m: 2, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Nome do Aluno" variant="outlined" />
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                    <Stack spacing={2} direction="row" sx={{ justifyContent: 'center', marginTop: 3 }}>
                        <Button variant="contained" color="error" onClick={handleClose}>
                            Salvar
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Modal>
    );
}

export default function ListStudents() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Sidebar name="Alunos">
                <Grid container justifyContent="center">
                    <InstructorContainer>
                        <IconButton color="primary" onClick={handleOpen}>
                            <AddIcon />
                        </IconButton>
                    </InstructorContainer>
                </Grid>
                <Stack alignItems={"center"} marginTop={5}>
                    <InfoList firstColumn='Nome' secondColumn='Turma' data={data}/>
                </Stack>
            </Sidebar>
            <InstructorFormModal open={open} handleClose={handleClose} />
        </>
    );
}
