import { Box, Container, IconButton, Stack, Typography } from "@mui/material"
import Sidebar from "../../../components/Sidebar"
import { Calendar } from "rsuite"
import { dateToString } from "../../../utils/date"
import { ICalendarEvent } from "../../../interface/calendar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../providers/UserContext"
import { toast } from "react-toastify"
import { AxiosError } from "axios"
import API from "../../../service/API"
import EventsDetailed from "./components/EventsDetailed"
import CreateEventModal from "./components/CreateEventModal"
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const CalendarManagement = () => {

    const { token } = useContext(UserContext)
    const [events, setEvents] = useState<ICalendarEvent[]>([])
    const [currentEvents, setCurrentEvents] = useState<ICalendarEvent[]>([])
    const [date, setDate] = useState<Date>(new Date())
    const [modalOpen, setModalOpen] = useState(false)
    const [render, setRender] = useState(false)

    const handleCloseModal = () => setModalOpen(false)

    useEffect(() => {
        const getEvents = async () => {
            try {
                const response = await API.get(
                    `/calendar/year/${date.getFullYear()}/month/${date.getMonth() + 1}`,
                    { headers: { 'Authorization': token } }
                )
                setEvents(response.data)

            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        }
        getEvents()
    }, [date, modalOpen, render])

    return(
        <Sidebar pageName="Calendário">

            <Container sx={{ minHeight: "60vh", display: 'flex', flexDirection: 'column', gap: 5, paddingBottom: 5 }}>
                <CreateEventModal open={modalOpen} onClose={handleCloseModal} />

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
                <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                    <Typography variant="h4">Adicionar Evento</Typography>
                    <IconButton onClick={() => setModalOpen(true)}>
                        <AddCircleOutlineOutlinedIcon fontSize="large"/>
                    </IconButton>
                </Box>

                <EventsDetailed events={currentEvents} reRender={() => { setRender(prev => !prev) }}/>
            </Container>
        </Sidebar>
    )
}

export default CalendarManagement