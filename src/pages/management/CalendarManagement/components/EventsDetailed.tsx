import { Box, Divider, Stack, Typography } from "@mui/material";
import { ICalendarEvent } from "../../../../interface/calendar";

interface IEventsDetailedProps {
    events: ICalendarEvent[];
}

const EventsDetailed = ({ events }:IEventsDetailedProps) => {
    return(
        <Stack spacing={2}>
            {
                events.length > 0 ?
                events.map(event => 
                    <Box sx={{ padding: 4 }}>
                        <Typography variant="h5">{event.title}</Typography>
                        <Typography variant="body1">{event.description}</Typography>
                        <Divider/>
                    </Box>
                ) : 
                <Box>
                    <Typography variant="h5">Nenhum evento nessa data</Typography>
                </Box>
            }
        </Stack>
    )
}


export default EventsDetailed