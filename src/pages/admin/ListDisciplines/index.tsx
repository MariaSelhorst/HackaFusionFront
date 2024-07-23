import { Stack, IconButton, Typography, Container } from "@mui/material";
import { Add as AddIcon } from '@mui/icons-material';
import Sidebar from "../../../components/Sidebar";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext, useEffect, useState } from "react";
import { IDiscipline } from "../../../interface/discipline";
import { UserContext } from "../../../providers/UserContext";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import API from "../../../service/API";


export default function ListDisciplines() {

    const columns:GridColDef[] = [
        { field: "id", headerName: "ID", flex: 0.05, sortable: false, resizable: false },
        { field: "name", headerName: "Nome", flex: 0.2, sortable: false, resizable: false },
        { field: "workload", headerName: "Carga Horária", flex: 0.15, sortable: false, resizable: false },
        { field: "description", headerName: "Descrição", flex: 0.5, sortable: false, resizable: false },
        { field: "type", headerName: "Tipo", flex: 0.15, sortable: false, resizable: false },
    ]

    const [disciplines, setDisciplines] = useState<IDiscipline[]>([])
    const { token } = useContext(UserContext)

    useEffect(() => {
        const getDisciplines = async () => {
            try {
                const response = await API.get("/discipline", { headers: { 'Authorization': "Bearer " + token } })
                setDisciplines(response.data)
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        }
        getDisciplines()
    }, [])

    return (
        <>
            <Sidebar pageName="Disciplinas">
                <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', gap: 6, minHeight: "70vh" }}>
                    <Stack flexDirection="row" gap={2}>
                        <Typography variant='h4'>Disciplinas</Typography>
                        <Link to="create">
                            <IconButton color="primary"><AddIcon/></IconButton>
                        </Link>
                    </Stack>

                    <DataGrid
                        columns={columns}
                        rows={disciplines}
                        rowSelection={false}
                        hideFooter
                        sx={{ width: "100%", maxWidth: "1000px", margin: "auto", minWidth: "600px" }}
                    >

                    </DataGrid>

                </Container>
            </Sidebar>
        </>
    );
}
