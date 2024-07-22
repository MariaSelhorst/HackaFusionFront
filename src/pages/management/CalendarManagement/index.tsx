import { Stack, Typography } from "@mui/material"
import Sidebar from "../../../components/Sidebar"

const CalendarManagement = () => {


    return(
        <>
            <Sidebar pageName="Calendário">
                <Stack>
                    <Stack flexDirection="row" gap={2}>
                        <Typography 
                        margin={2}
                        variant='h4'>Calendário</Typography>
                    </Stack>

                    

                </Stack>
            </Sidebar>
        </>
    )
}

export default CalendarManagement