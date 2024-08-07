import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import { FormControl, IconButton, InputLabel, MenuItem, Rating, Select, SelectChangeEvent, Typography } from '@mui/material';
import RatingModal from './RatingModal';
import { useContext, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import API from '../../../../service/API';
import { UserContext } from '../../../../providers/UserContext';
import { ISkill } from '../../../../interface/skill';

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

interface AddRatingModalProps {
    skills: { name: string; rating: number }[];
    setSkills: React.Dispatch<React.SetStateAction<{ name: string; rating: number }[]>>;
}

export default function AddRatingModal({ skills, setSkills }: AddRatingModalProps) {

    const { token } = useContext(UserContext)
    const [skill, setSkill] = useState('');
    const [value, setValue] = useState<number | null>(2);
    const [hover, setHover] = useState(-1);
    const [open, setOpen] = useState(false);
    const [skillList, setSkillList] = useState<ISkill[]>([])

    const handleChange = (event: SelectChangeEvent) => {
        setSkill(event.target.value as string);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSaveSkill = () => {
        if (skill && value !== null) {
            const newSkill = { name: skill, rating: value };
            setSkills([...skills, newSkill]);
            setSkill('');
            setValue(2);
            handleClose();
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const response = await API.get("/skill", { headers: { 'Authorization': "Bearer " + token } })
                setSkillList(response.data)
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        })()
    }, [])

    return (
        <div>
            <IconButton 
                color="primary"
                onClick={handleOpen}
                sx={{
                    marginRight:'1500px'
                }}
            >
                <AddIcon fontSize="large" />
            </IconButton>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style }}>
                    <Typography variant="h6" id="parent-modal-title">
                        Selecione ou adicione uma habilidade
                    </Typography>
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel id="demo-simple-select-label">Habilidades</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={skill}
                            onChange={handleChange}
                        >
                            {skillList.map((skill, index) => (
                                <MenuItem key={index} value={skill.id}>{skill.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Box sx={{ mt: 2 }}>
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            getLabelText={(value: number) => `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`}
                            onChange={(_, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(_, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                            <Typography variant="body2" sx={{ ml: 2 }}>
                                {labels[hover !== -1 ? hover : value]}
                            </Typography>
                        )}
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <RatingModal/>
                    </Box>
                    <Button
                        variant='outlined'
                        sx={{
                            marginTop: 2,
                        }}
                        onClick={handleSaveSkill}>
                        Salvar
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
