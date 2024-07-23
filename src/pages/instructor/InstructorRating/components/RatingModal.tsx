import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import API from '../../../../service/API';
import { UserContext } from '../../../../providers/UserContext';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};


export default function RatingModal() {

    const { token } = useContext(UserContext)
    const [name, setName] = useState('');
    const [open, setOpen] = useState(false)

    const handleSaveSkill = async () => {
        try {
            await API.post("/skill", { name: name }, { headers: { 'Authorization': "Bearer " + token } })            
            setName('');
            setOpen(false);
            toast.success("Habilidade criada!")
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response!.data.message || "Something went wrong.")
        }
    };

    return (
        <>
            <Button variant='outlined' onClick={() => { setOpen(true) }}>Adicionar Habilidade</Button>
            <Modal
                open={open}
                aria-labelledby="rating-modal-title"
                aria-describedby="rating-modal-description"
            >
                <Box sx={{ ...style }}>
                    <Typography variant="h6" id="rating-modal-title">
                        Adicionar Nova Habilidade
                    </Typography>

                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel htmlFor="new-skill">Nova Habilidade</InputLabel>
                        <Input
                            id="new-skill"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>

                    <Box sx={{ mt: 2 }}>
                        <Button onClick={handleSaveSkill}>Salvar</Button>
                        <Button onClick={() => { setOpen(false) }} sx={{ ml: 1 }}>Cancelar</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}
