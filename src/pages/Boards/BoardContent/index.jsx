import React from 'react'
import Box from '@mui/material/Box';
function BoardContent() {
  return (
    <div>
      <Box sx={{
        bgcolor:(theme)=>theme.palette.mode ==='dark' ? '#34495e' : '#1976d2',
        width : '100%',
        height :(theme) => `calc(100vh - ${theme.projectCustom.appBarHeight} - ${theme.projectCustom.boardBarHeight})` ,
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid white'
       }}>
        {/*Box column */}
        <Box sx={{
          maxWidth:'300px',
          minWidth:'300px',
          bgcolor:(theme)=>theme.palette.mode ==='dark' ? '#333643' : '#ebecf0',
          ml:2,
          borderRadius:'6px'
          }}>
        </Box>
      </Box>
    </div>
  )
}

export default BoardContent
