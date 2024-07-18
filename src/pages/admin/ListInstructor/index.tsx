import { Stack, IconButton, Box, Typography } from "@mui/material";
import { Add as AddIcon } from '@mui/icons-material';
import Sidebar from "../../../components/Sidebar";
import InstructorFormModal from './components/InstructorFormModal';
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";


export default function ListInstructor() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [instructors, setInstructors] = useState([])

    return (
        <>
            <Sidebar name="Instrutores">
                <Stack>
                    <Stack flexDirection="row" gap={2}>
                        <Typography variant='h4'>Instrutores</Typography>
                        <IconButton color="primary" onClick={handleOpen}><AddIcon/></IconButton>
                    </Stack>

                    {/* <DataGrid

                    >

                    </DataGrid> */}

                </Stack>
            </Sidebar>
            <InstructorFormModal open={open} handleClose={handleClose} />
        </>
    );
}
