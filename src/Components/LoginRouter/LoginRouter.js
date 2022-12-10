

import {React, useState} from 'react'
import { Link, Route, Router, Routes, useLocation } from 'react-router-dom';
import Dialogue from '../BaseComponents/Dialogue/Dialogue'

import Login from '../Login/Login';
import Register from '../Register/Register';
import useSharedConfig from '../../SharedModules/SharedConfig/SharedConfig';

export default function LoginRouter(){

    const loc = useLocation();
    const {config} = useSharedConfig();

    return(

        <>

              <Dialogue />
              
              <div className=" main-sub">
                <Routes location={loc} key={loc.key} >
                  <Route path={config.ROOT_PATH} element={<Login />} />
                  <Route path={config.ROOT_PATH+'/Register'} element={<Register />} />
                </Routes>
              </div>

        </>
    )

}




















