import React from 'react'
import Box from '@mui/material/Box';
import ListColumn from './ListColumns/ListColumn';

function BoardContent() {
  
  
  return (
    <div>
      <Box sx={{
        bgcolor:(theme)=>theme.palette.mode ==='dark' ? '#34495e' : '#1976d2',
        width : '100%',
        height :(theme) => theme.projectCustom.boardContentHeight,
        p:'10px 0',

       }}>
          
          <ListColumn/>
      </Box>
    </div>
  )
}

export default BoardContent
