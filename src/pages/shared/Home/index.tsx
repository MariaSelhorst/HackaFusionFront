import { Avatar, Box, Button, Container, Divider, Stack, TextField, Typography } from "@mui/material"
import Sidebar from "../../../components/Sidebar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../providers/UserContext"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { stringToColor } from "../../../utils/color"
import { AxiosError } from "axios"
import { toast } from "react-toastify"
import API from "../../../service/API"
import { IQuestion } from "../../../interface/questions"
import QuestionBox from "./components/QuestionBox"

const Home = () => {

    const { user, token } = useContext(UserContext)
    const { register, handleSubmit, reset } = useForm()
    const [questions, setQuestions] = useState<IQuestion[]>([])
    const [render, setRender] = useState(false)

    const reRender = () => setRender(prev => !prev)

    const submitNewQuestion:SubmitHandler<FieldValues> = async (data) => {
        try {
            await API.post("/question", { ...data, userId: user?.id }, { headers: { 'Authorization': "Bearer " + token } })
            reset()
            reRender()
            toast.success("Pergunta enviada!")
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response!.data.message || "Something went wrong.")
        }
    }

    useEffect(() => {
        const getQuestions = async () => {
            try {
                const response = await API.get("question", { headers: { 'Authorization': "Bearer " + token } })
                setQuestions(response.data)
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        }
        getQuestions()
    }, [render])
    
    return(
        <Sidebar pageName="Home">
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', gap: 3, paddingBottom: 20 }}>
                <Typography variant="h3" textAlign="center">Bem-vindo ao seu ambiente de aprendizado!</Typography>
                <Divider/>
            
                <Typography variant="h4" marginTop={5} textAlign="center">Fórum</Typography>
                <Typography variant="body1" fontSize="1.3rem" maxWidth={700} margin="auto">
                    Precisa de ajuda? Código bugou? VS Code travado? PC pegando fogo?🔥 
                    Não importa o problema, chama no fórum que alguém já passou por isso e pode te ajudar!
                </Typography>
                <Divider/>
                
                <Container maxWidth="md">
                    <Box
                        component="form"
                        onSubmit={handleSubmit(submitNewQuestion)} 
                        sx={{ mt: 5, display: 'flex', flexDirection: 'column', gap: 2, border: "1px solid lightgrey", borderRadius: 4, p: 4 }}
                    >
                        <Typography variant="body1">Problemas? Conversa com a gente!</Typography>
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                            <Avatar 
                                sx={{ backgroundColor: stringToColor(user!.fullname), width: "60px", height: "60px" }}
                                children={`${user!.fullname.split(' ')[0][0]}${user!.fullname.split(' ')[1][0]}`.toUpperCase()}
                            />
                            <TextField
                                fullWidth
                                variant="standard"
                                label="Título"
                                {...register("title")}
                            />
                        </Box>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="Descreva o problema"
                            multiline
                            {...register("description")}
                        />
                        <Button sx={{ alignSelf: 'end' }} variant="contained" type="submit">Enviar</Button>
                    </Box>

                    <Typography variant="h5" marginTop={10} textAlign="center">Ajude seus companheiros com o problema deles também!</Typography>

                    <Stack component="ul" gap={15} marginTop={20}>
                        {questions.map((question, index) => (
                            <Stack component="li" key={index} gap={3}>
                                <QuestionBox question={question}/>
                                <Divider sx={{ marginTop: 5 }}/>
                            </Stack>
                        ))}
                    </Stack>
                </Container>
            </Container>
        </Sidebar>
    )
}

export default Home