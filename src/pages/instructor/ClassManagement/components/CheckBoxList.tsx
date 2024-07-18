import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react"

export interface IDisciplineInfo {
    id: number;
    name: string;
}

type CheckboxListPropTypes = {
    disciplines: IDisciplineInfo[]
}

export default function CheckBoxList({disciplines}:CheckboxListPropTypes) {
    const [checked, setChecked] = useState([0])

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
    };

    return (
        <List sx={{ 
            width: '100%',
            bgcolor: 'background.paper',
            overflow: "auto", 
            height: "10%",
        }}
        > {disciplines.map((value) => {
            const labelId = `checkbox-list-label-${value.id}`;

            return (
                <ListItem
                    key={value.id}
                    disablePadding
                >
                    <ListItemButton role={undefined} onClick={handleToggle(value.id)} dense>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(value.id) !== -1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={value.name} />
                    </ListItemButton>
                </ListItem>
            );
      })}
    </List>
    )
}