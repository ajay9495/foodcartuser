

import {React, useState} from 'react'
import { Link, Route, Router, Routes, useLocation } from 'react-router-dom';
import Dialogue from '../BaseComponents/Dialogue/Dialogue'

import Login from '../Login/Login';
import Register from '../Register/Register';


export default function RegisterRouter(){

    const loc = useLocation();

    return(

        <>

              <Dialogue />
              
              <div className=" main-sub">
                <Routes location={loc} key={loc.key} >
                  <Route path='/' element={<Register />} />
                  <Route path='/Login' element={<Login />} />
                </Routes>
              </div>

        </>
    )

}




















