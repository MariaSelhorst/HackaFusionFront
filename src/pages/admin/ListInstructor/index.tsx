import { Stack, IconButton, Typography, Container } from "@mui/material";
import { Add as AddIcon } from '@mui/icons-material';
import Sidebar from "../../../components/Sidebar";
import InstructorFormModal from './components/InstructorFormModal';
import { useContext, useEffect, useState } from "react";
import { IUser } from "../../../interface/user";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import API from "../../../service/API";
import { UserContext } from "../../../providers/UserContext";


export default function ListInstructor() {

    const [open, setOpen] = useState(false);
    const { token } = useContext(UserContext)

    const [instructors, setInstructors] = useState<IUser[]>([])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const columns:GridColDef[] = [
        { field: "id", headerName: "ID", flex: 0.05, sortable: false, resizable: false },
        { field: "fullname", headerName: "Nome Completo", flex: 0.2, sortable: false, resizable: false },
        { field: "email", headerName: "Email", flex: 0.2, sortable: false, resizable: false },
    ]

    useEffect(() => {
        const getInstructors = async () => {
            try {
                const response = await API.get("/users/role/1", { headers: { 'Authorization': "Bearer " + token } })
                setInstructors(response.data)
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        }
        getInstructors()
    }, [])

    return (
        <>
            <Sidebar pageName="Instrutores">
                <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", gap: 3, minHeight: "70vh" }}>
                    <Stack flexDirection="row" gap={2}>
                        <Typography variant='h4'>Instrutores</Typography>
                        <IconButton color="primary" onClick={handleOpen}><AddIcon fontSize="large"/></IconButton>
                    </Stack>

                    <DataGrid
                        columns={columns}
                        rows={instructors}
                        rowSelection={false}
                        hideFooter
                        disableColumnFilter
                        sx={{ width: "100%", maxWidth: "1000px" }}
                    />

                </Container>
            </Sidebar>
            <InstructorFormModal open={open} handleClose={handleClose} />
        </>
    );
}
