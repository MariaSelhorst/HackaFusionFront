import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Drawer, DrawerHeader } from './styles';
import { useContext, useState } from 'react';
import CustomAppBar from './components/CustomAppBar';
import NavItem from './components/NavItem';
import { UserContext } from '../../providers/UserContext';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

type SideparPropTypes = {
    children: any,
    pageName: string
}

export default function Sidebar({ children, pageName }: SideparPropTypes) {

    const [open, setOpen] = useState(false);
    const { user, setUser, setToken } = useContext(UserContext)

    const handleDrawerToggle = () => setOpen(prev => !prev)

    return (
        <Box sx={{ display: 'flex', maxWidth: "100vw" }}>
            <CustomAppBar handleDrawerToggle={handleDrawerToggle} pageName={pageName} open={open}/>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerToggle}><ChevronLeftIcon/></IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <NavItem
                        name='Home'
                        destination={"/home"}
                        icon={<HomeOutlinedIcon fontSize='large'/>}
                        open={open}
                    />
                    <NavItem
                        name='Calendário'
                        destination={"/calendar"}
                        icon={<CalendarMonthOutlinedIcon fontSize='large'/>}
                        open={open}
                    />
                    {
                        user?.role == 'STUDENT' &&
                        <NavItem
                            name='Dashboard'
                            destination={'/dashboard/'+user.id}
                            icon={<BarChartOutlinedIcon fontSize='large'/>}
                            open={open}
                        />
                    }
                    {
                        user?.role != 'STUDENT' &&
                        <NavItem
                            name='Turmas'
                            destination={"/classes"}
                            icon={<GroupsOutlinedIcon fontSize='large'/>}
                            open={open}
                        />
                    }
                    {
                        user?.role == 'ADMIN' &&
                        <NavItem
                            name='Instrutores'
                            destination={"/instructors"}
                            icon={<SchoolOutlinedIcon fontSize='large'/>}
                            open={open}
                        />
                    }

                    <NavItem
                        name='Sair'
                        destination={"/login"}
                        icon={<LogoutOutlinedIcon fontSize='large'/>}
                        open={open}
                        onClick={() => { 
                            setUser(undefined)
                            setToken(undefined)
                        }}
                    />
                </List>
            </Drawer>
            <Box component="main" width="100%" marginTop="30px">
                <DrawerHeader/>
                { children }
            </Box>
        </Box>
    );
}