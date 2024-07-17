import { Box, Divider, FormControl, InputLabel, Select, Stack, Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import InfoList, { TableInfo } from "../../components/InfoList";

const data:TableInfo[]  = [
    {data1: "TDS1", data2: "2000"},
    {data1: "TDS2", data2: "2020"},
    {data1: "TDS3", data2: "2040"}

]

export default function ListClasses() {
    return (
        <Sidebar name="Class list">
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
                <Typography variant="h3">Lista de Turmas</Typography>
                <Box minWidth={100} width={150}>
                    <FormControl fullWidth>
                        <InputLabel id="type-select-label">Type</InputLabel>
                        <Select labelId="type-select-label">
        
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
            
            <Stack alignItems={"center"} paddingTop={"60px"}>
                <InfoList firstColumn="Curso" secondColumn="Ano" data={data} width={"65%"}/>
            </Stack>
        </Sidebar>
    )
}