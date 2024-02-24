
import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import "../App.css";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Input } from '../components/Input';
import { Button1 } from '../components/Button';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { set_Changes } from '../store/slice/user_data.slice';

export const Signup = () => {
  const navigate = useNavigate()
  const usedispatch = useDispatch()
  const [userInput, setuserInput] = useState("")

  const onChangeHandle = (e) => {
    const { value, id } = e.target;
    setuserInput({ ...userInput, [id]: value })

  };

  const submit = (e) => {
    e.preventDefault();
    console.log(userInput);


    createUserWithEmailAndPassword(auth ,userInput.email,userInput.password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      navigate('/');
      usedispatch(set_Changes(true))
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });

   







  };

  return (
    <div className='h-full w-full'>
      <Grid container  className="flex justify-center items-center h-screen " >
        <Grid item sx={{maxWidth:"100%",height:"auto",objectFit:"contain"}} >
          <img width={"80%"} src="https://i.pinimg.com/564x/0a/6c/81/0a6c81ea04c7dcbb3c5d3af23d3dc07b.jpg" alt="" />
        </Grid>
        <Grid sx={{maxWidth:"100%",height:"auto",objectFit:"contain"}} >
          <form onSubmit={submit} className='flex flex-col gap-4 '>
            <Typography className='dis'
            variant='h5'>Sign Up</Typography>
            <Input placeholder="email" required={true} id="email" onChange={onChangeHandle} />
            <Input placeholder="name" required={true} id="name"  />
            <Input placeholder="Last name" required={true} id="Last name" />
            <Input placeholder="password" required={true} id="password" onChange={onChangeHandle} />
            <Button type='submit' sx={{
              backgroundColor: "black", '&:hover': {
                backgroundColor: "black"
              }
            }} variant="contained">Sign up</Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};




   




