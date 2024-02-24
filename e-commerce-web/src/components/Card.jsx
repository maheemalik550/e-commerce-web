import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import { StayPrimaryLandscapeSharp } from '@mui/icons-material';

export const Product_Card = ({items}) => {
    const navigate  = useNavigate();

    const Card_Details = ()=>{
        navigate(`/CardDetails/${items.id}`)
    }

  return (
    <Paper lg={4} style={{width:"400px",padding:"10px"}}>
       <div>
       <img style={{height:"300px"}} src={items.image} alt="" />
       </div>
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {items.title}
        </Typography>
      </CardContent>
      <CardActions>
       <Button onClick={Card_Details}
        sx={{
            color:"white",  backgroundColor: "black", '&:hover': {
                backgroundColor: "black"
            } }} size="small">Card Details</Button>
       <Button sx={{color:"black"}}  size="small">Learn More</Button>
     </CardActions>
    </Paper>

  )
}
