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
const Menu_Style = {
  color:'white',
  bgcolor:'transparent',
  border:'none',
  paddingX:'5px',
  borderRadius:'4px',
  '& .MuiSvgIcon-root':{
    color:'primary.main'
  },
  '&:hover': {
    bgcolor:'primary.50'
  }
}
function BoardBar() {
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
            label="Ly Tung Stack Board" 
            clickable
          />
          <Chip 
            sx={Menu_Style}
            icon={<VpnLockIcon />} 
            label="Public/Private WorkSpace" 
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
              src="https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-1/480735598_1608056836582249_5953629244909746237_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEVdRLKo1M9zbzVbFU7ZZMH5MvMOx45yKzky8w7HjnIrI1qO3eq36Tl8l-kUK_hiNRzBshiU80OLGJrxgy4hgPa&_nc_ohc=4bsDIL3BhKMQ7kNvwFF0oye&_nc_oc=AdmvypuujQpAT4T_l81tA9QekM4gfGZtRCl0wxKW2FK3k3m2owN3iWTUwDcor4Ty2pg&_nc_zt=24&_nc_ht=scontent.fhan12-1.fna&_nc_gid=u9PQNb13_zRAJ34OFJT0KA&oh=00_AfK-XfeT80IVgp3YS1sC_D5f-zLmagqOFf1Imw6xKgAdXA&oe=683F71B5" 
              />
            </Tooltip>
            <Tooltip title='Ly Tung'>
              <Avatar 
              alt="Ly Tung" 
              src="https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-1/480735598_1608056836582249_5953629244909746237_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEVdRLKo1M9zbzVbFU7ZZMH5MvMOx45yKzky8w7HjnIrI1qO3eq36Tl8l-kUK_hiNRzBshiU80OLGJrxgy4hgPa&_nc_ohc=4bsDIL3BhKMQ7kNvwFF0oye&_nc_oc=AdmvypuujQpAT4T_l81tA9QekM4gfGZtRCl0wxKW2FK3k3m2owN3iWTUwDcor4Ty2pg&_nc_zt=24&_nc_ht=scontent.fhan12-1.fna&_nc_gid=u9PQNb13_zRAJ34OFJT0KA&oh=00_AfK-XfeT80IVgp3YS1sC_D5f-zLmagqOFf1Imw6xKgAdXA&oe=683F71B5" 
              />
            </Tooltip>
            <Tooltip title='Ly Tung'>
              <Avatar 
              alt="Ly Tung" 
              src="https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-1/480735598_1608056836582249_5953629244909746237_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEVdRLKo1M9zbzVbFU7ZZMH5MvMOx45yKzky8w7HjnIrI1qO3eq36Tl8l-kUK_hiNRzBshiU80OLGJrxgy4hgPa&_nc_ohc=4bsDIL3BhKMQ7kNvwFF0oye&_nc_oc=AdmvypuujQpAT4T_l81tA9QekM4gfGZtRCl0wxKW2FK3k3m2owN3iWTUwDcor4Ty2pg&_nc_zt=24&_nc_ht=scontent.fhan12-1.fna&_nc_gid=u9PQNb13_zRAJ34OFJT0KA&oh=00_AfK-XfeT80IVgp3YS1sC_D5f-zLmagqOFf1Imw6xKgAdXA&oe=683F71B5" 
              />
            </Tooltip>
            <Tooltip title='Ly Tung'>
              <Avatar 
              alt="Ly Tung" 
              src="https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-1/480735598_1608056836582249_5953629244909746237_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEVdRLKo1M9zbzVbFU7ZZMH5MvMOx45yKzky8w7HjnIrI1qO3eq36Tl8l-kUK_hiNRzBshiU80OLGJrxgy4hgPa&_nc_ohc=4bsDIL3BhKMQ7kNvwFF0oye&_nc_oc=AdmvypuujQpAT4T_l81tA9QekM4gfGZtRCl0wxKW2FK3k3m2owN3iWTUwDcor4Ty2pg&_nc_zt=24&_nc_ht=scontent.fhan12-1.fna&_nc_gid=u9PQNb13_zRAJ34OFJT0KA&oh=00_AfK-XfeT80IVgp3YS1sC_D5f-zLmagqOFf1Imw6xKgAdXA&oe=683F71B5" 
              />
            </Tooltip>
            <Tooltip title='Ly Tung'>
              <Avatar 
              alt="Ly Tung" 
              src="https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-1/480735598_1608056836582249_5953629244909746237_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEVdRLKo1M9zbzVbFU7ZZMH5MvMOx45yKzky8w7HjnIrI1qO3eq36Tl8l-kUK_hiNRzBshiU80OLGJrxgy4hgPa&_nc_ohc=4bsDIL3BhKMQ7kNvwFF0oye&_nc_oc=AdmvypuujQpAT4T_l81tA9QekM4gfGZtRCl0wxKW2FK3k3m2owN3iWTUwDcor4Ty2pg&_nc_zt=24&_nc_ht=scontent.fhan12-1.fna&_nc_gid=u9PQNb13_zRAJ34OFJT0KA&oh=00_AfK-XfeT80IVgp3YS1sC_D5f-zLmagqOFf1Imw6xKgAdXA&oe=683F71B5" 
              />
            </Tooltip>
            <Tooltip title='Ly Tung'>
              <Avatar 
              alt="Ly Tung" 
              src="https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-1/480735598_1608056836582249_5953629244909746237_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEVdRLKo1M9zbzVbFU7ZZMH5MvMOx45yKzky8w7HjnIrI1qO3eq36Tl8l-kUK_hiNRzBshiU80OLGJrxgy4hgPa&_nc_ohc=4bsDIL3BhKMQ7kNvwFF0oye&_nc_oc=AdmvypuujQpAT4T_l81tA9QekM4gfGZtRCl0wxKW2FK3k3m2owN3iWTUwDcor4Ty2pg&_nc_zt=24&_nc_ht=scontent.fhan12-1.fna&_nc_gid=u9PQNb13_zRAJ34OFJT0KA&oh=00_AfK-XfeT80IVgp3YS1sC_D5f-zLmagqOFf1Imw6xKgAdXA&oe=683F71B5" 
              />
            </Tooltip>
          </AvatarGroup>
         </Box>
      </Box>
    </div>
  )
}

export default BoardBar
