import { Style } from "@mui/icons-material"
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select } from "@mui/material"

interface IStudentModalProps {
    open: boolean,
    handleClose: () => void
}

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

export default function StudentModal({ open, handleClose }:IStudentModalProps){
    return(
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
                        label="Disciplina"
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
                        label="Competência"
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
                        label="Aptidão"
                    >
                        <MenuItem>Apto</MenuItem>
                        <MenuItem>Desenvolvimento</MenuItem>
                        <MenuItem>Inapto</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="outlined" color="secondary">Salvar avaliação</Button>
            </Box>
        </Modal>
    )    
}
