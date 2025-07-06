import React, { useState } from 'react'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
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
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from '@mui/icons-material/Close';
function AppBar() {
    const [serachValue,setSearchValue] = useState('')
    return(
     <Box px={2} sx={{ 
        backgroundColor : 'common.background',    
        width : '100%',
        height : (theme) => theme.projectCustom.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        bgcolor: (theme)=>(theme.palette.mode === 'dark' ?  '#2c3e50': '#1565c0')
     }}>
        <Box sx={{display: 'flex', alignItems: 'center', gap : 2}}>
            <AppsIcon sx={{color: 'white'}}/>
            <Box sx={{display: 'flex', alignItems: 'center', gap : 0.5}}>
                <IntegrationInstructionsIcon fontSize='small' sx={{color:'white'}}/>
                <Typography variant='span' sx={{fontSize:'1.2rem', fontWeight: "bold", color:'white'}}>Project</Typography>
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
                <Button 
                variant="outlined" 
                href="#outlined-buttons" 
                sx={
                    {color: 'white', 
                     border: '0.5px solid white',
                     '& .MuiButton-outlined':{
                        borderColor:'none'
                     }
                    }
                   }
                >
                    <span color='white'>Create</span>
                </Button>
            </Box>               
        </Box>
        <Box sx={{display: 'flex', alignItems:'center', gap:2}}>
            <TextField id="outlined-search" 
              label="Search field" 
              type="text" 
              size='small'
              value={serachValue}
              onChange={(e)=>setSearchValue(e.target.value)}
              InputProps={{
                startAdornment:(
                    <InputAdornment position="start">
                        <SearchIcon sx={{color:'white'}}/>
                    </InputAdornment>
                ),
                endAdornment: (
                    <CloseIcon
                      fontSize='small'
                      sx={{
                        color: serachValue ? 'white':'transparent',
                        cursor:'pointer'
                      }}
                      onClick ={()=> setSearchValue('')}                    
                    />
                )
              }} 
              sx={{
                minWidth: '120px',
                maxWidth:'170px',
                color:'white',
                '& label':{
                    color:'white'
                },
                '& input':{
                    color:'white'
                },
                '& label.Mui-focused':{
                    color:'white'
                },
                '& .MuiOutlinedInput-root':{
                    '& fieldset':{
                        borderColor:'white'
                    },
                    '&:hover fieldset':{
                        borderColor:'white'
                    },
                    '&.Mui-focused fieldset':{
                        borderColor:'white'
                    }
                }
                }}/>
            <ModeSelect/>
            <Badge color="warning" variant="dot">
                <MailIcon sx={{color:'white'}}/>
            </Badge>
            <Badge color="warning" variant="dot" sx={{cursor: 'pointer'}}>
                <Tooltip title="Notification">
                    <NotificationsNoneIcon fontSize='small' sx={{color:'white'}}/>
                </Tooltip>
            </Badge>
            <Tooltip title="Help" sx={{cursor: 'pointer'}}>
                    <HelpOutlineIcon fontSize='small' sx={{color:'white',}}/>
            </Tooltip>
        </Box>
        <Profile/>
    </Box>
    );
  
}

export default AppBar
