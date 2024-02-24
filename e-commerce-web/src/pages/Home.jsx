import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Product_Card } from '../components/Card';

export const HomePage = () => {
    const [Data, setData] = useState([])
    const naviage = useNavigate()



    useEffect(()=>{
        ApiCall()
    })
    const ApiCall = ()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            // console.log(res.data);
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
      
    }
  return (
   <div>
   <div>
    <Navbar/>
   </div>
   <div style={{display:"flex",marginTop:"30px",justifyContent:"space-around",flexWrap:"wrap",gap:"50px"}}>
   {
    Data.map((items)=>{
     return  <Product_Card key={items.id} items={items}/>
    })
   }
   </div>
   </div>
  )
}
