import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material"
import Sidebar from "../../../components/Sidebar"
import { HeaderRectangle, StyledLink } from "./styles"
import { Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { IUser } from "../../../interface/user";
import { IDiscipline } from "../../../interface/discipline";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import API from "../../../service/API";
import { UserContext } from "../../../providers/UserContext";
import { IStudentGang } from "../../../interface/studentGang";
import AddDisciplineModal from "./components/AddDisciplineModal";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function ClassManagement() {

    const { id } = useParams()
    const { token } = useContext(UserContext)
    const [disciplines, setDisciplines] = useState<IDiscipline[]>([])
    const [students, setStudents] = useState<IUser[]>([])
    const [gang, setGang] = useState<IStudentGang>()
    const [modalOpen, setModalOpen] = useState(false)

    const generateButton = (userId: number) => {
        return (
            <StyledLink to={`student/${userId}`}>
                <ChevronRightIcon/>
            </StyledLink>
        )
    }

    const studentColumns:GridColDef[] = [
        { field: "id", headerName: "ID", flex: 0.05, sortable: false, resizable: false },
        { field: "fullname", headerName: "Nome Completo", flex: 0.2, sortable: false, resizable: false },
        { field: "email", headerName: "Email", flex: 0.2, sortable: false, resizable: false },
        { field: "link", headerName: "", flex: 0.2, sortable: false, resizable: false, display: "flex", renderCell: (params) => generateButton(params.row.id), align: "right"},
    ]
    const disciplineColumns:GridColDef[] = [
        { field: "id", headerName: "ID", flex: 0.05, sortable: false, resizable: false },
        { field: "name", headerName: "Nome", flex: 0.2, sortable: false, resizable: false },
        { field: "workload", headerName: "Carga Horária", flex: 0.2, sortable: false, resizable: false },
        { field: "description", headerName: "Descrição", flex: 0.5, sortable: false, resizable: false },
    ]

    useEffect(() => {
        const getDisciplines = async () => {
            try {
                const response = await API.get("/discipline/gang/" + id, { headers: { 'Authorization': "Bearer " + token } })
                setDisciplines(response.data)
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        }
        getDisciplines()
    }, [modalOpen])

    useEffect(() => {
        const getStudents = async () => {
            try {
                const response = await API.get("/gang/students/" + id, { headers: { 'Authorization': "Bearer " + token } })
                setStudents(response.data)
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        }
        getStudents()
    }, [])

    useEffect(() => {
        const getGang = async () => {
            try {
                const response = await API.get("/gang/" + id, { headers: { 'Authorization': "Bearer " + token } })
                setGang(response.data)
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        }
        getGang()
    }, [])

    return (
        <>
            <AddDisciplineModal open={modalOpen} handleClose={() => { setModalOpen(false) }}/>
            <Sidebar pageName={gang?.name || ""}>
                <Container maxWidth="lg">
                    <Grid container spacing={3} maxWidth="100%">
                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
                            <Box minHeight="30vh" display="flex" flexDirection="column" gap={3}>
                                <HeaderRectangle flexDirection={"row"} justifyContent={"flex-start"} gap={"20px"} padding={3} alignItems="center">
                                    <span className="material-symbols-outlined" style={{fontSize: "70px"}}>groups</span>
                                    <Typography variant="h4">Alunos</Typography>
                                </HeaderRectangle>

                                <DataGrid
                                    columns={studentColumns}
                                    rows={students}
                                    rowSelection={false}
                                    hideFooter
                                    disableColumnFilter
                                    sx={{ width: "100%", maxWidth: "1000px" }}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Box minHeight="30vh" display="flex" flexDirection="column" gap={3}>
                                <HeaderRectangle flexDirection={"row"} justifyContent={"flex-start"} gap={"20px"} padding={3} alignItems="center">
                                    <span className="material-symbols-outlined" style={{fontSize: "70px"}}>description</span>
                                    <Typography variant="h4">Disciplinas</Typography>
                                    <IconButton onClick={() => setModalOpen(true)}><AddCircleOutlineOutlinedIcon fontSize="large"/></IconButton>
                                </HeaderRectangle>

                                <DataGrid
                                    columns={disciplineColumns}
                                    rows={disciplines}
                                    rowSelection={false}
                                    hideFooter
                                    disableColumnFilter
                                    sx={{ width: "100%", maxWidth: "1000px" }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Sidebar>
        </>
    )
} 