import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Card_Details = () => {
const navigate = useNavigate()
    const [setData, setsetData] = useState('')
    const {id} = useParams();
    console.log(id)

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            console.log(res.data);
            setsetData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const Go_back_handle = ()=>{
        navigate('/')
    }

  return (
  <>
  <img style={{height:"300px"}} src={setData.image} alt="" />
    <div>{setData.id}</div>
    <div>{setData.title}</div>
    <div>{setData.description}</div>
    <Button  onClick={Go_back_handle} sx={{
       backgroundColor: "black", '&:hover': {
           backgroundColor: "black"
       }
   }} variant="contained">Go Back</Button>
  </>
  )
}
