import { Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default function ListStudents() {
    return (
        <>
            <Sidebar name="Alunos">
                <List sx={{ width: '100%', maxWidth: 700, bgcolor: '#f8f8f8' }}>
                    {[1, 2, 3].map((value) => (
                        <ListItem
                            key={value}
                            disableGutters
                            secondaryAction={
                                <IconButton>
                                    <DeleteOutlineRoundedIcon />
                                </IconButton>
                            }
                        >
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={6}>
                                    <ListItemText primary={`Aluno ${value}`} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" color="textSecondary">
                                        Desenvolvimento de Sistemas
                                    </Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                    ))}
                </List>
            </Sidebar>
        </>
    )
}
