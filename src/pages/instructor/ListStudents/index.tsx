import { Grid, Stack, IconButton } from "@mui/material";
import { Add as AddIcon } from '@mui/icons-material';
import { useState } from "react";
import InfoList, { TableInfo } from "../../../components/InfoList";
import Sidebar from "../../../components/Sidebar";
import { InstructorContainer } from "../../admin/ListInstructor/styles";
import InstructorFormModal from "./components/IntructorFormModal";


const data:TableInfo[]  = [
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
    {data1: "Andrey", data2: "ETS"},
]


export default function ListStudents() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Sidebar name="Alunos">
                <Grid container justifyContent="center">
                    <InstructorContainer>
                        <IconButton color="primary" onClick={handleOpen}>
                            <AddIcon />
                        </IconButton>
                    </InstructorContainer>
                </Grid>
                <Stack alignItems={"center"} marginTop={5}>
                    <InfoList firstColumn='Nome' secondColumn='Turma' data={data}/>
                </Stack>
            </Sidebar>
            <InstructorFormModal open={open} handleClose={handleClose} />
        </>
    );
}
