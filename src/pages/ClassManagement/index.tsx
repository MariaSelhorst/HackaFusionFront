import { Grid, Typography } from "@mui/material"
import { Header } from "../../styles/styles"
import Sidebar from "../../components/Sidebar"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { StudentButton, StudentButtonGroup, StudentButtonIconContainer, StudentButtonText } from "./styles"

export default function ClassManagement() {
    return (
        <>
            <Sidebar name="Nome da turma">
                <Grid>
                    <StudentButtonGroup>
                        <StudentButton>
                            <StudentButtonIconContainer>
                                <PeopleAltIcon sx={{
                                    transform: "scale(2)",
                                }}></PeopleAltIcon>
                            </StudentButtonIconContainer>
                            <StudentButtonText>
                                Alunos
                            </StudentButtonText>
                        </StudentButton>
                        <StudentButton>
                            <StudentButtonIconContainer>
                                <TextSnippetIcon sx={{
                                    transform: "scale(2)",
                                }}></TextSnippetIcon>
                            </StudentButtonIconContainer>
                            <StudentButtonText>
                                Disciplinas
                            </StudentButtonText>
                        </StudentButton>
                    </StudentButtonGroup>
                </Grid>
            </Sidebar>
        </>
    )
} 