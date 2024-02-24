import { Button } from '@mui/material'
import React from 'react'



export const Button1 = () => {
  return (
    <Button sx={{backgroundColor:"black",'&:hover':{
        backgroundColor:"black"
    }}} variant="contained">Contained</Button>
    )
}
