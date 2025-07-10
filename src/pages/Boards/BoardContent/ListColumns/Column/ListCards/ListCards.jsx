import React from 'react'

import Box from '@mui/material/Box';
import CardItem from './Card/Card';
import {SortableContext,verticalListSortingStrategy} from '@dnd-kit/sortable';
 function ListCards({cards}) {
  return (
    <SortableContext items={cards?.map(c => c._id)} strategy={verticalListSortingStrategy}> 
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
          ${theme.projectCustom.columnHeaderHeight} -
          ${theme.projectCustom.columnFooterHeight}
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
          {cards?.map(card=><CardItem key={card._id} card={card}/>)}

      </Box>
    </SortableContext>
  )
}

export default ListCards