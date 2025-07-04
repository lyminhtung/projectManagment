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
import Tooltip from '@mui/material/Tooltip';
import AddCardIcon from '@mui/icons-material/AddCard';
import { Button } from '@mui/material';
import { Attachment, DragHandle, ModeComment } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import GroupIcon from '@mui/icons-material/Group';

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
        p:'10px 0',

       }}>
          <Box sx={{
            bgcolor:'inherit',
            width:'100%',
            height:'100%',
            display: 'flex',
            overflowX:'auto',
            overflowY:'hidden',
            '&::-webkit-scrollbar-track':{
              m:2
            }
          }}>
              {/*Box column01 */}
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
                    height: COLUMN_HEADER_HEIGHT,
                    p:2,
                    display:'flex',
                    alignItems:'center',
                    justifyContent: 'space-between'
                  }}>
                  <Typography variant = 'h6' sx={{fontSize:'1 rem',cursor:'pointer'}}>Column title</Typography>
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
                  <Box sx={{
                    p:'0 5px',
                    display:'flex',
                    flexDirection:'column',
                    gap:1,
                    overflowX:'hidden',
                    overflowY:'auto',
                    maxHeight: (theme) => `calc(
                    ${theme.projectCustom.boardContentHeight} - 
                    ${theme.spacing(5)} -
                    ${COLUMN_HEADER_HEIGHT} -
                    ${COLUMN_FOOTER_HEIGHT}
                    )`,
                    '&::-webkit-scrollbar':{
                  width:'8px',
                  height:'8px'
                    },
                    '&::-webkit-scrollbar-thumb':{
                      backgroundColor:'#ced0da',
                      borderRadius:'8px'
                    },
                    '&::-webkit-scrollbar-thumb:hover':{
                      backgroundColor:'#dfc2cf',
                    }
                  }}>
                    <Card sx={{ 
                      cursor:'pointer',
                      boxShadow:'0 1px 1px rgba(0,0,0,0.2)',
                      overflow:'unset',
                      margin:0
                    }}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image="https://duantheglobalcity.vn/wp-content/uploads/2022/03/du-an-the-global-city.jpg"
                        title="green iguana"
                      />
                      <CardContent sx={{p:1.5, '&:last-child': { p: 1.5 }}}>
                        <Typography >Du an The Global City</Typography>                 
                      </CardContent>
                      <CardActions sx={{p:'0 4px 8px 4px'}}>
                        <Button startIcon={<GroupIcon />} size="small">20</Button>
                        <Button startIcon={<ModeComment />} size="small">20</Button>
                        <Button startIcon={<Attachment />} size="small">20</Button>
                        
                      </CardActions>
                    </Card>
                    <Card sx={{ 
                      cursor:'pointer',
                      margin:0,
                      boxShadow:'0 1px 1px rgba(0,0,0,0.2)',
                      overflow:'unset',
                      p:0
                    }}>
                    <CardContent sx={{p:1.5, '&:last-child': { p: 1.5 },}}>
                        <Typography >Du an gi do</Typography>                  
                      </CardContent>
                      <CardActions>                 
                      </CardActions>
                    </Card>
                    <Card sx={{ 
                      cursor:'pointer',
                      margin:0,
                      boxShadow:'0 1px 1px rgba(0,0,0,0.2)',
                      overflow:'unset',
                      p:0
                    }}>
                    <CardContent sx={{p:1.5, '&:last-child': { p: 1.5 },}}>
                        <Typography >Du an gi do</Typography>                  
                      </CardContent>
                      <CardActions>                 
                      </CardActions>
                    </Card>
                    <Card sx={{ 
                      cursor:'pointer',
                      margin:0,
                      boxShadow:'0 1px 1px rgba(0,0,0,0.2)',
                      overflow:'unset',
                      p:0
                    }}>
                    <CardContent sx={{p:1.5, '&:last-child': { p: 1.5 },}}>
                        <Typography >Du an gi do</Typography>                  
                      </CardContent>
                      <CardActions>                 
                      </CardActions>
                    </Card>
                    <Card sx={{ 
                      cursor:'pointer',
                      margin:0,
                      boxShadow:'0 1px 1px rgba(0,0,0,0.2)',
                      overflow:'unset',
                      p:0
                    }}>
                    <CardContent sx={{p:1.5, '&:last-child': { p: 1.5 },}}>
                        <Typography >Du an gi do</Typography>                  
                      </CardContent>
                      <CardActions>                 
                      </CardActions>
                    </Card>
                    <Card sx={{ 
                      cursor:'pointer',
                      margin:0,
                      boxShadow:'0 1px 1px rgba(0,0,0,0.2)',
                      overflow:'unset',
                      p:0
                    }}>
                    <CardContent sx={{p:1.5, '&:last-child': { p: 1.5 },}}>
                        <Typography >Du an gi do</Typography>                  
                      </CardContent>
                      <CardActions>                 
                      </CardActions>
                    </Card>
                    <Card sx={{ 
                      cursor:'pointer',
                      margin:0,
                      boxShadow:'0 1px 1px rgba(0,0,0,0.2)',
                      overflow:'unset',
                      p:0
                    }}>
                    <CardContent sx={{p:1.5, '&:last-child': { p: 1.5 },}}>
                        <Typography >Du an gi do</Typography>                  
                      </CardContent>
                      <CardActions>                 
                      </CardActions>
                    </Card>
                    
                  </Box>
                  {/*Box footer */}
                  <Box sx={{
                    height: COLUMN_FOOTER_HEIGHT,
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
              {/*Box column02 */}
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
                    height: COLUMN_HEADER_HEIGHT,
                    p:2,
                    display:'flex',
                    alignItems:'center',
                    justifyContent: 'space-between'
                  }}>
                  <Typography variant = 'h6' sx={{fontSize:'1 rem',cursor:'pointer'}}>Column title</Typography>
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
                  <Box sx={{
                    p:'0 5px',
                    m:'0 5px',
                    display:'flex',
                    flexDirection:'column',
                    gap:1,
                    overflowX:'hidden',
                    overflowY:'auto',
                    maxHeight: (theme) => `calc(
                    ${theme.projectCustom.boardContentHeight} - 
                    ${theme.spacing(5)} -
                    ${COLUMN_HEADER_HEIGHT} -
                    ${COLUMN_FOOTER_HEIGHT}
                    )`,
                    '&::-webkit-scrollbar':{
                  width:'8px',
                  height:'8px'
                    },
                    '&::-webkit-scrollbar-thumb':{
                      backgroundColor:'#ced0da',
                      borderRadius:'8px'
                    },
                    '&::-webkit-scrollbar-thumb:hover':{
                      backgroundColor:'#dfc2cf',
                    }
                  }}>
                    <Card sx={{ 
                      cursor:'pointer',
                      boxShadow:'0 1px 1px rgba(0,0,0,0.2)',
                      overflow:'unset',
                      margin:0
                    }}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image="https://duantheglobalcity.vn/wp-content/uploads/2022/03/du-an-the-global-city.jpg"
                        title="green iguana"
                      />
                      <CardContent sx={{p:1.5, '&:last-child': { p: 1.5 }}}>
                        <Typography >Du an The Global City</Typography>                 
                      </CardContent>
                      <CardActions sx={{p:'0 4px 8px 4px'}}>
                        <Button startIcon={<GroupIcon />} size="small">20</Button>
                        <Button startIcon={<ModeComment />} size="small">20</Button>
                        <Button startIcon={<Attachment />} size="small">20</Button>
                        
                      </CardActions>
                    </Card>
                    <Card sx={{ 
                      cursor:'pointer',
                      margin:0,
                      boxShadow:'0 1px 1px rgba(0,0,0,0.2)',
                      overflow:'unset',
                      p:0
                    }}>
                    <CardContent sx={{p:1.5, '&:last-child': { p: 1.5 },}}>
                        <Typography >Du an gi do</Typography>                  
                      </CardContent>
                      <CardActions>                 
                      </CardActions>
                    </Card>
                    
                    
                  </Box>
                  {/*Box footer */}
                  <Box sx={{
                    height: COLUMN_FOOTER_HEIGHT,
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
          </Box>
          
      </Box>
    </div>
  )
}

export default BoardContent
