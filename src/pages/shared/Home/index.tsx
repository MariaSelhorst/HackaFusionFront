import { Grid, Stack } from "@mui/material"
import Sidebar from "../../../components/Sidebar"
import CardLink from "../../../components/CardLink"
import { useContext, useState } from "react"
import { UserContext } from "../../../providers/UserContext"
import API from "../../../service/API";

import {Accordion,Typography, AccordionDetails, AccordionSummary, Box } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from "react";
import axios, { AxiosError } from "axios";
import { IQuestion } from "../../../interface/question"
import { toast } from "react-toastify"
import QuestionCard from "../../../components/QuestionCard"

function getRandomColor(): string {
    const colors = ['#f3a98a', '#c594f8', '#8dd0e9', '#ffeea1', '#7fcf7f', '#dd83bc', '##5475db'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
const Home = () => {

const { token } = useContext(UserContext)
const [ questions, setQuestions ] = useState<IQuestion[]>([])


useEffect(() => {
    const getAllQuestions = async () => {
        try {
            const response = await API.get("/question" , {
                headers: { 'Authorization': "Bearer " + token } })
                setQuestions(response.data)
            } catch (e) {
                if(e instanceof AxiosError)
                    toast.error(e.response!.data.message || "Something went wrong.")
            }
        }
    getAllQuestions()
    }, [])

    const { user } = useContext(UserContext)

    return(
        <Sidebar pageName="Home">
            <Stack alignItems="center" justifyContent="center">
                <Grid container spacing={2}>

                    {
                        user?.role != 'STUDENT' &&
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <CardLink link="/classes" title="Turmas"/>
                        </Grid>
                    }

                </Grid>
            </Stack>

            <Box>
                <Typography variant="h5"
                    textAlign="center"
                    color={"#757575"}>
                    Fórum perguntas e respostas
                </Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" marginTop={3}>
                {questions.map(q => <QuestionCard questionId={q.questionId} title={q.title} description={q.description} user={q.user}/>)}
            </Box>
        </Sidebar>
    )
}

export default Home