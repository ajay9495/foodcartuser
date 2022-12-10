
import {React, useState} from 'react'
import { Link, Route, Router, Routes, useLocation } from 'react-router-dom';
import Dialogue from '../BaseComponents/Dialogue/Dialogue'
import useSharedConfig from '../../SharedModules/SharedConfig/SharedConfig';


import Register from '../Register/Register';
import Account from '../Account/Account';
import Category from '../Category/Category';
import Footer from '../Footer/Main/Footer'
import ProductList from '../ProductList/ProductList';
import Cart from '../Cart/Cart'
import Search from '../Search/Search'
import Feedback from '../Feedback/Feedback'
import About from '../About/About'
import Map from '../Map/Map'
import Address from '../Address/Address'
import Payment from '../Payment/Payment'
import Orders from '../Orders/Orders'
import OrderDetails from '../OrderDetails/OrderDetails'

export default function MainRouter(){

    const loc = useLocation();
    const {config} = useSharedConfig();

    return(

        <>
            <Dialogue />
            
            <div className=" main-sub">
                <Routes location={loc} key={loc.key} >
                    <Route path={config.ROOT_PATH} element={<Category />} />
                    <Route path={config.ROOT_PATH+'/Account'} element={<Account />} />
                    <Route path={config.ROOT_PATH+'/ProductList'} element={<ProductList />} />
                    <Route path={config.ROOT_PATH+'/Cart'} element={<Cart />} />
                    <Route path={config.ROOT_PATH+'/Search'} element={<Search />} />
                    <Route path={config.ROOT_PATH+'/Feedback'} element={<Feedback />} />
                    <Route path={config.ROOT_PATH+'/About'} element={<About />} />
                    <Route path={config.ROOT_PATH+'/Address'} element={<Address />} />
                    <Route path={config.ROOT_PATH+'/Map'} element={<Map />} />
                    <Route path={config.ROOT_PATH+'/Payment'} element={<Payment />} />
                    <Route path={config.ROOT_PATH+'/Orders'} element={<Orders />} />
                    <Route path={config.ROOT_PATH+'/OrderDetails'} element={<OrderDetails />} />
                    
                    
                </Routes>
            </div>

            <div className=" main-sub">
                <Footer />
            </div> 

        </>
    )

}





























