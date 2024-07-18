import { Box, Button, Modal, TextField, Typography } from "@mui/material";

const style = {
    margin: "20vh auto",
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: 3
};

export default function InstructorFormModal({ open, handleClose }: { open: boolean; handleClose: () => void }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Cadastrar Instrutor
                </Typography>
                <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                <Button variant="contained" color="error" onClick={handleClose} sx={{ alignSelf: "end" }}>Salvar</Button>
            </Box>
        </Modal>
    );
}