import { Stack, IconButton, Typography } from "@mui/material";
import { Add as AddIcon } from '@mui/icons-material';
import Sidebar from "../../../components/Sidebar";


export default function ListCourses() {

    return (
        <>
            <Sidebar name="Disciplinas">
                <Stack>
                    <Stack flexDirection="row" gap={2}>
                        <Typography variant='h4'>Disciplinas</Typography>
                        <IconButton color="primary"><AddIcon/></IconButton>
                    </Stack>

                    {/* <DataGrid

                    >

                    </DataGrid> */}

                </Stack>
            </Sidebar>
        </>
    );
}
