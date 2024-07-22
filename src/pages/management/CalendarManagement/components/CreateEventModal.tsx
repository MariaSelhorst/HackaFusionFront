import { Box, Button, MenuItem, Modal, Paper, Select, Stack, TextField, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IStudentGang } from "../../../../interface/studentGang";
import { UserContext } from "../../../../providers/UserContext";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import API from "../../../../service/API";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface ICreateEventModalProps {
    open: boolean;
    onClose: () => void
}

const CreateEventModal = ({ open, onClose }:ICreateEventModalProps) => {

    const { register, handleSubmit } = useForm()
    const [gangs, setGangs] = useState<IStudentGang[]>([])
    const [gangId, setGangId] = useState("")
    const [date, setDate] = useState<Dayjs|null>(dayjs(new Date()))
    const { user, token } = useContext(UserContext)

    useEffect(() => {
        const getGangs = async () => {
            try {
                const response = await API.get("/gang", { headers: { 'Authorization': "Bearer " + token } })
                setGangs(response.data)
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        }
        getGangs()
    }, [])

    const submit:SubmitHandler<FieldValues> = async (data) => {
        try {
            await API.post(
                "/calendar",
                { ...data,  date: date?.format("YYYY-MM-DD"), studentGangId: Number(gangId), userEntityId: user?.id },
                { headers: { 'Authorization': "Bearer " + token } }
            )
            toast.success("Evento criado!")
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response!.data.message || "Something went wrong.")
        }
    }

    return(
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box component={Paper} sx={{ width: "95%", maxWidth: "500px", margin: "20vh auto", padding: 3 }}>
                <Typography marginBottom={5}>Criar Evento</Typography>
                <Stack component="form" gap={3} onSubmit={handleSubmit(submit)}>
                    <TextField
                        label="Título"
                        required
                        {...register("title")}
                    />
                    <TextField
                        label="Descrição"
                        required
                        {...register("description")}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Data"
                            value={date}
                            onChange={(date) => setDate(dayjs(date))}
                        />
                    </LocalizationProvider>
                    
                    <Select
                        value={gangId}
                        onChange={(e) => setGangId(e.target.value)}
                    >
                        { gangs.map(gang => <MenuItem value={gang.id}>{gang.name}</MenuItem>) }
                    </Select>

                    <Button variant="contained" sx={{ alignSelf: "end" }} type="submit">Salvar</Button>
                </Stack>
            </Box>
        </Modal>
    )
}

export default CreateEventModal