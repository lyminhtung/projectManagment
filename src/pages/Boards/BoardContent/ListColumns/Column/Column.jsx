import React from 'react'
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
import Tooltip from '@mui/material/Tooltip';
import AddCardIcon from '@mui/icons-material/AddCard';
import { Button } from '@mui/material';
import { Attachment, DragHandle, ModeComment } from '@mui/icons-material';
import ListCards from './ListCards/ListCards';
import Box from '@mui/material/Box';
import { mapOrder } from '~/utils/sorts';
function Column({column}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')
  return (
    
    <Box sx={{
        maxWidth:'300px',
        minWidth:'300px',
        bgcolor:(theme)=>theme.palette.mode ==='dark' ? '#333643' : '#ebecf0',
        ml:2,
        borderRadius:'6px',
        height:'fit-content',
        maxHeight: (theme) => `calc(${theme.projectCustom.boardContentHeight} - ${theme.spacing(5)})`
        }}>
          {/*Box header */}
          <Box sx={{
            height: (theme)=> theme.projectCustom.columnHeaderHeight,
            p:2,
            display:'flex',
            alignItems:'center',
            justifyContent: 'space-between'
          }}>
          <Typography variant = 'h6' sx={{fontSize:'1 rem',cursor:'pointer'}}>{column?.title}</Typography>
          <Box>
            <Tooltip title="More options">
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
            </Tooltip>
            
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
                  <AddCardIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add new card</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Web Clipboard</ListItemText>
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
        {/*Box list card */}
          <ListCards cards={orderedCards}/>
          {/*Box footer */}
          <Box sx={{
            height: (theme)=> theme.projectCustom.columnFooterHeight,
            p:'0 5px',
            m:'0 5px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          }}>
            <Button startIcon={<AddCardIcon />} color="primary">Add new card</Button>
            <Tooltip title="Drag to move">
              <DragHandle sx={{cursor:'move'}}/>
            </Tooltip>
          </Box>
      </Box>
  )
}

export default Column