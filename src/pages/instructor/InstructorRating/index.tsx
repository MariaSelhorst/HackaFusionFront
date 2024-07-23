import { Typography, Card, CardContent, IconButton, Grid, Container, Box } from "@mui/material";
import Sidebar from "../../../components/Sidebar";
import AddRatingModal from "./components/AddRatingModal";
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useContext, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import API from "../../../service/API";
import { UserContext } from "../../../providers/UserContext";

export default function InstructorRating() {

    const { user, token } = useContext(UserContext)
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

    useEffect(() => {
        (async () => {
            try {
                const response = await API.get("/userSkill/"+user?.id, { headers: { 'Authorization': "Bearer " + token } })
                setSkills(response.data)
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        })()
    }, [])

    return (
        <Sidebar pageName="Habilidades">
            <Container maxWidth="xl">
                <Box sx={{ display: 'flex', gap: 3, alignItems: "center" }}>
                    <Typography variant="h3">Habilidades</Typography>
                    <AddRatingModal skills={skills} setSkills={setSkills} />
                </Box>
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
            </Container>
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
