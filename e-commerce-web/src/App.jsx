
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { Navbar } from './components/Navbar'
import axios from 'axios'
import { HomePage } from './pages/Home'
import { React_Router } from './Router/React_Router'
import { auth } from './config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { set_Changes } from './store/slice/user_data.slice'

const App = () => {
    const state = useSelector((state)=>state.user_data)
    console.log(state)
    const dispatch = useDispatch()
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);
    console.log('user he');
    dispatch(set_Changes(true))

    // ...
  } else {
    // User is signed out
    // ...
    console.log('user nhi he ')
    dispatch(set_Changes(false))
  }
});
 return (
  <>
 <React_Router/>
  </>
 )
}

export default App