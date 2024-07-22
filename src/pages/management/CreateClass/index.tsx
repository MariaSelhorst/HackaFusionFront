import { Button, Grid, MenuItem, Select, Stack, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
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
            toast.success("Class created.")
            students.forEach(async (student) => {
                await API.post(
                    "/register/pre",
                    { email: student, role: 2, studentGangId: response.data.id },
                    { headers: { 'Authorization': "Bearer " + token } }
                )
                
            })
            
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response!.data.message || "Something went wrong.")
        }
    }

    return (
        <>
            <Sidebar pageName="Adicionar Turma">
                <Stack maxWidth={"75%"} flexDirection={"column"} borderRadius={"20px"} bgcolor={"#ffffff"} gap={5} sx={{ padding: "30px"}}>
                    <Stack maxWidth={400} gap={2}>
                        <Typography variant="h4" marginBottom={"15px"}>Cadastro de turmas</Typography>
                        <TextField
                            color="secondary"
                            id="demo-helper-text-aligned"
                            label="Nome da turma"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Select
                                labelId="type-select-label"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                            <MenuItem value="TI">T.I.</MenuItem>
                            <MenuItem value="MECHATRONIC">Mecatrônica</MenuItem>
                            <MenuItem value="ADMINISTRATIVE">Administração</MenuItem>
                        </Select>
                    </Stack>
                    <Grid container spacing={1}>
                        <Grid item xs={9}>
                            <TextField
                                color="secondary"
                                id="demo-helper-text-aligned"
                                label="Email alunos"
                                fullWidth
                                value={currentEmail}
                                onChange={(e) => setCurrentEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Stack alignItems={"center"} marginTop={"1vh"}>
                                <Button
                                    variant="contained"
                                    color="success" 
                                    onClick={() => {
                                        setStudents(prev => [...prev, currentEmail])
                                        setCurrentEmail("")
                                    }}
                                >Adicionar</Button>
                            </Stack>
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
                    <Button variant="contained" fullWidth onClick={submit}>Cadastrar</Button>
                </Stack>
            </Sidebar>
        </>
    )
}