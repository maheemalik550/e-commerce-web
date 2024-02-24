import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { set_Changes } from '../store/slice/user_data.slice';

export  function Navbar() {
    const state_data = useSelector((state)=>state.user_data)
    // console.log(state_data);
    const dipatch = useDispatch()
    const navigate = useNavigate()
     const logout_func = ()=>{
     signOut(auth).then((res)=>{
      dipatch(set_Changes(false))
      navigate('/Login')
      console.log('logout successfully')
     })
     }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"black",color:"white"}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           logo
          </Typography>
        <div>
            {
                state_data.loading ? (
                    <CircularProgress color="secondary" />
                ):(
                  <div>
                    {
                        state_data.isLoggedIn ? (
                            <div className='flex justify-center text-center items-center'>
                                <Typography  sx={{color:"white"}}>UserName</Typography>
                                <Button onClick={logout_func} sx={{color:"white"}} >Logout</Button>
                            </div>
                        )
                        :(
                            <div >
                                <Button sx={{color:"white"}}>
                                 <Link to='/Login' >Login</Link>
                                  </Button><span>|</span>
                                <Button sx={{color:"white"}} >
                                <Link to="/SignUp" >SignUp</Link>
                                </Button>

                            </div>
                        )
                    }
                  </div>
                )
            }
        </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}