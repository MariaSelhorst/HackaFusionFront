import { IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from "../styles";

interface ICustomAppBarProps {
    handleDrawerToggle: () => void
    pageName: string;
    open: boolean;
}

const CustomAppBar = ({ handleDrawerToggle, pageName, open }:ICustomAppBarProps) => {
    return(
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">{pageName}</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default CustomAppBar