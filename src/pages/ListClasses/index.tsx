import { FormControl, InputLabel, Select, Stack, Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar";

export default function ListClasses() {
    return (
        <Sidebar name="Class list">
            <Stack flexDirection={"row"} justifyContent={"center"}>
                <Typography variant="h2">Lista de Turmas</Typography>
                <FormControl>
                    <InputLabel id="type-select-label">Type</InputLabel>
                    <Select labelId="type-select-label">

                    </Select>
                </FormControl>
            </Stack>
        </Sidebar>
    )
}