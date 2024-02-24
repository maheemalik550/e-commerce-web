import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; // Import GoogleAuthProvider
import { Input } from '../components/Input';
import { Button1 } from '../components/Button';
import { auth, provider } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate()
    const [userInput, setuserInput] = useState("")

    const onChangeHandle = (e) => {
        const { value, id } = e.target;
        setuserInput({ ...userInput, [id]: value })

    };

    const submit = (e) => {
        e.preventDefault();
        console.log(userInput)

        signInWithEmailAndPassword(auth, userInput.email, userInput.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    };

    const Login_with_google = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user)
                navigate('/')
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div className='h-full w-full'>
            <Grid container className="flex justify-center items-center h-screen " >
                <Grid item sx={{ maxWidth: "100%", height: "auto", objectFit: "contain" }} >
                    <img width={"80%"} src="https://i.pinimg.com/564x/0a/6c/81/0a6c81ea04c7dcbb3c5d3af23d3dc07b.jpg" alt="" />
                </Grid>
                <Grid sx={{ maxWidth: "100%", height: "auto", objectFit: "contain" }} >
                    <form onSubmit={submit} className='flex flex-col gap-7 '>
                        <Typography className='dis'
                            variant='h5'>Login</Typography>
                        <Input placeholder="email" required={true} id="email" onChange={onChangeHandle} />
                        <Input placeholder="password" required={true} id="password" onChange={onChangeHandle} />
                        <Button type='submit' sx={{
                            backgroundColor: "black", '&:hover': {
                                backgroundColor: "black"
                            }
                        }} variant="contained">Login</Button>
                        <Button onClick={Login_with_google} sx={{
                            backgroundColor: "black", '&:hover': {
                                backgroundColor: "black"
                            }
                        }} variant="contained">Login With google</Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};



