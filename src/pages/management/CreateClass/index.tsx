import { Button, Container, Grid, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import Sidebar from "../../../components/Sidebar";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext, useState } from "react";
import API from "../../../service/API";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../../providers/UserContext";


export default function CreateClass() {

    const [students, setStudents] = useState<string[]>([])
    const [name, setName] = useState("")
    const [type, setType] = useState("TI")
    const [currentEmail, setCurrentEmail] = useState("")
    const { token } = useContext(UserContext)

    const submit = async () => {
        try {
            const response = await API.post(
                "/gang",
                { name: name, mainDisciplineType: type },
                { headers: { 'Authorization': "Bearer " + token } }
            )
            students.forEach(async (student) => {
                await API.post(
                    "/register/pre",
                    { email: student, role: 2, studentGangId: response.data.id },
                    { headers: { 'Authorization': "Bearer " + token } }
                )
            })
            toast.success("Turma Criada com sucesso!")
            setCurrentEmail("")
            setName("")
            setStudents([])
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response!.data.message || "Something went wrong.")
        }
    }

    return (
        <>
            <Sidebar pageName="Adicionar Turma">
                <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', gap: 3, paddingBottom: 5 }}>
                    <Typography variant="h4" marginBottom={"15px"}>Cadastro de turmas</Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                            <TextField
                                color="secondary"
                                id="demo-helper-text-aligned"
                                label="Nome da turma"
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                            <Select
                                fullWidth
                                labelId="type-select-label"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <MenuItem value="TI">T.I.</MenuItem>
                                <MenuItem value="MECHATRONIC">Mecatrônica</MenuItem>
                                <MenuItem value="ADMINISTRATIVE">Administração</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={10} md={10} lg={6} xl={4}>
                            <TextField
                                color="secondary"
                                id="demo-helper-text-aligned"
                                label="Email alunos"
                                fullWidth
                                value={currentEmail}
                                onChange={(e) => setCurrentEmail(e.target.value)}
                                onKeyDown={(e) => {
                                    if(e.key === "Enter") {
                                        setStudents(prev => [...prev, currentEmail])
                                        setCurrentEmail("")
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="success" 
                                onClick={() => {
                                    setStudents(prev => [...prev, currentEmail])
                                    setCurrentEmail("")
                                }}
                            >Adicionar</Button>
                        </Grid>
                    </Grid>

                    <Box>
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    {
                                        students.map((student, index) => 
                                            <TableRow key={index}>
                                                <TableCell>{student}</TableCell>
                                                <TableCell>
                                                    <IconButton
                                                        onClick={() => setStudents(prev => prev.filter(x => x != student))}
                                                    ><HighlightOffRoundedIcon/></IconButton>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Button variant="contained" fullWidth onClick={submit} disabled={students.length == 0}>Cadastrar</Button>
                </Container>
            </Sidebar>
        </>
    )
}