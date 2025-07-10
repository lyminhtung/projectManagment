import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import GroupIcon from '@mui/icons-material/Group';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Attachment, ModeComment } from '@mui/icons-material';
function CardItem({card}) {
  const shouldShowCardActions = ()=>{
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }
  return (
      <Card sx={{ 
          cursor:'pointer',
          boxShadow:'0 1px 1px rgba(0,0,0,0.2)',
          overflow:'unset',
          margin:0
        }}>
          {card?.cover && (<CardMedia sx={{ height: 140 }}image={card?.cover}/>
          )}      
          <CardContent sx={{p:1.5, '&:last-child': { p: 1.5 }}}>
            <Typography >{card?.title}</Typography>                 
          </CardContent>
          {shouldShowCardActions() && (
            <CardActions sx={{p:'0 4px 8px 4px'}}>  
            {!!card?.memberIds?.length && <Button startIcon={<GroupIcon />} size="small">{card?.memberIds?.length}</Button>}
            {!!card?.comments?.length && <Button startIcon={<ModeComment />} size="small">{card?.comments?.length}</Button>}         
            {!!card?.attachments?.length && <Button startIcon={<Attachment />} size="small">{card?.attachments?.length}</Button>}          
            </CardActions>
          )}         
        </Card>
  )
}

export default CardItem
