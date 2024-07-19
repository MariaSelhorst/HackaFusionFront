import { Button, Container, Divider, Grid, Stack, Typography } from "@mui/material"
import Sidebar from "../../../components/Sidebar"
import { HeaderRectangle, ListContainer } from "./styles"
import { useParams } from "react-router-dom"
import AddDisciplineModal from "./components/AddDisciplineModal";

const disciplineList = [
    {id: 0, name: "aaaa"},
    {id: 1, name: "aaaa"},
    {id: 2, name: "aaaa"},
    {id: 3, name: "aaaa"},
    {id: 4, name: "aaaa"},
    {id: 5, name: "aaaa"},
]

export default function ClassManagement() {
    const { id } = useParams();

    return (
        <>
            <Sidebar pageName="Nome da turma">
                <Container maxWidth="lg">
                    <Grid container spacing={20}>
                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
                            <Stack>
                                <HeaderRectangle flexDirection={"row"} justifyContent={"flex-start"} gap={"20px"} padding={3}>
                                    <span className="material-symbols-outlined" style={{fontSize: "70px"}}>groups</span>
                                    <Typography fontSize={"50px"}>
                                        Alunos
                                    </Typography>
                                </HeaderRectangle>
                            </Stack>

                            <ListContainer marginTop={3} overflow={"auto"} maxHeight={"70vh"}>
                                <Typography padding={2} variant="h5">Student name</Typography>
                                <Divider />
                                <Typography padding={2} variant="h5">Student name</Typography>
                                <Divider />
                                <Typography padding={2} variant="h5">Student name</Typography>
                                <Divider />
                                <Typography padding={2} variant="h5">Student name</Typography>
                                <Divider />
                                <Typography padding={2} variant="h5">Student name</Typography>
                                <Divider />
                                <Typography padding={2} variant="h5">Student name</Typography>
                                <Divider />
                                <Typography padding={2} variant="h5">Student name</Typography>
                                <Divider />
                                <Typography padding={2} variant="h5">Student name</Typography>
                                <Divider />
                                <Typography padding={2} variant="h5">Student name</Typography>
                                <Divider />
                                <Typography padding={2} variant="h5">Student name</Typography>
                                <Divider />
                                <Typography padding={2} variant="h5">Student name</Typography>
                                <Divider />
                                <Typography padding={2} variant="h5">Student name</Typography>
                                
                            </ListContainer>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Stack>
                                <HeaderRectangle flexDirection={"row"} justifyContent={"space-between"} gap={"20px"} padding={3}>
                                    <Stack flexDirection={"row"}>
                                        <span className="material-symbols-outlined" style={{fontSize: "70px"}}>description</span>
                                        <Typography fontSize={"50px"}>
                                            Disciplinas
                                        </Typography>
                                    </Stack>

                                    <AddDisciplineModal disciplines={disciplineList}/>
                                </HeaderRectangle>
                            </Stack>

                            <ListContainer marginTop={3} overflow={"auto"} maxHeight={"70vh"}>
                                <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                    <Typography padding={2} variant="h5">Discipline</Typography>
                                    <Button color="error">
                                        <span className="material-symbols-outlined" style={{fontSize: "30px"}}>delete</span>
                                    </Button>
                                </Stack>
                                <Divider/>
                                <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                    <Typography padding={2} variant="h5">Discipline</Typography>
                                    <Button color="error">
                                        <span className="material-symbols-outlined" style={{fontSize: "30px"}}>delete</span>
                                    </Button>
                                </Stack>
                                <Divider/>
                                <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                    <Typography padding={2} variant="h5">Discipline</Typography>
                                    <Button color="error">
                                        <span className="material-symbols-outlined" style={{fontSize: "30px"}}>delete</span>
                                    </Button>
                                </Stack>
                            </ListContainer>
                        </Grid>
                    </Grid>
                </Container>
            </Sidebar>
        </>
    )
} 