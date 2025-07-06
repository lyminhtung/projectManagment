import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import GroupIcon from '@mui/icons-material/Group';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Attachment, ModeComment } from '@mui/icons-material';
function CardItem({temporaryHideMedia}) {
  if(temporaryHideMedia){
    return (
      <Card sx={{ 
        cursor:'pointer',
        boxShadow:'0 1px 1px rgba(0,0,0,0.2)',
        overflow:'unset',
        margin:0
      }}>
        
        <CardContent sx={{p:1.5, '&:last-child': { p: 1.5 }}}>
          <Typography >Du an The Global City test 01</Typography>                 
        </CardContent>
      </Card>
    )
  }
  return (
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
  )
}

export default CardItem
