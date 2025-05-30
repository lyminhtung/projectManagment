import React from 'react'
import Box from '@mui/material/Box';
function BoardBar() {
  return (
    <div>
      <Box sx={{
        backgroundColor : 'primary.dark',
        width : '100%',
        height : (theme) => theme.projectCustom.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
       }}>
        Boadrd Bar
      </Box>
    </div>
  )
}

export default BoardBar
