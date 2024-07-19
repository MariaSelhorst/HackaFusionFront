import {Accordion,Typography, AccordionDetails, AccordionSummary, Box, Grid, Stack } from "@mui/material"
import Sidebar from "../../../components/Sidebar"
import CardLink from "../../../components/CardLink"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function getRandomColor(): string {
    const colors = ['#f3a98a', '#c594f8', '#8dd0e9', '#ffeea1', '#7fcf7f', '#dd83bc', '##5475db'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

const Home = () => {

    // const { user } = useContext(UserContext)

    return (
        <Sidebar pageName="Home">
            {/* <Stack alignItems="center" justifyContent="center">
                <Grid container spacing={2}>

                    {
                        user?.role != 'STUDENT' &&
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <CardLink link="/classes" title="Turmas" />
                        </Grid>
                    }

                </Grid>
            </Stack> */}
            <Box>
                <Typography variant="h5"
                    textAlign="center"
                    color={"#757575"}>
                    Fórum perguntas e respostas
                </Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" marginTop={3}>
                <Accordion sx={{ width: '100%', maxWidth: 1000, borderRadius: '20px', marginBottom: 2}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Como funciona um trigger de exclusão em SQL server?
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            height={150}
                            width={800}
                            display="flex"
                            alignItems="center"
                            p={2}
                            sx={{ borderRadius: '20px', border: `2px solid ${getRandomColor()}` }}
                        >
                            @VitoriaZago -
                            Quando um trigger AFTER DELETE é definido na tabela Produtos e um registro é excluído da tabela Produtos, o trigger captura o ProdutoID, a data e o usuário que realizou a exclusão.
                            Então, esses dados vão ser inseridos na tabela RegistroExclusoes, registrando o histórico de exclusões.

                        </Box>
                        <Box
                            height={150}
                            width={800}
                            my={2}
                            display="flex"
                            alignItems="center"
                            p={2}
                            sx={{ borderRadius: '20px', border: `2px solid ${getRandomColor()}` }}>
                            @DonathanRam - Um trigger de exclusão em SQL Server é um mecanismo que executa automaticamente um conjunto de ações quando um registro é removido de uma tabela.  Isso é útil para manter um registro das operações.
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ width: '100%', maxWidth: 1000, borderRadius: '20px', marginBottom: 2}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Como resolver o erro 403 em Java?
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            height={150}
                            width={800}
                            display="flex"
                            alignItems="center"
                            p={2}
                            sx={{ borderRadius: '20px', border: `2px solid ${getRandomColor()}` }}
                        >
                            @VitoriaZago -
                            1- Verifique e ajuste as permissões de acesso.
                            2- Confirme as configurações de segurança no servidor.
                            3- Analise logs para identificar a causa específica.
                            4- Revise e corrija mapeamentos de recursos na aplicação.


                        </Box>

                    </AccordionDetails>
                </Accordion>

            </Box>
        </Sidebar>
    )
}

export default Home