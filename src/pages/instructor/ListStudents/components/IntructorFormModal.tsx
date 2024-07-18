import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";

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

function InstructorFormModal({ open, handleClose }: { open: boolean; handleClose: () => void }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2" align="center">Cadastrar Aluno</Typography>
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
                    <TextField id="outlined-basic" label="E-mail do Aluno" variant="outlined" />
                    <Stack spacing={2} direction="row" sx={{ justifyContent: 'center', marginTop: 3 }}>
                        <Button variant="contained" color="error" onClick={handleClose}>Salvar</Button>
                    </Stack>
                </Box>
            </Box>
        </Modal>
    );
}

export default InstructorFormModal