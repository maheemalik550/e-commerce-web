// import React from 'react'
// import { Route, Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import { HomePage } from '../pages/Home'
// import { Signup } from '../pages/Signup'
// import { Login } from '../pages/Login'



// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Router>
//             <Routes>
//                 <Route path='' element={<HomePage />} />
//                 <Route path='/SignUp' element={<Signup />} />
//                 <Route path='/Login' element={<Login />} />

//             </Routes>
//         </Router>
//     )
// )


// export const React_Router = () => {
//     return (
//         <RouterProvider router={router} />
//     )
// }

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { Signup } from '../pages/Signup';
import { Login } from '../pages/Login';
import { Card_Details } from '../components/Card_Details';

export const React_Router = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/SignUp' element={<Signup />} />
                <Route path='/Login' element={<Login />} />
                <Route path="/CardDetails/:id" element={<Card_Details />} />

            </Routes>
        </Router>
    );
};
