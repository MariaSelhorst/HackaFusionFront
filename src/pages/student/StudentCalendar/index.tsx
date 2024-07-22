import { IconButton, Stack, Typography } from "@mui/material"
import Sidebar from "../../../components/Sidebar"

export default function StudentCalendar() {

    return (
        <>
            <Sidebar pageName="Calendário">
                <Stack>
                    <Stack flexDirection="row" gap={2}>
                        <Typography variant='h4'>Calendário</Typography>
                    </Stack>

                    {/* <DataGrid

                    >

                    </DataGrid> */}

                </Stack>
            </Sidebar>
        </>

    )
}

