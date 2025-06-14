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
             <Avatar sx={{ width: 34, height: 34}} 
                src='https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-1/480735598_1608056836582249_5953629244909746237_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=r4U6sja5NygQ7kNvwHGWxXT&_nc_oc=AdnFIllfQptxSXCCTaIpuU-b0N2wWQlhGHOtQ-NRwWDtKEoH4FDTZRGrYBbg-rXvG-quoMSVDHEYUgpx0q33Q93A&_nc_zt=24&_nc_ht=scontent.fhan14-5.fna&_nc_gid=yBQJUipNrFIdlZ1bw87r6w&oh=00_AfOnDB73EWgLkw5udumElseOHjRCz_rQGpSmd5CUE1Br8Q&oe=6852FFF5'
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
        sx={{
          '&.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-12nfonn-MuiPaper-root-MuiMenu-paper-MuiPopover-paper':{marginTop:'30px'}
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
