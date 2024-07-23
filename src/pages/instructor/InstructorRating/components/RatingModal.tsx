import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel, SelectChangeEvent, Typography } from '@mui/material';

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

const labels: { [index: string]: string } = {
    0.5: 'Iniciante',
    1: 'Iniciante',
    1.5: 'Básico',
    2: 'Básico',
    2.5: 'Intermediário',
    3: 'Intermediário',
    3.5: 'Avançado',
    4: 'Avançado',
    4.5: 'Expert',
    5: 'Expert'
};

interface RatingModalProps {
    onAddSkill: (skill: string) => void;
}

export default function RatingModal({ onAddSkill }: RatingModalProps) {
    const [skill, setSkill] = React.useState('');
    const [value, setValue] = React.useState<number>(2);
    const [hover, setHover] = React.useState(-1);
    const [open, setOpen] = React.useState(false)

    const handleChange = (event: SelectChangeEvent) => {
        setSkill(event.target.value as string);
    };

    const handleSaveSkill = () => {
        onAddSkill(skill);
        setSkill('');
        setValue(2); // Resetar valor de rating após salvar
        setOpen(false);
    };

    return (
        <>
            <Button variant='outlined' onClick={(e) => { setOpen(true) }}>
                Adicionar Habilidade
            </Button>
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
                            value={skill}
                            onChange={(e) => setSkill(e.target.value)}
                        />
    
                    </FormControl>

                    <Box sx={{ mt: 2 }}>
                        <Button onClick={handleSaveSkill}
                            
                        >Salvar</Button>
                        <Button onClick={() => { setOpen(false) }} sx={{ ml: 1 }}>Cancelar</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}
