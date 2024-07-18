import { Box, Container, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import Sidebar from "../../../components/Sidebar";
import InfoList, { TableInfo } from "../../../components/InfoList";
import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import ClassDataGrid from "./components/ClassDataGrid";


export default function ListClasses() {
    const [filter, setFilter] = useState("")

    const deleteHandler = (value: number) => {
        alert(value);
    }

    return (
        <Sidebar name="Class list">
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
            
            <Stack alignItems={"center"} marginTop={"60px"}>
                <Container>
                    <ClassDataGrid deleteOnClick={deleteHandler}/>
                </Container>
            </Stack>
        </Sidebar>
    )
}