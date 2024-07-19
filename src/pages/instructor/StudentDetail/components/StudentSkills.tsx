import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

export default function StudentSkills() {
    return (
        <Box margin={3}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Python
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        height={50}
                        width={350}
                        display="flex"
                        alignItems="center"
                        p={2}
                        sx={{ border: '2px solid grey' }}
                    >
                        Estruturas condicionais - APTO
                    </Box>
                    <Box
                        height={50}
                        width={350}
                        my={2}
                        display="flex"
                        alignItems="center"
                        p={2}
                        sx={{ border: '2px solid grey' }}>
                        Usar exceçoes - APTO
                    </Box>
                    <Box
                        height={50}
                        width={350}
                        my={2}
                        display="flex"
                        alignItems="center"
                        p={2}
                        sx={{ border: '2px solid grey' }}
                    >
                        Try catch - DESENVOLVIMENTO
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    SQL
                </AccordionSummary>
                <AccordionDetails>
                <Box
                        height={50}
                        width={350}
                        display="flex"
                        alignItems="center"
                        p={2}
                        sx={{ border: '2px solid grey' }}
                    >
                        Contrução de tabelas - APTO
                    </Box>
                    <Box
                        height={50}
                        width={350}
                        my={2}
                        display="flex"
                        alignItems="center"
                        p={2}
                        sx={{ border: '2px solid grey' }}>
                        Uso de foreign key - DESENVOLVIMENTO
                    </Box>
                    <Box
                        height={50}
                        width={350}
                        my={2}
                        display="flex"
                        alignItems="center"
                        p={2}
                        sx={{ border: '2px solid grey' }}
                    >
                        Trigger - INAPTO
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Java básico
                </AccordionSummary>
                <AccordionDetails>
                <Box
                        height={50}
                        width={350}
                        display="flex"
                        alignItems="center"
                        p={2}
                        sx={{ border: '2px solid grey' }}
                    >
                        Uso de condicionais - APTO
                    </Box>
                    <Box
                        height={50}
                        width={350}
                        my={2}
                        display="flex"
                        alignItems="center"
                        p={2}
                        sx={{ border: '2px solid grey' }}>
                        Uso de funções - DESENVOLVIMENTO
                    </Box>
                    <Box
                        height={50}
                        width={350}
                        my={2}
                        display="flex"
                        alignItems="center"
                        p={2}
                        sx={{ border: '2px solid grey' }}
                    >
                        ENUM - INAPTO
                    </Box>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}