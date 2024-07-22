import {Accordion,Typography, AccordionDetails, AccordionSummary, Box } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IQuestion } from "../../interface/question";
import { useContext, useEffect, useState } from "react";
import { IAnswer } from "../../interface/answer";
import API from "../../service/API";
import { UserContext } from "../../providers/UserContext";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

function getRandomColor(): string {
    const colors = ['#f3a98a', '#c594f8', '#8dd0e9', '#ffeea1', '#7fcf7f', '#dd83bc', '##5475db'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

export default function({ questionId, title, description }: IQuestion) {

    const { token } = useContext(UserContext)
    const [answer, setAnswer] = useState<IAnswer[]>([])
    useEffect(() => {
    const getAnswer = async () => {
        try {
            const response = await API.get("answer/question/" + questionId, {
                headers: { 'Authorization': "Bearer " + token } })
                setAnswer(response.data)
            } catch (e) {

                if(e instanceof AxiosError)
                {
                    if (e.response!.status === 404)
                            return
                    
                    toast.error(e.response!.data.message || "Something went wrong.")
                }
            }
        }
        getAnswer();
    }, [])

    return(
        <Accordion sx={{ width: '100%', maxWidth: 1000, borderRadius: '20px', marginBottom: 2}}>

            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header">
                {title} {description}
            </AccordionSummary>


            <AccordionDetails>
                {answer.map(a => <>
                    <Box
                        height={150}
                        width={800}
                        display="flex"
                        alignItems="center"
                        p={2}
                        sx={{ borderRadius: '20px', border: `2px solid ${getRandomColor()}` }}>
                        {a.user.username} : 
                        {a.desciption}
                    </Box>
                </>)}
            </AccordionDetails>
    </Accordion>
    );
}