

import {React, useState} from 'react'
import { Link, Route, Router, Routes, useLocation } from 'react-router-dom';
import Dialogue from '../BaseComponents/Dialogue/Dialogue'

import Login from '../Login/Login';
import Register from '../Register/Register';


export default function LoginRouter(){

    const loc = useLocation();

    return(

        <>

              <Dialogue />
              
              <div className=" main-sub">
                <Routes location={loc} key={loc.key} >
                  <Route path='/' element={<Login />} />
                  <Route path='/Register' element={<Register />} />
                </Routes>
              </div>

        </>
    )

}




















