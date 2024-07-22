import { Typography, Card, CardContent, IconButton, Grid } from "@mui/material";
import Sidebar from "../../../components/Sidebar";
import AddRatingModal from "./components/AddRatingModal";
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from "react";

export default function InstructorRating() {
    const [skills, setSkills] = useState<{ name: string; rating: number }[]>([]);

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
        <Sidebar pageName="Habilidades">
            <Typography variant="h3">Habilidades</Typography>
            <AddRatingModal skills={skills} setSkills={setSkills} />
            <Grid container spacing={2}>
                {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">{skill.name}</Typography>
                                <Typography variant="body2" color="textSecondary">
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
        </Sidebar>
    );
}

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
};
