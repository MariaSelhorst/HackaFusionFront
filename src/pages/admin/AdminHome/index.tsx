import { Box, Grid, Stack, Typography, Modal, FormControl, InputLabel, Select, MenuItem, Button, Accordion, AccordionSummary, AccordionDetails, } from "@mui/material";
import Sidebar from "../../../components/Sidebar";
import CardLink from "../../../components/CardLink";
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function getRandomColor(): string {
    const colors = ['#ff8064', '#c594f8', '#8dd0e9', '#ffeea1','#7fcf7f' ]; 
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

export default function AdminHome() {

    return (
        <Sidebar name="Home">
            <Stack alignItems="center" justifyContent="center">
                <Grid container spacing={3} sx={{ maxWidth: 1600 }} justifyContent="center" paddingTop={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <CardLink link="create-class" title="Criar Turma" icon={<CreateTwoToneIcon sx={{ fontSize: '2.2em', color: 'white' }} />} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <CardLink link="/calendar" title="Calendário" icon={<CalendarTodayTwoToneIcon sx={{ fontSize: '2.2em', color: 'white' }} />} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                        <CardLink link="instructors" title="Instrutores" icon={<PeopleAltTwoToneIcon sx={{ fontSize: '2.2em', color: 'white' }} />} />
                    </Grid>
                </Grid>
            </Stack>
            <Box>
                <Typography variant="h5"
                    textAlign="center"
                    color={"#757575"}>
                    Fórum perguntas e respostas
                </Typography>
            </Box>
            <Box margin={3}>
                <Accordion>
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
                            sx={{ border: `2px solid ${getRandomColor()}`}}
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
                            sx={{ border:`2px solid ${getRandomColor()}`}}>
                            @DonathanRam - Um trigger de exclusão em SQL Server é um mecanismo que executa automaticamente um conjunto de ações quando um registro é removido de uma tabela.  Isso é útil para manter um registro das operações.
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
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
                            sx={{ border:`2px solid ${getRandomColor()}` }}
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