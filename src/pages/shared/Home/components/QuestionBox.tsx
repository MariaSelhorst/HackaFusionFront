import { Avatar, Box, IconButton, Stack, TextField, Typography } from "@mui/material"
import { IAnswer, IQuestion } from "../../../../interface/questions"
import { stringToColor } from "../../../../utils/color";
import { useContext, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import API from "../../../../service/API";
import { UserContext } from "../../../../providers/UserContext";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


interface IQuestionBoxProps {
    question: IQuestion;
}

const QuestionBox = ({ question }:IQuestionBoxProps) => {

    const [answers, setAnswers] = useState<IAnswer[]>([])
    const { token, user } = useContext(UserContext)
    const [newAnswer, setNewAnswer] = useState("")
    const [render, setRender] = useState(false)

    useEffect(() => {
        const getAnswers = async () => {
            try {
                const response = await API.get("/answer/question/"+question.questionId, { headers: { 'Authorization': "Bearer " + token } })
                setAnswers(response.data)
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        }
        getAnswers()
    }, [render])

    const submitNewAnswer = async () => {
        try {
            await API.post(
                "/answer", 
                { description: newAnswer, questionId: question.questionId, userId: user?.id }, 
                { headers: { 'Authorization': "Bearer " + token } }
            )
            setNewAnswer("")
            setRender(prev => !prev)
        } catch (e) {
            if(e instanceof AxiosError)
                toast.error(e.response!.data.message || "Something went wrong.")
        }
    }

    return(
        <Stack gap={2}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Avatar
                    sx={{ backgroundColor: stringToColor(question.user.fullname), width: "60px", height: "60px" }}
                    children={`${question.user.fullname.split(' ')[0][0]}${question.user.fullname.split(' ')[1][0]}`.toUpperCase()}
                />
                <Typography variant="h5">{question.title}</Typography>
            </Box>
            <Typography variant="body1" marginLeft={10}>{question.description}</Typography>

            {
                answers.length > 0 &&
                <Stack gap={3} marginTop={8}>
                    {answers.map((answer, index) => (
                        <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'center', marginLeft: 5 }}>
                            <Avatar
                                sx={{ backgroundColor: stringToColor(answer.user.fullname) }}
                                children={`${answer.user.fullname.split(' ')[0][0]}${answer.user.fullname.split(' ')[1][0]}`.toUpperCase()}
                            />
                            <Typography variant="body1">{answer.description}</Typography>
                        </Box>
                    ))}
                </Stack>
            }

            <Box 
                component="form"
                onSubmit={(e) => {
                    e.preventDefault()
                    submitNewAnswer()
                }}
                sx={{ display: 'flex', gap: 2, alignItems: 'center', marginLeft: 5, marginTop: 5 }}
            >
                <Avatar
                    sx={{ backgroundColor: stringToColor(user!.fullname) }}
                    children={`${user!.fullname.split(' ')[0][0]}${user!.fullname.split(' ')[1][0]}`.toUpperCase()}
                />
                <TextField
                    label="Resposta"
                    variant="standard"
                    value={newAnswer}
                    multiline
                    sx={{ width: "90%", maxWidth: 500 }}
                    onChange={(e) => setNewAnswer(e.target.value)}
                />
                <IconButton type="submit"><SendOutlinedIcon/></IconButton>
            </Box>
        </Stack>
    )
}

export default QuestionBox