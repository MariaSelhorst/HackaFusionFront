import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface INavItemProps {
    open: boolean;
    icon: ReactNode;
    destination: string;
    name: string;
    onClick?: () => void
}

const NavItem = ({ open, icon, destination, name, onClick }:INavItemProps) => {
    return(
        <Link to={destination} onClick={onClick}>
            <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        { icon }
                    </ListItemIcon>
                    <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </ListItem>
        </Link>
    )
}

export default NavItem