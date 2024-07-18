import Sidebar from "../../../components/Sidebar";
import { Button, FormControl, Grid, InputLabel, List, ListItem, ListItemText, MenuItem, Select, Stack, Typography, Box, TextField, IconButton } from "@mui/material";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useState } from "react";

interface IDisciplineCreation {
    name: string;
    description: string;
    workload: number;
    type: string;
}

interface ICompetenceCreation {
    name: string;
    description: string;
    weigth: number;
}

export default function CreateCourse() {
    
    const [filter, setFilter] = useState("");
    const [competency, setCompetency] = useState("");
    const [description, setDescription] = useState("");
    const [weight, setWeight] = useState("");
    const [items, setItems] = useState([]);

    const handleAddItem = () => {
        if (competency.trim() !== "" && description.trim() !== "" && weight.trim() !== "") {
            const newItem = { competency, description, weight };
            setItems([...items, newItem]);
            setCompetency("");
            setDescription("");
            setWeight("");
        }
    };

    const handleRemoveItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <>
            <Sidebar name="Cadastrar Disciplina">
                <Stack maxWidth={"75%"} flexDirection={"column"} borderRadius={"20px"} bgcolor={"#ffffff"} gap={"20px"} sx={{ padding: "30px" }}>
                    <Box width={350}>
                        <Typography variant="h4" marginBottom={"15px"}>Cadastrar Disciplina</Typography>
                        <TextField
                            color="secondary"
                            id="demo-helper-text-aligned"
                            label="Nome da disciplina"
                            fullWidth
                            sx={{mb: 2}}
                        />
                        <TextField
                            color="secondary"
                            id="demo-helper-text-aligned"
                            label="Descrição"
                            fullWidth
                            sx={{mb: 2}}
                        />
                        <TextField
                            color="secondary"
                            id="demo-helper-text-aligned"
                            label="Carga Horária"
                            fullWidth
                            sx={{mb: 2}}
                        />
                        <FormControl fullWidth>
                            <InputLabel id="type-select-label" sx={{ backgroundColor: "white" }}>Tipo</InputLabel>
                            <Select 
                                labelId="type-select-label"
                                value={filter}
                                onChange={(e) => { setFilter(e.target.value as string) }}
                            >
                                <MenuItem value="TI">T.I.</MenuItem>
                                <MenuItem value="MECHATRONIC">Mecatrônica</MenuItem>
                                <MenuItem value="ADMINISTRATIVE">Administração</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <TextField
                                color="secondary"
                                id="competency-field"
                                label="Competência"
                                fullWidth
                                value={competency}
                                onChange={(e) => setCompetency(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                color="secondary"
                                id="description-field"
                                label="Descrição"
                                fullWidth
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                color="secondary"
                                id="weight-field"
                                label="Peso"
                                fullWidth
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Stack alignItems={"center"} marginTop={"1vh"}>
                                <Button variant="contained" color="success" onClick={handleAddItem}>Adicionar</Button>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Box>
                        <List>
                            {items.map((item, index) => (
                                <ListItem
                                    key={index}
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveItem(index)}>
                                            <HighlightOffRoundedIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemText primary={`Competência: ${item.competency}, Descrição: ${item.description}, Peso: ${item.weight}`} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={8} md={6} lg={4}>
                            <Button variant="contained" color="error" fullWidth>
                                Cadastrar
                            </Button>
                        </Grid>
                    </Grid>
                </Stack>
            </Sidebar>
        </>
    );
}
