import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material"
import Sidebar from "../../../components/Sidebar"
import { HeaderRectangle, ListContainer } from "./styles"
import { useParams } from "react-router-dom"

export default function ClassManagement() {
    const { id } = useParams();

    return (
        <>
            <Sidebar name="Nome da turma">
                <Grid container spacing={20} paddingLeft={10} paddingRight={10} >
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

                                <Button color="inherit">
                                    <span className="material-symbols-outlined" style={{fontSize: "60px", opacity: "50%"}}>add_circle</span>
                                </Button>
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
            </Sidebar>
        </>
    )
} 