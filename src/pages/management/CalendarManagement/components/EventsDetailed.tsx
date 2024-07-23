import { Box, Button, Divider, IconButton, Modal, Paper, Stack, TextField, Typography } from "@mui/material";
import { ICalendarEvent } from "../../../../interface/calendar";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useContext, useState } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import API from "../../../../service/API";
import { UserContext } from "../../../../providers/UserContext";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface IEventsDetailedProps {
    events: ICalendarEvent[];
    reRender: () => void
}

const EventsDetailed = ({ events, reRender }:IEventsDetailedProps) => {
    
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [currentEvent, setCurrentEvent] = useState<ICalendarEvent>()
    const { token } = useContext(UserContext)
    const { register, handleSubmit, setValue } = useForm()

    const handleOpenEdit = () => {
        setEditModalOpen(true)
        if(currentEvent) {
            setValue("title", currentEvent?.title)
            setValue("description", currentEvent?.description)
        }
    }

    const handleDelete = async () => {
        if(currentEvent) {
            try {
                await API.delete("/calendar/" + currentEvent.id, { headers: { 'Authorization': token } })
                toast.success("Esse evento será deletado.")
                setDeleteModalOpen(false)
                reRender()
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        }
    }

    const submitEdit:SubmitHandler<FieldValues> = async (data) => {
        if(currentEvent) {
            try {
                await API.patch("/calendar/" + currentEvent.id, data, { headers: { 'Authorization': token } })
                toast.success("Evento salvo!")
                setEditModalOpen(false)
                reRender()
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        }
    }
    
    return(
        <Stack spacing={2}>
            <Modal
                open={deleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
            >
                <Stack component={Paper} gap={2} sx={{ width: "95%", maxWidth: "300px", margin: "20vh auto", padding: 3 }}>
                    <Typography variant="body1">Tem certeza que deseja deletar esse evento?</Typography>
                    <Button onClick={handleDelete} variant="contained" color="error" sx={{ alignSelf: 'end' }}>Deletar</Button>
                </Stack>
            </Modal>
            
            <Modal
                open={editModalOpen}
                onClose={() => setEditModalOpen(false)}
            >
                <Box component={Paper} sx={{ width: "95%", maxWidth: "300px", margin: "20vh auto", padding: 3 }}>
                    <Stack component="form" gap={2} onSubmit={handleSubmit(submitEdit)}>
                        <Typography variant="body1">Editar Evento</Typography>
                        <TextField {...register("title")} label="Título"/>
                        <TextField {...register("description")} label="Descrição" multiline/>
                        <Button variant="contained" sx={{ alignSelf: 'end' }} type="submit">Salvar</Button>
                    </Stack>
                </Box>
            </Modal>

            {
                events.length > 0 ?
                events.map(event => 
                    <Stack sx={{ padding: 4, position: 'relative' }} gap={1}>
                        <Typography variant="h5" fontWeight={600}>{event.title}</Typography>
                        <Typography marginLeft={3} variant="body1" fontWeight={500}>{event.description}</Typography>
                        <Typography marginLeft={3} variant="body1">Turma: {event.studentGang.name}</Typography>
                        <Typography marginLeft={3} variant="body1">Responsável: {event.user.fullname}</Typography>
                        <Divider/>

                        <Box sx={{ position: 'absolute', top: '15px', right: '30px' }}>
                            <IconButton onClick={() => { 
                                setCurrentEvent(event)
                                handleOpenEdit()
                            }}>
                                <EditIcon/>
                            </IconButton>
                            <IconButton onClick={() => { 
                                setCurrentEvent(event)
                                setDeleteModalOpen(true)
                            }}>
                                <DeleteIcon/>
                            </IconButton>
                        </Box>
                    </Stack>
                ) : 
                <Box>
                    <Typography variant="h5">Nenhum evento nessa data</Typography>
                </Box>
            }
        </Stack>
    )
}


export default EventsDetailed