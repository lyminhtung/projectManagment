import React from 'react'
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function BoardContent() {
  const COLUMN_HEADER_HEIGHT='50px'
  const COLUMN_FOOTER_HEIGHT='50px'
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
      <Box sx={{
        bgcolor:(theme)=>theme.palette.mode ==='dark' ? '#34495e' : '#1976d2',
        width : '100%',
        height :(theme) => theme.projectCustom.boardContentHeight,
        display: 'flex',
        borderTop: '1px solid white'
       }}>
        {/*Box column */}
        <Box sx={{
          maxWidth:'300px',
          minWidth:'300px',
          bgcolor:(theme)=>theme.palette.mode ==='dark' ? '#333643' : '#ebecf0',
          ml:2,
          borderRadius:'6px',
          }}>
            <Box sx={{
              height: COLUMN_HEADER_HEIGHT,
              p:2,
              display:'flex',
              alignItems:'center',
              justifyContent: 'space-between'
            }}>
            <Typography>Column title</Typography>
            <Box>
              <ExpandMoreIcon
                sx={{
                  color:'text.primary',
                  cursor: 'pointer',
                }}
                id="basic-button-dropdown"
                aria-controls={open ? 'basic-meunu-dropdown' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}/>
              <Menu
                id="basic-meunu-dropdown"
                aria-labelledby="basic-button-dropdown"
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
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    ⌘X
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    ⌘C
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    ⌘V
                  </Typography>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Web Clipboard</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
            <Box sx={{}}>List Card</Box>
            <Box sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p:2,
              display:'flex',
              alignItems:'center',
              justifyContent:'center'
            }}>Footer</Box>
        </Box>
      </Box>
    </div>
  )
}

export default BoardContent
