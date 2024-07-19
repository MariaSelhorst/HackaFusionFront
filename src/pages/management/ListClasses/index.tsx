import { Box, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import Sidebar from "../../../components/Sidebar";
import { useContext, useEffect, useState } from "react";
import { IStudentGang } from "../../../interface/studentGang";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import API from "../../../service/API";
import { UserContext } from "../../../providers/UserContext";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


export default function ListClasses() {

    const [filter, setFilter] = useState("")
    const [gangs, setGangs] = useState<IStudentGang[]>([])
    const { token } = useContext(UserContext)

    const columns:GridColDef[] = [
        { field: "id", headerName: "ID", flex: 0.1, sortable: false },
        { field: "name", headerName: "Nome", flex: 0.4, sortable: false },
        { field: "mainDisciplineType", headerName: "Tipo da Turma", flex: 0.4, sortable: false },
        { field: "Detalhes", renderCell: (params) => <Link to={params.row.id.toString()}><ArrowForwardIosOutlinedIcon/></Link> }
    ]


    useEffect(() => {
        const getGangs = async () => {
            let path = "/gang"
            if(filter.length > 0) path += "/mainDiscipline/" + filter

            try {
                const response = await API.get( path, { headers: { 'Authorization': "Bearer " + token } })
                setGangs(response.data)
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        }
        getGangs()
    }, [filter])


    return (
        <Sidebar pageName="Class list">
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
                <Typography variant="h3">Lista de Turmas</Typography>
                <Box minWidth={100} width={150}>
                    <FormControl fullWidth>
                        <InputLabel id="type-select-label" sx={{ backgroundColor: "white" }}>Type</InputLabel>
                        <Select 
                            labelId="type-select-label"
                            value={filter}
                            onChange={(e) => { setFilter(e.target.value as string) }}
                        >
                            <MenuItem value="">Todas</MenuItem>
                            <MenuItem value="TI">T.I.</MenuItem>
                            <MenuItem value="MECHATRONIC">Mecatrônica</MenuItem>
                            <MenuItem value="ADMINISTRATIVE">Administração</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
            <Stack alignItems={"center"} marginTop={"60px"} minHeight="50vh">
                <DataGrid
                    columns={columns}
                    rows={gangs}
                    rowSelection={false}
                    hideFooter
                    disableColumnFilter
                    sx={{ width: "100%", maxWidth: "1000px" }}
                />
            </Stack>
        </Sidebar>
    )
}