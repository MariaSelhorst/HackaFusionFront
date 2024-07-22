import { Box, Container, Stack, Typography } from "@mui/material"
import Sidebar from "../../../components/Sidebar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../providers/UserContext"
import { ICalendarEvent } from "../../../interface/calendar"
import { Calendar, Divider } from "rsuite"
import { AxiosError } from "axios"
import { toast } from "react-toastify"
import API from "../../../service/API"
import { dateToString } from "../../../utils/date"

export default function StudentCalendar() {

    const { user, token } = useContext(UserContext)
    const [events, setEvents] = useState<ICalendarEvent[]>([])
    const [currentEvents, setCurrentEvents] = useState<ICalendarEvent[]>([])
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        const getEvents = async () => {
            try {
                const response = await API.get(
                    `/calendar/year/${date.getFullYear()}/month/${date.getMonth() + 1}/gang/${user?.studentGang!.id}`,
                    { headers: { 'Authorization': token } }
                )
                setEvents(response.data)
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        }
        getEvents()
    }, [date])

    return(
        <Sidebar pageName="Calendário">
            <Container sx={{ minHeight: "60vh", display: 'flex', flexDirection: 'column', gap: 5 }}>

                <Calendar 
                    value={date}
                    onMonthChange={(date) => { setDate(date) }}
                    onChange={(date) => { setCurrentEvents(events.filter(event => event.date == dateToString(date))) }}
                    bordered
                    renderCell={(date) => 
                        <Stack>
                            {
                                events
                                .filter(event => event.date == dateToString(date))
                                .map(current => <Typography fontWeight={500}>{current.title}</Typography>)
                            }
                        </Stack>
                    }
                />

                <Stack spacing={2}>
                    {
                        currentEvents.length > 0 ?
                        currentEvents.map(event => 
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

            </Container>
        </Sidebar>
    )
}

