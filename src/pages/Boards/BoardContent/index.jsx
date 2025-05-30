import React from 'react'
import Box from '@mui/material/Box';
function BoardContent() {
  return (
    <div>
      <Box sx={{
        backgroundColor : 'white',
        width : '100%',
        height :(theme) => `calc(100vh - ${theme.projectCustom.appBarHeight} - ${theme.projectCustom.boardBarHeight})` ,
        display: 'flex',
        alignItems: 'center'
       }}>
        Board contains
      </Box>
    </div>
  )
}

export default BoardContent
