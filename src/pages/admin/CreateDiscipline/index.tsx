import Sidebar from "../../../components/Sidebar";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography, TextField, IconButton, Container } from "@mui/material";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useContext, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import API from "../../../service/API";
import { UserContext } from "../../../providers/UserContext";

interface ICompetenceCreation {
    name: string;
    description: string;
    weight: number;
}


export default function CreateDiscipline() {

    const disciplineForm = useForm()
    const competenceForm = useForm()
    
    const [competences, setCompetences] = useState<ICompetenceCreation[]>([])
    const [disciplineType, setDisciplineType] = useState("TI")
    const { token } = useContext(UserContext)

    const handleAddItem = () => {
        setCompetences((prev) => [...prev, competenceForm.getValues() as ICompetenceCreation])
        competenceForm.resetField("name")
        competenceForm.resetField("weight")
        competenceForm.resetField("description")
        competenceForm.setFocus("name")
    }
    const handleRemoveItem = (index: number) => {
        setCompetences(prev => prev.filter((_, i) => index != i))
    }

    const submit:SubmitHandler<FieldValues> = async (data) => {
        try {
            const response = await API.post(
                "/discipline", 
                { ...data, type: disciplineType },
                { headers: { 'Authorization': "Bearer " + token } }
            )

            competences.forEach(async (competence) => {
                await API.post(
                    "/competence", 
                    { ...competence, disciplineId: response.data.id }, 
                    { headers: { 'Authorization': "Bearer " + token } }
                )
            })

            disciplineForm.reset()
            competenceForm.resetField("name")
            competenceForm.resetField("weight")
            competenceForm.resetField("description")
            setCompetences([])
            toast.success("Disciplina criada!")
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response!.data.message || "Something went wrong.")
        }
    }

    return (
        <>
            <Sidebar pageName="Cadastrar Disciplina">
                <Container component="form" onSubmit={disciplineForm.handleSubmit(submit)} maxWidth="xl" sx={{ display: 'flex', flexDirection: "column", gap: 5, paddingBottom: 15 }}>
                    <Typography variant="h4">Cadastrar Disciplina</Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                            <TextField
                                color="secondary"
                                id="demo-helper-text-aligned"
                                label="Nome da disciplina"
                                fullWidth
                                sx={{mb: 2}}
                                { ...disciplineForm.register("name") }
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                            <TextField
                                color="secondary"
                                id="demo-helper-text-aligned"
                                label="Carga Horária"
                                fullWidth
                                sx={{mb: 2}}
                                { ...disciplineForm.register("workload") }
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                            <FormControl fullWidth>
                                <InputLabel id="type-select-label" sx={{ backgroundColor: "white" }}>Tipo</InputLabel>
                                <Select 
                                    labelId="type-select-label"
                                    value={disciplineType}
                                    onChange={(e) => { setDisciplineType(e.target.value as string) }}
                                >
                                    <MenuItem value="TI">T.I.</MenuItem>
                                    <MenuItem value="MECHATRONIC">Mecatrônica</MenuItem>
                                    <MenuItem value="ADMINISTRATIVE">Administração</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                            <TextField
                                color="secondary"
                                id="demo-helper-text-aligned"
                                label="Descrição"
                                fullWidth
                                multiline
                                sx={{mb: 2}}
                                { ...disciplineForm.register("description") }
                            />
                        </Grid>
                        
                    </Grid>

                    <Typography variant="h5">Adicionar Competências</Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                color="secondary"
                                id="competency-field"
                                label="Nome"
                                fullWidth
                                autoComplete="off"
                                { ...competenceForm.register("name") }
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                color="secondary"
                                id="weight-field"
                                label="Peso"
                                autoComplete="off"
                                fullWidth
                                { ...competenceForm.register("weight") }
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                            <TextField
                                color="secondary"
                                id="description-field"
                                label="Descrição"
                                fullWidth
                                multiline
                                { ...competenceForm.register("description") }
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                            <Button variant="contained" onClick={handleAddItem} sx={{ margin: "auto", width: "100%" }}>Adicionar</Button>
                        </Grid>
                    </Grid>

                    <Typography>Competências Adicionadas:</Typography>
                    <Grid container spacing={1}>
                        {competences.map((item, index) => (
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={index} sx={{ position: 'relative' }}>
                                <Stack sx={{ padding: 2, border: "1px solid lightgrey", borderRadius: 3 }} gap={1}>
                                    <Typography variant="h5">{item.name}</Typography>
                                    <Typography marginLeft={1} variant="body1">{item.description}</Typography>
                                    <Typography marginLeft={1} variant="h6">Peso: {item.weight}</Typography>
                                </Stack>
                                <IconButton onClick={() => handleRemoveItem(index)} sx={{ position: 'absolute', top: '10px', right: '10px' }}>
                                    <HighlightOffRoundedIcon/>
                                </IconButton>
                            </Grid>
                        ))}
                    </Grid>

                    <Button variant="contained" color="success" fullWidth sx={{ mt: 5, p: 1.5 }} type="submit">Cadastrar</Button>
                </Container>
            </Sidebar>
        </>
    );
}
