import * as React from 'react';
import { Typography, Card, CardContent, IconButton, Grid, Box } from "@mui/material";
import Sidebar from "../../../components/Sidebar";
import AddRatingModal from "./components/AddRatingModal";
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function InstructorRating() {
    const [skills, setSkills] = React.useState<{ name: string; rating: number }[]>([]);

    const handleDeleteSkill = (index: number) => {
        const newSkills = [...skills];
        newSkills.splice(index, 1);
        setSkills(newSkills);
    };

    const handleEditSkill = (index: number, updatedSkill: { name: string; rating: number }) => {
        const newSkills = [...skills];
        newSkills[index] = updatedSkill;
        setSkills(newSkills);
    };

    return (
        <Sidebar name="Habilidades">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h3">Habilidades</Typography>
                <AddRatingModal skills={skills} setSkills={setSkills} />
            </Box>
            {skills.length === 0 ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                    <img src="/imgbackground.svg" alt="Imagem quando não há habilidades" style={{ maxWidth: '100%', maxHeight: '100%', opacity: 0.5 }} />
                </Box>
            ) : (
                <Grid container spacing={2}>
                    {skills.map((skill, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">{skill.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {`Nível: ${skill.rating} (${labels[skill.rating]})`}
                                    </Typography>
                                    <IconButton onClick={() => handleEditSkill(index, skill)} aria-label="edit">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDeleteSkill(index)} aria-label="delete">
                                        <HighlightOffIcon />
                                    </IconButton>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Sidebar>
    );

const labels: { [index: number]: string } = {
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
}}