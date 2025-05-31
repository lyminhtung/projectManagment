import React from 'react'
import ModeSelect from '~/components/ModeSelect'
import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import trellow from '~/assets/trellow.svg';
import SvgIcon from '@mui/material/SvgIcon';
import { Typography } from '@mui/material';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Started from './Menus/Started';
import Templates from './Menus/Templates';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profile from './Menus/Profile';
function AppBar() {
    return(
     <Box px={2} sx={{      
        width : '100%',
        height : (theme) => theme.projectCustom.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto'
     }}>
        <Box sx={{display: 'flex', alignItems: 'center', gap : 2}}>
            <AppsIcon sx={{color: 'white'}}/>
            <Box sx={{display: 'flex', alignItems: 'center', gap : 0.5}}>
                <img src={trellow} alt="Logo Trellow" sizes='small' />
                <Typography variant='span' sx={{fontSize:'1.2rem', fontWeight: "bold", color:'white'}}>Trello</Typography>
            </Box>
            <Box sx={{display: {xs :'none' , md:'flex'}, gap:1}}>
                <Box>
                    <Workspaces/>
                </Box>
                <Box>
                    <Recent/>
                </Box>
                <Box>
                    <Started/>
                </Box> 
                <Box>
                    <Templates/>
                </Box>  
            </Box>
            
            <Box>
                <Button variant="outlined" href="#outlined-buttons" sx={{color: 'white', border: '0.5px solid white'}}>
                    <span color='white'>Create</span>
                </Button>
            </Box>               
        </Box>
        <Box sx={{display: 'flex', alignItems:'center', gap:2}}>
            <TextField id="outlined-search" label="Search field" type="search" size='small' sx={{minWidth: '120px'}}/>
            <ModeSelect/>
            <Badge color="secondary" variant="dot">
                <MailIcon />
            </Badge>
            <Badge color="secondary" variant="dot" sx={{cursor: 'pointer'}}>
                <Tooltip title="Notification">
                    <NotificationsNoneIcon fontSize='small'/>
                </Tooltip>
            </Badge>
            <Tooltip title="Help" sx={{cursor: 'pointer'}}>
                    <HelpOutlineIcon fontSize='small'/>
            </Tooltip>
        </Box>
        <Profile/>
    </Box>
    );
  
}

export default AppBar
