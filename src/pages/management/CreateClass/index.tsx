import { Button, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import Sidebar from "../../../components/Sidebar";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function CreateClass() {
    return (
        <>
            <Sidebar pageName="Adicionar Turma">
                <Stack maxWidth={"75%"} flexDirection={"column"} borderRadius={"20px"} bgcolor={"#ffffff"} gap={"20px"} sx={{ padding: "30px"}}>
                    <Box width={350}>
                        {/* AQUI BOY */}
                        <Typography variant="h4" marginBottom={"15px"}>Cadastro de turmas</Typography>
                        <TextField
                            color="secondary"
                            id="demo-helper-text-aligned"
                            label="Nome da turma"
                            fullWidth
                        />
                    </Box>
                    <Grid container spacing={1}>
                        <Grid item xs={9}>
                            <TextField
                                color="secondary"
                                id="demo-helper-text-aligned"
                                label="Email alunos"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Stack alignItems={"center"} marginTop={"1vh"}>
                               <Button variant="contained" color="success" >Adicionar </Button>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Box>
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>andrey@gmail.com</TableCell>
                                        <TableCell>
                                            <IconButton>
                                                <HighlightOffRoundedIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>zago@gmail.com</TableCell>
                                        <TableCell>
                                            <IconButton>
                                                <HighlightOffRoundedIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>mariaselhorst@hotmail.com</TableCell>
                                        <TableCell>
                                            <IconButton>
                                                <HighlightOffRoundedIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
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
    )
}