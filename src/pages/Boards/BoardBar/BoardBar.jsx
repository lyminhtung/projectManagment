import React from 'react'
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Tooltip } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import { capitalizeFirstLetter } from '~/utils/fomatters';
const Menu_Style = {
  color:'white',
  bgcolor:'transparent',
  border:'none',
  paddingX:'5px',
  borderRadius:'4px',
  '& .MuiSvgIcon-root':{
    color:'white'
  },
  '&:hover': {
    bgcolor:'primary.50'
  }
}
//object destructuring
function BoardBar({board})  {
  
  return (
    <div>
      <Box sx={{
        bgcolor:(theme)=>theme.palette.mode ==='dark' ? '#34495e' : '#1976d2',
        width : '100%',
        height : (theme) => theme.projectCustom.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        borderTop: '1px solid #00bfa5',
        paddingX:2,
        '.MuiSvgIcon-root':{
          color:'white'
        }
       }}>
         <Box sx={{display: 'flex', alignItems: 'center', gap : 2}}>
          <Chip 
            sx={Menu_Style}
            icon={<DashboardIcon />} 
            label= {board?.title} 
            clickable
          />
          <Chip 
            sx={Menu_Style}
            icon={<VpnLockIcon />} 
            label={capitalizeFirstLetter(board?.type)} 
            clickable
          />
          <Chip 
            sx={Menu_Style}
            icon={<AddToDriveIcon />} 
            label="App to Google Drive" 
            clickable
          />
          <Chip 
            sx={Menu_Style}
            icon={<ElectricBoltIcon />} 
            label="Automation" 
            clickable
          />
          <Chip 
            sx={Menu_Style}
            icon={<FilterListIcon />} 
            label="Filter" 
            clickable
          />
         </Box>
         <Box sx={{display: 'flex', alignItems: 'center', gap : 2}}>
          <Button variant="outlined" href="#outlined-buttons" sx={{color: 'white', border: '0.5px solid white', gap: 0.5}}>
            <PersonAddIcon/>
            <span color='white'>Invite</span>
          </Button>
          <AvatarGroup max={4}
            sx={{
              gap:'10px',
              '& .MuiAvatar-root':{
                width:34,
                height:34,
                fontSize: 16,
                border:'none',
                color: 'white',
                cursor:'pointer',
                '&:first-of-type':{bgcolor:'#a4b0be'}
              }
            }}
          >
            <Tooltip title='Ly Tung'>
              <Avatar 
              alt="Ly Tung" 
              src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-1/480735598_1608056836582249_5953629244909746237_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=r4U6sja5NygQ7kNvwHGWxXT&_nc_oc=AdnFIllfQptxSXCCTaIpuU-b0N2wWQlhGHOtQ-NRwWDtKEoH4FDTZRGrYBbg-rXvG-quoMSVDHEYUgpx0q33Q93A&_nc_zt=24&_nc_ht=scontent.fhan14-5.fna&_nc_gid=yBQJUipNrFIdlZ1bw87r6w&oh=00_AfOnDB73EWgLkw5udumElseOHjRCz_rQGpSmd5CUE1Br8Q&oe=6852FFF5" 
              />
            </Tooltip>
            <Tooltip title='Ly Tung'>
              <Avatar 
              alt="Ly Tung" 
              src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-1/480735598_1608056836582249_5953629244909746237_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=r4U6sja5NygQ7kNvwHGWxXT&_nc_oc=AdnFIllfQptxSXCCTaIpuU-b0N2wWQlhGHOtQ-NRwWDtKEoH4FDTZRGrYBbg-rXvG-quoMSVDHEYUgpx0q33Q93A&_nc_zt=24&_nc_ht=scontent.fhan14-5.fna&_nc_gid=yBQJUipNrFIdlZ1bw87r6w&oh=00_AfOnDB73EWgLkw5udumElseOHjRCz_rQGpSmd5CUE1Br8Q&oe=6852FFF5" 
              />
            </Tooltip>
            <Tooltip title='Ly Tung'>
              <Avatar 
              alt="Ly Tung" 
              src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-1/480735598_1608056836582249_5953629244909746237_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=r4U6sja5NygQ7kNvwHGWxXT&_nc_oc=AdnFIllfQptxSXCCTaIpuU-b0N2wWQlhGHOtQ-NRwWDtKEoH4FDTZRGrYBbg-rXvG-quoMSVDHEYUgpx0q33Q93A&_nc_zt=24&_nc_ht=scontent.fhan14-5.fna&_nc_gid=yBQJUipNrFIdlZ1bw87r6w&oh=00_AfOnDB73EWgLkw5udumElseOHjRCz_rQGpSmd5CUE1Br8Q&oe=6852FFF5" 
              />
            </Tooltip>
            <Tooltip title='Ly Tung'>
              <Avatar 
              alt="Ly Tung" 
              src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-1/480735598_1608056836582249_5953629244909746237_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=r4U6sja5NygQ7kNvwHGWxXT&_nc_oc=AdnFIllfQptxSXCCTaIpuU-b0N2wWQlhGHOtQ-NRwWDtKEoH4FDTZRGrYBbg-rXvG-quoMSVDHEYUgpx0q33Q93A&_nc_zt=24&_nc_ht=scontent.fhan14-5.fna&_nc_gid=yBQJUipNrFIdlZ1bw87r6w&oh=00_AfOnDB73EWgLkw5udumElseOHjRCz_rQGpSmd5CUE1Br8Q&oe=6852FFF5" 
              />
            </Tooltip>
            <Tooltip title='Ly Tung'>
              <Avatar 
              alt="Ly Tung" 
              src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-1/480735598_1608056836582249_5953629244909746237_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=r4U6sja5NygQ7kNvwHGWxXT&_nc_oc=AdnFIllfQptxSXCCTaIpuU-b0N2wWQlhGHOtQ-NRwWDtKEoH4FDTZRGrYBbg-rXvG-quoMSVDHEYUgpx0q33Q93A&_nc_zt=24&_nc_ht=scontent.fhan14-5.fna&_nc_gid=yBQJUipNrFIdlZ1bw87r6w&oh=00_AfOnDB73EWgLkw5udumElseOHjRCz_rQGpSmd5CUE1Br8Q&oe=6852FFF5" 
              />
            </Tooltip>
            <Tooltip title='Ly Tung'>
              <Avatar 
              alt="Ly Tung" 
              src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-1/480735598_1608056836582249_5953629244909746237_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=r4U6sja5NygQ7kNvwHGWxXT&_nc_oc=AdnFIllfQptxSXCCTaIpuU-b0N2wWQlhGHOtQ-NRwWDtKEoH4FDTZRGrYBbg-rXvG-quoMSVDHEYUgpx0q33Q93A&_nc_zt=24&_nc_ht=scontent.fhan14-5.fna&_nc_gid=yBQJUipNrFIdlZ1bw87r6w&oh=00_AfOnDB73EWgLkw5udumElseOHjRCz_rQGpSmd5CUE1Br8Q&oe=6852FFF5" 
              />
            </Tooltip>
          </AvatarGroup>
         </Box>
      </Box>
    </div>
  )
}

export default BoardBar
