import { Stack, IconButton, Typography } from "@mui/material";
import { Add as AddIcon } from '@mui/icons-material';
import Sidebar from "../../../components/Sidebar";
import InstructorFormModal from './components/InstructorFormModal';
import { useState } from "react";


export default function ListInstructor() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
