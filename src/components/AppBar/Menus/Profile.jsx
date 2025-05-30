import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 , padding:0}}
            aria-controls={open ? 'basic-button-profile' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
           >
             <Avatar sx={{ width: 32, height: 32}} 
                src='https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-1/480735598_1608056836582249_5953629244909746237_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEVdRLKo1M9zbzVbFU7ZZMH5MvMOx45yKzky8w7HjnIrI1qO3eq36Tl8l-kUK_hiNRzBshiU80OLGJrxgy4hgPa&_nc_ohc=4bsDIL3BhKMQ7kNvwFF0oye&_nc_oc=AdmvypuujQpAT4T_l81tA9QekM4gfGZtRCl0wxKW2FK3k3m2owN3iWTUwDcor4Ty2pg&_nc_zt=24&_nc_ht=scontent.fhan12-1.fna&_nc_gid=u9PQNb13_zRAJ34OFJT0KA&oh=00_AfK-XfeT80IVgp3YS1sC_D5f-zLmagqOFf1Imw6xKgAdXA&oe=683F71B5'
                alt='LyTung'/>
          </IconButton>
        </Tooltip>
      <Menu
        id="basic-meunu-profile"
        aria-labelledby="basic-button-profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} sx={{color:'white'}}>
          <Avatar sx={{width: 28,height:28,mr:2, color:'white'}}/> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{width: 28,height:28,mr:2, color:'white'}}/> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Profile
