import { Box, Button, Container, Divider, FormControl, Grid, InputLabel, MenuItem, Modal, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { CustomBox } from "./styles";
import CheckBoxList, { IDisciplineInfo } from "./CheckBoxList";


type ModalPropTypes = {
    disciplines: IDisciplineInfo[]
}

export default function AddDisciplineModal({disciplines}:ModalPropTypes) {
    const [open, setOpen] = useState(false);
    const [disciplineId, setDiscipline] = useState("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event: SelectChangeEvent) => {
        setDiscipline(event.target.value);
    }

    return (
        <div>
            <Button color="inherit" onClick={handleOpen}>
                <span className="material-symbols-outlined" style={{fontSize: "60px", opacity: "50%"}}>add_circle</span>
            </Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
                <CustomBox>
                    <Typography id="modal-title" variant="h4" noWrap>Adicionar disciplina</Typography>
                    <Divider sx={{marginTop: 2, marginBottom: 2}}/>
                    <Stack sx={{ maxHeight: "95%", paddingBottom: 5}} justifyContent={"space-between"}>
                        <CheckBoxList disciplines={disciplines}/>
                        <Divider sx={{marginTop: 3}}/>
                        <Stack alignItems={"flex-end"} marginTop={5}>
                            <Button variant="outlined" color="secondary" sx={{marginLeft: "auto"}}>
                                Adicionar
                            </Button>
                        </Stack>
                    </Stack>
                </CustomBox>
            </Modal>
            
        </div>
    )
}